// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

import Home from './contents/Home';
import About from './contents/About';
import Blog from './contents/Blog';
import Projects from './contents/Projects';
//import Education from './contents/Education';
//import Skills from './contents/Skills';
//import Contact from './contents/Contact';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </div>
    </Router>
    );
  }


export default App;
