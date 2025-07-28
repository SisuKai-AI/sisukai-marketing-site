import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header-with-router';
import Footer from './components/Footer-with-router';
import WaitlistModal from './components/WaitlistModal';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header onJoinWaitlist={() => setShowModal(true)} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onJoinWaitlist={() => setShowModal(true)} />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/refund" element={<RefundPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Global Waitlist Modal */}
        {showModal && (
          <WaitlistModal onClose={() => setShowModal(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;