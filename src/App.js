import React, {Component} from "react";
import Banner from './banner.js'
import {Switch, Route} from 'react-router-dom'
import Home from "./home";
class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="wrap">
          <Banner full={true}></Banner>

          <main className="page">
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
            <h1 className="App-title">Welcome to React</h1>
            <p className="App-intro">
              To get started, edit
              <code>src/App.js</code>
              and save to reload.
            </p>
          </main>
        </div>
        <footer>
          <p>&copy; 2018 Tyler Peckenpaugh</p>
        </footer>
      </div>
    );
  }
}

export default App;
