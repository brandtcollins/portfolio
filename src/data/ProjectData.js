import React from "react";
const { v4: uuidv4 } = require("uuid");

const projects = [
  {
    id: uuidv4(),
    headline: "Sonder",
    subhead: "A Note Taking App",
    teaser: "Sonder is a note taking app built using React.",
    desc:
      "Sonder is a note taking app I built with React. A note taking app felt like the perfect way to familarize myself with the design patterns common with React but also an application in which I could make fairly feature rich.",
    stack: "React, React Bootstrap, Firebase",
    code: "https://github.com/brandtcollins/Sonder",
    demo: "https://sonder-581b0.web.app/",
    images: [
      "/images/ProjectScreenShots/Sonder/Sonder-Desktop.png",
      "/images/ProjectScreenShots/Sonder/Sonder-Mobile.png",
      "/images/ProjectScreenShots/Sonder/Register.png",
      "/images/ProjectScreenShots/Sonder/Signin.png",
    ],
    goal:
      "By design, this project will forever be in progress. Sonder is an app that I plan to take learnings and ideas that I come across and apply them to a personal project of my own. Currently, my goals with Sonder are to take a deeper look at state management and the role it plays with deep componenets. I also wanted to use a CSS framework that I was already familiar with (Bootstrap) and understand how it works with React.",
    lessons: (
      <>
        <p>
          When I started building Sonder, I had a solid grasp of useState but I
          wanted to learn other ways to manage and change state. Sonder showed
          me the strength of the useContext/useReducer pairing and how these two
          hooks can help manage state across components at different depths.
          Also, I really enjoyed that instead of creating functions to create
          notes, delete notes, edit notes, change categories etc. I could use
          the useReducer hook to dispatch case statements for each action with
          an associated payload.
        </p>
        <p>
          I also learned that, while Bootstrap is great, there is a certain
          level of bloat that it brings to your code due to needing to pass
          parameters as objects within props. This can be handy to quickly style
          and customize Bootstrap's components but it can muck up the
          readability of your app while doing so.
        </p>
      </>
    ),
    future: (
      <>
        <p>
          I plan on working on this app, keeping it ever changing with the new
          things that I learn. Next up I aim to implement new features such as
          user authentication, as well as a feature rich block styled editor.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    headline: "FeedMe",
    subhead: "Restaurant Selector",
    teaser: "Enter your location and receive restaurant locations near you.",
    desc:
      "FeedMe is a React application built to help select a restaurant or bar from a nearby location. I built this app from scratch after finding the Zomato API. I knew I wanted to practice receiving and manipulating data from an external source so this was a fun app to build.",
    stack: `React, Firebase`,
    code: "https://github.com/brandtcollins/FeedMe",
    demo: "https://feedme-813b6.web.app/",
    images: [
      "/images/ProjectScreenShots/FeedMe/FeedMe_HomeScreen_dr.png",
      "/images/ProjectScreenShots/FeedMe/FeedMe_CitySearch_dr.png",
      "/images/ProjectScreenShots/FeedMe/FeedMe_SearchResults_dr.png",
    ],
    goal:
      "With FeedMe, my goal was to build a straight forward web application that utilized the Zomato API. I wanted the user to have the option to search by two methods - entering a location and by using the user's current geolocation. In addition, I wanted to build an app without a CSS framework.",
    lessons: (
      <>
        <p>
          There are several lessons I've learned while building this App. At
          first, I planned on solely using the Zomato API but in practice I
          discovered that it was not as reliable as I'd thought. Specifically,
          how the API handles a city's search wasn't ideal. If a user entered in
          a city it would return any and all results including the user's search
          term, I realized that Zomato was much more accurate if it received the
          geocordinates of the user's search instead of what ever the user may
          have entered. After discovering this, I deciced that I would utilize a
          second API (OpenCage) to locate the user's entered string to return
          longitude & latitude values that would then be passed over to Zomato
          for accurate restaurant information.
        </p>
        <p>
          The second lesson was the importance of data. At face value, I really
          like the Zomato API. It looked like you could simply enter in your
          search criteria and receive information on restaurants! It sounds
          great at first but after building the app and looking at the data that
          I was receiving, most of it was out dated. Local restaurants that are
          permenantly closed are still listed, as well as restaurants
          inaccurately described (Ex: Nightclubs described as restaurants when
          they do not serve food).
        </p>
        <p>
          In the end, FeedMe was a great learning tool in understanding how to
          retrieve data from multiple sources and store it in state to
          manipluate through a component tree.
        </p>
      </>
    ),
  },
];

export default projects;
