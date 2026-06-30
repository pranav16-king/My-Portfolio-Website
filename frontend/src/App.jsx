import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import './index.css';

// Lazy-loaded routes
const Home = React.lazy(() => import('./pages/Home'));
const Achievements = React.lazy(() => import('./pages/Achievements'));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen bg-theme-bg flex items-center justify-center">
          <LoadingSpinner />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
