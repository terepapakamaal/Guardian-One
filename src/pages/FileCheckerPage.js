import React, { useState, useRef } from 'react';
import { Container, Typography, Paper, Box, Button, CircularProgress, Alert, Input, LinearProgress } from '@mui/material'; // Input is now used
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axios from 'axios';

const FileCheckerPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [result, setResult] = useState({ status: 'info', message: 'Select a file (up to 32MB) to scan for malicious content.' });
    const fileInputRef = useRef(); // Still useful for clearing

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const maxSize = 32 * 1024 * 1024; // 32 MB
            if (file.size > maxSize) {
                setResult({ status: 'error', message: `File is too large. Maximum size is 32MB.` });
                setSelectedFile(null);
                if (fileInputRef.current) fileInputRef.current.value = ""; // Clear input
                return;
            }
            setSelectedFile(file);
            setResult({ status: 'info', message: `Selected file: ${file.name}` });
        } else {
            setSelectedFile(null);
            setResult({ status: 'info', message: 'No file selected.' });
        }
    };

    const handleCheckFile = async () => {
        if (!selectedFile) {
            setResult({ status: 'info', message: 'Please select a file first.' });
            return;
        }

        setIsLoading(true);
        setUploadProgress(0);
        setResult({ status: 'info', message: `Uploading and scanning ${selectedFile.name}...` });

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('/.netlify/functions/scanFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                }
            });

            let severity = 'info';
            if (response.data.status === 'clean') severity = 'success';
            else if (response.data.status === 'malicious') severity = 'error';
            else if (response.data.status === 'error') severity = 'error';

            setResult({
                status: severity,
                message: response.data.message || 'Scan complete. Check results.'
            });

        } catch (error) {
            console.error("Error scanning file:", error);
            let errorMessage = 'Failed to scan file. The service might be unavailable or there was an upload error.';
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = `Error: ${error.response.data.message}`;
            } else if (error.message) {
                 errorMessage = `Network or request error: ${error.message}`;
            }
            setResult({ status: 'error', message: errorMessage });
        } finally {
            setIsLoading(false);
            setUploadProgress(0);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    File Malicious Content Checker
                </Typography>
                <Typography paragraph>
                    Upload a file to check it against VirusTotal's database for known viruses, worms, trojans, and other malware. Limited to 32MB per file.
                </Typography>
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    {/* Button still acts as the label */}
                    <Button
                        variant="outlined"
                        component="label" // Makes the button act like a label
                        startIcon={<UploadFileIcon />}
                        disabled={isLoading}
                        sx={{ mb: 2 }}
                    >
                        Select File
                        {/* Use the MUI Input component, styled to be hidden */}
                        <Input
                            type="file"
                            onChange={handleFileChange}
                            // Use inputRef for passing ref to MUI component's underlying input
                            inputRef={fileInputRef}
                            // Add styling to visually hide the Input component itself
                            // This is a common technique for accessible hiding
                            sx={{
                                clip: 'rect(0 0 0 0)',
                                clipPath: 'inset(50%)',
                                height: 1,
                                overflow: 'hidden',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                whiteSpace: 'nowrap',
                                width: 1,
                            }}
                        />
                    </Button>

                    {selectedFile && !isLoading && (
                         <Typography variant="body1" sx={{ mb: 2 }}>Selected: {selectedFile.name}</Typography>
                    )}

                    {isLoading && (
                         <Box sx={{ width: '100%', mb: 2 }}>
                             <LinearProgress variant="determinate" value={uploadProgress} />
                             <Typography variant="body2" color="textSecondary">{`Uploading: ${uploadProgress}%`}</Typography>
                         </Box>
                     )}


                    <Box sx={{ position: 'relative', display: 'inline-block' }}>
                         <Button
                            variant="contained"
                            onClick={handleCheckFile}
                            disabled={isLoading || !selectedFile}
                            size="large"
                        >
                            Scan Selected File
                        </Button>
                         {isLoading && uploadProgress === 100 && ( // Show spinner only after upload, during scan
                             <CircularProgress
                                size={24}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            />
                         )}
                    </Box>

                     {result.message && (
                        <Alert severity={result.status} sx={{ mt: 3, textAlign: 'left' }}>
                            {result.message}
                        </Alert>
                     )}
                     <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                         Note: No system is 100% accurate. Do not open files from untrusted sources even if scanned clean.
                     </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default FileCheckerPage;
