import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super ()

  }

  render (){
    return(
      <div>
        <header className="top-nav-bar"></header>
        <div className="side-nav-bar"></div>
        <body className="list-display-container">
          <div className="list-display">
          <h1>Title</h1>
          </div>
        </body>
      </div>
    )
  }
}

export default App;
