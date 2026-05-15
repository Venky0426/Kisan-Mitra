import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import VoiceAssistant from './components/VoiceAssistant';
import Landing from './pages/Landing';
import CropDoctor from './pages/CropDoctor';
import Calculator from './pages/Calculator';
import Calendar from './pages/Calendar';
import Videos from './pages/Videos';
import Schemes from './pages/Schemes';
import MarketPrices from './pages/MarketPrices';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/crop-doctor" element={<CropDoctor />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/market-prices" element={<MarketPrices />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <VoiceAssistant />
        </Layout>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}