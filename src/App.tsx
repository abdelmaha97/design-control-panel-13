import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import News from "./pages/News";
import Projects from "./pages/Projects";
import Results from "./pages/Results";
import Auctions from "./pages/Auctions";
import DashboardLayout from "./components/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Jobs />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <News />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Projects />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/results"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Results />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auctions"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Auctions />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;