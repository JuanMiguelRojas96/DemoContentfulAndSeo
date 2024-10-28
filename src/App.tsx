// src/App.tsx
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppNavbar from './components/atoms/Navbar/Navbar';
import AppRoutes from './routes/Routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppNavbar/>
      <AppRoutes />
    </Router>
  );
};

export default App;
