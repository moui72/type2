import React, {Component} from "react";
import {GoEye, GoMarkGithub} from "react-icons/lib/go";
import data from "./_data";
import Page from "./_Page";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Switch, Route} from "react-router-dom";

export default class Pages extends Component {

  render() {
    const location = this.props.location
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
              <Route render={() => {
                return <div></div>
              }}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    )
  }
}