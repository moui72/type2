import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Banner from "./_Banner";
import Pages from "./_Pages";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fancyClasses: "fancy animated rubberBand"
    }
    this.setTimer(800)

  }

  setTimer = (ms) => {
    return setTimeout(this.toggleFancyClasses, ms)
  }

  toggleFancyClasses = () => {
    const current = (this.state.fancyClasses.indexOf('animated') > -1)
    this.setState(prevState => {
      return {
        fancyClasses: current
          ? "fancy"
          : "fancy animated tada"
      }
    });
    this.setTimer(1000 * 30)
  }

  render() {
    const {location} = this.props;

    return (
      <div className="App">
        <div className="wrap">
          <Banner full={true}/>
          <Pages location={location}></Pages>
          <div className={this.state.fancyClasses}>Welcome!</div>

        </div>
        <footer>
          <p>&copy; 2018 Tyler Peckenpaugh</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
