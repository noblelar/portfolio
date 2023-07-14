import { Component } from 'react';
import './App.css';
import './container/style.css';
import './container/comsoon.css';
import Navigation from './components/nav/navigation';
import './container/upgrade.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navigation />

      </div>
    );
  }
}

export default App;

