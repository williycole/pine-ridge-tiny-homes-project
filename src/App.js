import React  from 'react'
import './styles/App.scss';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
