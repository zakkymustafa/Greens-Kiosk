import React from 'react';
import Menu from './components/Menu.js';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <Router>
        <Menu/>
        <Route path='/' exact component={Home}/>
        <Home/>
        <Route path='/about' exact component={About}/> 
        <About/>
      </Router>
    
      
    )
  }
}

export default App;
