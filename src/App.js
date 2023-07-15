import { Component } from 'react';
import './App.css';
import './container/style.css';
import './container/comsoon.css';
import Navigation from './components/nav/navigation';
import Introduction from './components/intro/intro';
import Footer from './components/footer/footer';
import Scroll from './components/scroll/scroll';
import './container/upgrade.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* {document.title = 'Noble Ackor'} */}
        <Navigation />
        <Introduction/>
        <Footer />
        <Scroll />

      </div>
    );
  }
}

export default App;

