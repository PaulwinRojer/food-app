import React from 'react'; 
import Navbar from './components/header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
