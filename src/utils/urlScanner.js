import axios from 'axios';

const GOOGLE_SAFE_BROWSING_API = 'https://safebrowsing.googleapis.com/v4/threatMatches:find';
const API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your Google API Key

export const scanUrl = async (url) => {
  try {
    const requestBody = {
      client: {
        clientId: "your-client-id",
        clientVersion: "1.0.0"
      },
      threatInfo: {
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
        platformTypes: ["ANY_PLATFORM"],
        threatEntryTypes: ["URL"],
        threatEntries: [{ url }]
      }
    };

    const response = await axios.post(
      `${GOOGLE_SAFE_BROWSING_API}?key=${API_KEY}`,
      requestBody
    );

    return response.data.matches ? "URL is unsafe" : "URL is safe";
  } catch (error) {
    console.error("Error scanning URL:", error);
    throw new Error("Failed to scan URL");
  }
};
