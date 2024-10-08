import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SubjectPage from './pages/SubjectPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/:subject" element={<SubjectPage />} />
    </Routes>
  </Router>
);

export default App;