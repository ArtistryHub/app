import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ArtistHome from './components/pages/ArtistHome';
import OrganizerHome from './components/pages/OrganizerHome';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/products"><Products /></Route> 
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/artist"><ArtistHome /></Route>
          <Route path="/organizer"><OrganizerHome /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;