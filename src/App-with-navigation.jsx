import { useState } from 'react'
import Header from './components/Header-nav'
import Footer from './components/Footer-nav'
import HomePage from './pages/HomePage-basic'
import PricingPage from './pages/PricingPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage />
      case 'terms':
        return <TermsOfServicePage />
      case 'privacy':
        return <PrivacyPolicyPage />
      case 'refund':
        return <RefundPolicyPage />
      default:
        return <HomePage />
    }
  }

  // Simple navigation function
  const navigate = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header navigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

export default App

