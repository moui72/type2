import React, {Component} from "react";
import Banner from "./_Banner.js";
import {Switch, Route, withRouter} from "react-router-dom";
import Page from "./Page";
import data from "./_data";
import {GoEye, GoMarkGithub} from "react-icons/lib/go";
import {TransitionGroup, CSSTransition} from "react-transition-group";

class App extends Component {
  render() {
    const {match, location, history} = this.props;
    const routes = Object
      .keys(data)
      .map(section => {
        const intro = <p>{data[section].intro}</p> || "";
        const subsections = typeof data[section].items !== "undefined"
          ? data[section]
            .items
            .map(subsection => {
              const image = subsection.ss
                ? (<img
                  className="card-img-top"
                  src={subsection.ss}
                  alt={"Screenshot of " + subsection.title + "."}/>)
                : ("");
              const title = subsection.title
                ? subsection.title
                : subsection.section;
              const repo = subsection.git
                ? (
                  <a href={subsection.git} className="card-link">
                    <GoMarkGithub color="black" size=".8rem" className="mr-1"/>
                    GitHub
                  </a>
                )
                : ("");
              const link = subsection.url
                ? (
                  <a href={subsection.url} className="card-link">
                    <GoEye color="black" size=".8rem" className="mr-1"/>
                    Demo
                  </a>
                )
                : ("");
              let text = subsection.description
                ? subsection.description + " "
                : "";
              text += subsection.status
                ? subsection.status
                : "";
              const techs = <ul className="list-group list-group-flush">
                {subsection.techs
                  ? subsection
                    .techs
                    .map(tech => {
                      return <li className="list-group-item">
                        <img
                          src={tech.icon}
                          alt={tech.name + ' logo'}
                          style={{
                          height: tech.name === "PHP"
                            ? '.8rem'
                            : '1.5rem',
                          marginRight: '1rem'
                        }}/>
                        <a href={tech.url}>{tech.name}</a>
                      </li>;
                    })
                  : ""}
              </ul>
              return (
                <div key={section + "-" + title} className="py-2 col-12 col-md-6">
                  <div className="card shadow-sm">
                    {image}
                    <div className="card-body subsection-body">
                      <h3 className="card-title">{title}</h3>
                      <p className="card-text">{text}</p>
                    </div>

                    {techs}
                    <div className="card-footer">
                      {link}
                      {repo}
                    </div>
                  </div>
                </div>
              );
            })
          : "";
        return (<Route
          key={section}
          path={"/" + section}
          render={() => (
          <Page
            title={section
            .charAt(0)
            .toUpperCase() + section.slice(1)}>
            {" "}
            {intro}
            <div className="row">{subsections}
            </div>{" "}
          </Page>
        )}/>);
      });
    return (
      <div className="App">
        <div className="wrap">
          <Banner full={true}/>
          <main>
            <TransitionGroup className="routes">
              <CSSTransition
                key={location.key}
                classNames={{
                appear: "animated",
                appearActive: "bounceIn",
                enter: "animated",
                enterActive: "bounceIn",
                exit: "animated",
                exitActive: "fadeOutDown"
              }}
                timeout={400}>
                <Switch location={location}>
                  {routes}
                  <Route
                    render={() => {
                    return <div></div>
                  }}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </main>
        </div>
        <footer>
          <p>&copy; 2018 Tyler Peckenpaugh</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
