import React, {Component} from "react";
import Banner from './_Banner.js'
import {Switch, Route} from 'react-router-dom'
import Page from "./Page";
import data from "./_data";
import {GoEye, GoMarkGithub} from "react-icons/lib/go"
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
              const image = subsection.ss
                ? <img
                    className="card-img-top"
                    src={"http://ty-pe.com/images/screenshots/" + subsection.ss}
                    alt={"Screenshot of " + subsection.title + "."}/>
                : '';
              const title = subsection.title
                ? subsection.title
                : subsection.section;
              const repo = subsection.git
                ? <a href={subsection.git} className="card-link">
                    <GoMarkGithub color="black" size=".8rem" className="mr-1"></GoMarkGithub>
                    GitHub</a>
                : '';
              const link = subsection.url
                ? <a href={subsection.url} className="card-link">
                    <GoEye color="black" size=".8rem" className="mr-1"></GoEye>
                    Demo</a>
                : '';
              let text = subsection.description
                ? subsection.description + ' '

                : '';
              text += subsection.status
                ? subsection.status
                : '';
              const techs = subsection.techs
                ? subsection
                  .techs
                  .map(tech => {
                    return (
                      <li></li>
                    )
                  })
                : '';
              return (
                <div key={section + "-" + title} className="py-2 col-12 col-md-6">
                  <div className="card shadow">
                    {image}
                    <div className="card-body subsection-body">
                      <h3 class="card-title">{title}</h3>
                      <p class="card-text">{text}</p>
                      {link}
                      {repo}
                    </div>
                  </div>
                </div>
              )
            })
          : '';
        return (
          <Route
            key={section}
            path={"/" + section}
            render=
            {() => (<Page title={section.charAt(0).toUpperCase() + section.slice(1)}> {intro} <div class="row">{subsections} </div> </Page> ) }></Route>
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
