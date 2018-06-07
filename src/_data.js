import React from "react";
import AOCSS from "./assets/aoc.png"
import PPHSS from "./assets/pph.us.png"
import UPDSS from "./assets/underpowered.png"
import XDMSS from "./assets/XDM.png"
import RG1SS from "./assets/rg.png"
import RG2SS from "./assets/rg2.png"
import VUEICO from "./assets/vue.svg"
import ANGICO from "./assets/angular.svg"
import IONICO from "./assets/ionic.svg"
import PHPICO from "./assets/php-logo.svg"
import CSSICO from "./assets/css.svg"
import TypeLogo from "./assets/type-logo.plain.nosubtext.svg"

const Animate = {
  name: "Animate.css",
  url: "https://daneden.github.io/animate.css/",
  icon: CSSICO
}
const Vue = {
  name: "Vue.js",
  url: "https://vuejs.org/",
  icon: VUEICO
}
const Vuex = {
  name: "Vuex",
  url: "https://vuex.vuejs.org/",
  icon: VUEICO
}
const Angular2 = {
  name: "Angular2",
  url: "https://v2.angular.io/docs/ts/latest/",
  icon: ANGICO
}
const AngularJS = {
  name: "AngularJS",
  url: "https://ionicframework.com/docs/2.3.0/api/",
  icon: ANGICO
}
const Ionic = {
  name: "Ionic",
  url: "https://ionicframework.com/docs/2.3.0/api/",
  icon: IONICO
}
const PHP = {
  name: "PHP",
  url: "https://php.net",
  icon: PHPICO
}

