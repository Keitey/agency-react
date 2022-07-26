import React from 'react';
import GlobalStyle from "./styles/global";
import Header from './components/Header/Header.jsx';
import Cards from './components/Cards/Cards';
import Jobs from './components/Jobs/Jobs';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>     
      <Header />
      <Cards />
      <Jobs />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App;