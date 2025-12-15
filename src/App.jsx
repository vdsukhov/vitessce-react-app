import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DynamicPage from './pages/DynamicPage';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<DynamicPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
