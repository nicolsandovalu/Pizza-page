import './App.css';
import React from 'react';
import Nav from './components/Nav';
import AppRoutes from './router/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { PizzasProvider } from './context/PizzasDescription';

function App() {
  return (
    <div className="App">
    
    <PizzasProvider>
    <Router>
      <Nav/>
      <AppRoutes/>
    </Router>
    </PizzasProvider>

    </div>
  );
}

export default App;
