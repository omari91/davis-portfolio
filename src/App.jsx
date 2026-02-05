import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import ContactPage from './pages/ContactPage';
import CredibilityPage from './pages/CredibilityPage';
import HomePage from './pages/HomePage';
import ProofPage from './pages/ProofPage';
import VisionPage from './pages/VisionPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="proof" element={<ProofPage />} />
        <Route path="credibility" element={<CredibilityPage />} />
        <Route path="vision" element={<VisionPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