export default {
  home : {
    intro: (
      <div >
        <p>
          Welcome to Tyler Peckenpaugh's website! This site is currently a work in
          progress. Check back soon to see how it develops.
        </p>
        <p>
          I am nearing completion of my PhD in theoretical linguistics from {" "}
          <a href="http://gc.cuny.edy">The Graduate Center, CUNY</a>. I am also an avid
          JavaScript programmer. This site is intended to show off my technical and design
          skills. If you are more interested in my academic work, you can find that over
          at my my other site: {" "}
          <a href="http://peckenpaugh.us">peckenpaugh.us</a>.
        </p>
        <img
          src={TypeLogo}
          alt="Site logo."
          className="d-block mx-auto mt-5"
          style={{
          height: "15rem",
          maxHeight: "40vh"
        }}/>

      </div>

    )
  },
  designs : {
    intro: "Selected designs. These are mock-ups or demos, not live sites, unless otherwise " +
        "stated.",
    items: [
      {
        title: "Underpowered",
        description: "Web presence for an online gaming community.",
        url: "http://peckenpaugh.us/demos/",
        status: "Defunct; community moved to facebook.",
        ss: UPDSS
      }, {
        title: "Age of Conan",
        description: "Fan site for an online game.",
        url: "http://peckenpaugh.us/demos/aoc/aoc.htm",
        status: "Defunct; client no longer interested in game.",
        ss: AOCSS
      }, {
        title: "Peckenpaugh.us",
        description: "Personal portfolio site.",
        url: "http://peckenpaugh.us",
        status: "Live.",
        ss: PPHSS
      }
    ]
  },
  apps : {
    intro: "Selected projects.",
    items: [
      {
        title: "XDM",
        ss: XDMSS,
        description: "Team randomizer for Dice Masters tabletop game.",
        url: "http://gotu-game.com/XDM",
        techs: [
          AngularJS, PHP
        ],
        git: "https://github.com/moui72/XDM"
      }, {
        title: "RankGames2",
        ss: RG2SS,
        description: "This app is intended to help build ranked lists of games from those in a collect" +
            "ion on Board Game Geek. It is a total rewrite of my previous RankGames app, usin" +
            "g Vue.js in place of Angular2+Ionic2.",
        url: "http://gotu-game.com/rankgames2",
        techs: [
          Vue, Vuex, Animate
        ],
        git: "https://github.com/moui72/rankgames2"
      }, {
        title: "RankGames",
        ss: RG1SS,
        description: "This app is intended to help you build ranked lists of games from those in your " +
            "collection on Board Game Geek.",
        url: "http://rankgames.ty-pe.com/",
        techs: [
          Angular2, Ionic
        ],
        git: "https://github.com/moui72/ionRankGames"
      }
    ]
  }
};
/*
const resume = {
  resume: {
    display: "r&eacute;sum&eacute;",
    intro: "",
    basics: {
      name: "Tyler J. Peckenpaugh",
      contact: {
        address: "18-33 Ditmars Blvd Apt. 3A, Astoria, NY 11105",
        email: "peckenpaugh@gmail.com",
        phone: "206-427-7658",
        website: "www.peckenpaugh.us"
      }
    },
    items: [
      {
        section: "strengths",
        items: [
          "High level of expertise and experience with HTML, CSS and JavaScript", "Proficient with several front-end JavaScript libraries, including JQuery and Ang" +
              "ularJS",
          "Experience with back-end coding, including PHP and Express.js/Node.js, and datab" +
              "ases such as MySQL and SQLite",
          "Experience with Adobe Photoshop, Adobe InDesign, and some experience with Adobe " +
              "Flash/ActionScript",
          "Experienced with git revision control",
          "Quick learner, excellent problem-solver, and independently motivated",
          "Excellent communication and interpersonal skills, especially with regard to comm" +
              "unicating technical information to non-technically oriented listeners"
        ]
      }, {
        section: "objective",
        items: ["Create elegant, functional applications and responsive websites."]
      }, {
        section: "work history",
        items: [
          {
            employer: "Linguistics Department, CUNY Graduate Center",
            location: "New York, NY",
            position: "Webmaster",
            date: "2014-2015",
            duty: "Created and maintained website content for the linguistics department using the " +
                "Kentico CMS."
          }, {
            employer: "Writing in the Disciplines, LaGuardia Community College, CUNY",
            location: "Long Island City, NY",
            position: "Writing Fellow",
            date: "September 2013 - June 2014",
            duty: "Lead seminars meant to help faculty from various disciplines integrate writing i" +
                "nto their curriculum. Designed materials for these seminars."
          }, {
            employer: "Second Language Acquisition Lab, CUNY Graduate Center",
            location: "New York, NY",
            position: "Research Assistant",
            date: "January 2009 - January 2011",
            duty: "Collected and entered data for a projected related to literacy and bilingualism." +
                " Ran statistics using SPSS and analyzed results."
          }, {
            employer: "The Common Language Project",
            location: "Seattle, WA",
            position: "Web Developer",
            date: "January 2008 - January 2009",
            duty: "Built and maintained a content management system for an online news magazine, an" +
                "d provided technical and design expertise."
          }, {
            employer: "ResTek, Western Washington University",
            location: "Bellingham, WA",
            position: "Webmaster and Public Relations Committee Member",
            date: "January 2004 - January 2008",
            duty: "Wrote content, designed graphics, and technically maintained a website which edu" +
                "cated students regarding the use of the school's computer networks and online se" +
                "rvices; wrote and designed educational materials as part of a PR campaign to imp" +
                "rove students' technical literacy."
          }, {
            employer: "Self-employed",
            location: "Seattle, WA",
            position: "Web Designer and Developer",
            date: "January 2003 - January 2009",
            duty: "Designed websites and web applications for numerous freelance clients, and provi" +
                "ded design and technical expertise to those clients."
          }
        ]
      }, {
        section: "education",
        items: [
          {
            school: "CUNY Graduate Center",
            location: "New York, NY",
            degree: "Ph.D. in Theoretical Linguistics",
            status: "In progress, expected 2016. Current GPA: 4.0."
          }, {
            school: "Western Washington University",
            location: "Bellingham, WA",
            degree: "Double major B.A. in Theoretical Linguistics, English Literature",
            status: "Graduated cum laude, 2008"
          }
        ]
      }, {
        section: "other skills and experience",
        items: ["Experience with LaTeX typesetting software", "Experience with Wordpress, Drupal and Kentico content management systems", "Extensive research and academic writing experience", "Experience with SPSS and R statistical packages"]
      }, {
        section: "other interests",
        items: ["Theoretical linguistics", "Accessibility for the Internet", "Information structure", "User interface design"]
      }
    ]
  }
};
*/