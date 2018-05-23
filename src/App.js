import React, {Component} from "react";
import Banner from './banner.js'

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="wrap">
          <Banner full={true}></Banner>

          <main className="page">
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
