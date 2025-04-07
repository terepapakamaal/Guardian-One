import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav'; // Import BottomNav from its own file
import Home from './pages/Home';
import Awareness from './pages/Awareness';
import SmsSpamCheck from './pages/SmsSpamCheck';
import URLScanner from './pages/URLScanner';
import PasswordCenter from './pages/PasswordCenter';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/spam" element={<SmsSpamCheck />} />
        <Route path="/url" element={<URLScanner />} />
        <Route path="/password" element={<PasswordCenter />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
     <BottomNav/>
    </Router>
  );
}

export default App;

