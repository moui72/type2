export default {
  home : {
    intro: "Welcome! This site is currently a work in progress. Check back soon to see how i" +
        "t develops."
  },
  designs : {
    intro: "Selected designs. These are mock-ups or demos, not live sites.",
    items: [
      {
        title: "Underpowered",
        description: "Web presence for an online gaming community.",
        url: "http://peckenpaugh.us/demos/",
        status: "Defunct; community moved to facebook.",
        ss: "underpowered.png"
      }, {
        title: "Age of Conan",
        description: "Fan site for an online game.",
        url: "http://peckenpaugh.us/demos/aoc/aoc.htm",
        status: "Defunct; client no longer interested in game.",
        ss: "aoc.png"
      }, {
        title: "Peckenpaugh.us",
        description: "Personal portfolio site.",
        url: "http://peckenpaugh.us",
        status: "Live.",
        ss: "peckenpaugh.png"
      }
    ]
  },
  apps : {
    intro: "Selected projects.",
    items: [
      {
        title: "XDM",
        description: "Team randomizer for Dice Masters tabletop game.",
        url: "http://gotu-game.com/XDM",
        techs: [
          "AngularJS", "PHP"
        ],
        git: "https://github.com/moui72/XDM"
      }, {
        title: "RankGames",
        description: "This app is intended to help you build ranked lists of games from those in your " +
            "collection on Board Game Geek.",
        url: "http://rankgames.ty-pe.com/",
        techs: [
          "Angular 2", "Ionic", "TypeScript"
        ],
        git: "https://github.com/moui72/ionRankGames"
      }, {
        title: "RankGames2",
        description: "This app is intended to help you build ranked lists of games from those in your " +
            "collection on Board Game Geek.Total rewrite of my previous RankGames app.Perform" +
            "ance should be much improved, and I think the animations really help usability.",
        url: "http://gotu-game.com/rankgames2",
        techs: [
          "Vue.js", "Vuex", "Animate.css"
        ],
        git: "https://github.com/moui72/rankgames2"
      }
    ]
  }
};

let re = {
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
}