import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Index from './pages/Index';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import SettingsPage from './pages/Settings';
import NewsPage from './pages/News';
import ResultsPage from './pages/Results';
import ProjectsPage from './pages/Projects';
import IndividualUsersPage from './pages/IndividualUsers';
import CompaniesPage from './pages/Companies';
import Jobs from './pages/Jobs';
import Tenders from './pages/Tenders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/results" element={<ResultsPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/individual-users" element={<IndividualUsersPage />} />
                  <Route path="/companies" element={<CompaniesPage />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/tenders" element={<Tenders />} />
                </Routes>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;