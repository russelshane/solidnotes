import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import { globalStyles } from './styles/GlobalStyle';

// Dynamic Components
const Index = loadable(() => import('./pages/Index'));
const Dashboard = loadable(() => import('./pages/Dashboard'));

const Application: React.FC = () => {
  // Initialize app global styles created with @stitches/react module
  globalStyles();

  // Using react-router-dom v6
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.INDEX} element={<Index />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Application;
