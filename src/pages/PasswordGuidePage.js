import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert, Paper } from '@mui/material'; // Added Box, Alert for better layout/feedback
// Removed axios as it's no longer needed

const PasswordChecker = () => { // Renaming component if this replaces PasswordGuidePage
    const [password, setPassword] = useState('');
    const [strengthResult, setStrengthResult] = useState({ severity: 'info', message: '' }); // More descriptive state
    const [generatedPassword, setGeneratedPassword] = useState('');

    const checkPasswordStrength = () => {
        let severity = 'error'; // Default to weak
        let message = 'Weak Password. ';
        let recommendations = [];

        if (password.length < 8) recommendations.push('Should be at least 8 characters.');
        if (!/[A-Z]/.test(password)) recommendations.push('Needs uppercase letter.');
        if (!/[a-z]/.test(password)) recommendations.push('Needs lowercase letter.');
        if (!/\d/.test(password)) recommendations.push('Needs a number.');
        if (!/[!@#$%^&*]/.test(password)) recommendations.push('Needs a special character (!@#$%^&*).');

        if (recommendations.length === 0) {
            severity = 'success';
            message = 'Strong Password';
        } else {
             message += recommendations.join(' ');
        }

        setStrengthResult({ severity, message });
    };

    const generatePassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let generated = '';
        const length = 12; // Use variable for clarity
        for (let i = 0; i < length; i++) {
            generated += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setGeneratedPassword(generated);
        // Optionally clear strength result when generating new pw
        setStrengthResult({ severity: 'info', message: '' });
        setPassword(''); // Clear input field after generating
    };

    // checkEmailBreach function REMOVED

    return (
        // Assuming this replaces the content of PasswordGuidePage.js
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
             <Paper elevation={2} sx={{ p: 3 }}> {/* Added Paper for consistency */}
                <Typography variant="h4" component="h1" gutterBottom>
                    Password Tools
                </Typography>
                <Typography paragraph>
                   Check the strength of your password or generate a new strong one. Remember to use unique passwords for different sites.
                </Typography>

                <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
                    <TextField
                        label="Enter Password to Check"
                        type="password" // Use password type
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                    />
                    <Box sx={{ mt: 1, mb: 2, display: 'flex', gap: 2 }}> {/* Use Box for button layout */}
                         <Button variant="contained" color="primary" onClick={checkPasswordStrength} disabled={!password}>
                            Check Strength
                        </Button>
                         <Button variant="contained" color="secondary" onClick={generatePassword}>
                            Generate Strong Password
                        </Button>
                    </Box>
                </Box>


                {/* Display Strength Result */}
                {strengthResult.message && (
                    <Alert severity={strengthResult.severity} sx={{ mt: 2 }}>
                        {strengthResult.message}
                    </Alert>
                )}

                {/* Display Generated Password */}
                {generatedPassword && (
                    <Box sx={{ mt: 2, p: 2, border: '1px dashed grey', borderRadius: 1 }}>
                         <Typography variant="h6" component="p" gutterBottom>Generated Password:</Typography>
                         <Typography sx={{ fontFamily: 'monospace', wordBreak: 'break-all', fontSize: '1.1rem' }}>
                             {generatedPassword}
                         </Typography>
                         <Typography variant="caption" display="block" sx={{mt: 1}}>
                             Copy this password and store it securely (e.g., in a password manager).
                         </Typography>
                    </Box>
                )}
             </Paper>
        </Container>
    );
};

// Ensure this component is exported correctly, e.g., if replacing PasswordGuidePage:
// export default PasswordGuidePage;
// Or keep as PasswordChecker if used differently.
export default PasswordChecker; // Assuming this is the intended export
