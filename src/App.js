import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes/routes'
import './style/main.css'
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <Router>
      <Routers/>
    </Router>
  );
}

export default App;
