import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Index from './pages/Index';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import SettingsPage from './pages/Settings';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;