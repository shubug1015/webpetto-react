import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ScrollToTop from 'ScrollToTop';
import History from 'Components/History';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import NotFound from 'Routes/NotFound';
import Footer from 'Components/Footer';
import OurWork2 from 'Routes/OurWork2';
import Temp from 'Routes/Temp';

export default () => {
  const homeRef = {
    mainRef: useRef(null),
    aboutRef: useRef(null),
    whatWeDoRef: useRef(null),
    ourWorkRef: useRef(null),
    columnRef: useRef(null),
    contactRef: useRef(null),
  };

  return (
    <Router>
      <ScrollToTop />
      <History />
      <Header />
      <Switch>
        <Route path='/' exact component={Temp} />
        <Route path='/home' exact render={() => <Home homeRef={homeRef} />} />
        <Route path='/our_work' exact render={() => <OurWork2 />} />
        <Route path='/404' exact component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
      <Footer />
    </Router>
  );
};
