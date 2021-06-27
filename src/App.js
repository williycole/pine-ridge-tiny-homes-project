import React from 'react'
import Header from './components/header-nav-footer/Header'
import Main from './components/Main';
import Footer from './components/header-nav-footer/Footer';

//Change to functional component
function App() {
    return (
      <div id="main-app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
}

export default App;
