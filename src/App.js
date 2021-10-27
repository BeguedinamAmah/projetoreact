import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
