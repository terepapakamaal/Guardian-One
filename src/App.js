import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/Navbar'; // Corrected import for Navbar
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import Awareness from './pages/Awareness';
import SmsSpamCheck from './components/SmsSpamCheck';
import UrlScannerPage from './components/UrlScannerPage'; // Corrected import for URLScanner
import PasswordCenter from './pages/PasswordCenter';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <ResponsiveAppBar /> {/* Updated component name */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/spam" element={<SmsSpamCheck />} />
        <Route path="/url" element={<UrlScannerPage />} /> {/* Updated component name */}
        <Route path="/password" element={<PasswordCenter />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
