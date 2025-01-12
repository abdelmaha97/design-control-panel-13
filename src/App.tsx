import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Index from './pages/Index';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;