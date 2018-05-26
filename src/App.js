import React, {Component} from "react";
import Banner from './_Banner.js'
import {Switch, Route} from 'react-router-dom'
import Page from "./Page";
import data from "./_data";
class App extends Component {
  render() {

    const routes = Object
      .keys(data)
      .map(section => {
        const intro = <p>{data[section].intro}</p> || '';
        const subsections = typeof data[section].items !== 'undefined'
          ? data[section]
            .items
            .map(subsection => {
              let image = subsection.ss
                ? <div><img
                    src={"http://ty-pe.com/images/screenshots/" + subsection.ss}
                    alt={"Screenshot of " + subsection.title + "."}/></div>
                : ''
              return (
                <div key={section + "-" + subsection.title}>
                  <h2>{subsection.title}</h2>
                  <p>{subsection.description}</p>
                  {image}
                  <a href={subsection.url}>Demo</a>
                </div>
              )
            })
          : '';
        return (
          <Route
            key={section}
            path={"/" + section}
            render=
            { () => ( <Page title={section.charAt(0).toUpperCase() + section.slice(1)}> {intro} {subsections} {JSON.stringify(data[section])} </Page> ) }></Route>
        )
      })

    return (
      <div className="App">
        <div className="wrap">
          <Banner full={true}></Banner>

          <main>
            <Switch>
              {routes}
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
