import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "thetrainstation",
    rightPage: "theharbor"
  },
  thetrainstation: {
    image: "img/station.jpg",
    text:
      "Welcome to the train station. Are you commuting or going on vacation?",
    leftLabel: "Commuting",
    rightLabel: "Traveling",
    leftPage: "caltrain",
    rightPage: "amtrak"
  },
  theharbor: {
    text:
      "A massive tsunami has destroyed all the ships. Looks like you'll have to take the train.",
    leftLabel: "Take the train.",
    leftPage: "thetrainstation"
  },
  caltrain: {
    text: "You're taking Caltrain today. Where are you going?",
    leftLabel: "Work",
    rightLabel: "School",
    leftPage: "atwork",
    rightPage: "atschool"
  },
  atwork: {
    text: "Wow. No, don't do this to yourself. Go have some fun!",
    leftLabel: "Have fun",
    rightLabel: "Go to school",
    leftPage: "amtrak",
    rightPage: "atschool"
  },
  atschool: {
    text: "What are you doing? Seriously, go have some fun. Live your life!",
    leftLabel: "Have fun",
    rightLabel: "Don't have fun",
    leftPage: "amtrak",
    rightPage: "atwork"
  },
  amtrak: {
    text:
      "Woo-woo! You're taking Amtrak to your vacation destination! Where do you wanna go?",
    leftLabel: "New York",
    middleLabel: "Oregon",
    rightLabel: "Florida",
    leftPage: "nyc",
    middlePage: "oregon",
    rightPage: "florida"
  },
  nyc: {
    text:
      "Welcome to the city that never sleeps. Whatcha wanna do here, traveler?",
    leftLabel: "See Hamilton.",
    middleLabel: "Eat pizza.",
    rightLabel: "Look for Spider-Man.",
    leftPage: "hamilton",
    middlePage: "pizza",
    rightPage: "spiderman"
  },
  hamilton: {
    text:
      "Nice choice. But Hamilton tickets are crazy expensive. How are you getting in?",
    leftLabel: "Pay up.",
    rightLabel: "Sneak in.",
    leftPage: "pay",
    rightPage: "sneak"
  },
  pay: {
    text: "Pleb. Enjoy the show!"
  },
  sneak: {
    text: "Sneaky. Just kidding, you got caught. Enjoy prison!"
  },
  pizza: {
    text: "PIZZA TIME!"
  },
  spiderman: {
    text: "LMAO Spider-Man isn't real."
  },
  oregon: {
    text: "Welcome to Oregon. There's lot's to do here. Do you wanna...",
    leftLabel: "Visit Crater Lake?",
    rightLabel: "Go to Portland?",
    leftPage: "craterlake",
    rightPage: "portland"
  },
  craterlake: {
    text: "Beautiful, isn't it? Good thing you caught it on a cloudless day!"
  },
  portland: {
    text: "Man, this place is WEIRD. "
  },
  florida: {
    text: "Welcome to the Sunshine State! What do you wanna do for fun?",
    leftLabel: "Go on a cruise!",
    rightLabel: "Go to Disney World!",
    leftPage: "cruise",
    rightPage: "disney"
  },
  cruise: {
    text:
      "Cruises are bad for the environment, not to mention that all the ships have been knocked out by another tsunami."
  },
  disney: {
    text:
      "'The happiest place on Earth' is plagued by lines. Wanna go somewhere else?",
    leftLabel: "Yes",
    rightLabel: "No",
    leftPage: "amtrak",
    rightPage: "lines"
  },
  lines: {
    text:
      "Well, you know what they say. If you can't beat 'em, join 'em. Have fun being a loser waiting like everybody else!"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    var imageElement = "";
    if (pageData.image) {
      imageElement = <img src={pageData.image} width="200" />;
    }
    return (
      <div className="App">
        <p>
          {pageData.image}
          <br />
          {imageElement}
        </p>
        <p>{pageData.text}</p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.middlePage)}>
          {pageData.middleLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      </div>
    );
  }
}

export default App;
