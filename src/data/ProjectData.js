import React from "react";
const { v4: uuidv4 } = require("uuid");

const projects = [
  {
    id: uuidv4(),
    headline: "Sonder",
    subhead: "A Note Taking App",
    teaser: "Sonder is a note taking app built using React.",
    desc:
      "Sonder is a note taking app I built with React. A note taking app felt like the perfect way to familiarize myself with the design patterns common with React but also an application in which I could make fairly feature rich.",
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
      "By design, this project will forever be in progress. Sonder is an app that I plan to take learnings and ideas that I come across and apply them to a personal project of my own. Currently, my goals with Sonder are to take a deeper look at state management and the role it plays with deep components. I also wanted to use a CSS framework that I was already familiar with (Bootstrap) and understand how it works with React.",
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
          I also learned that while Bootstrap is great, there is a certain level
          of bloat that it brings to your code due to needing to pass parameters
          as objects within props. This can be handy to quickly style and
          customize Bootstrap's components, but it can muck up the readability
          of your app while doing so.
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
      "FeedMe is an application built to help select a restaurant or bar from a nearby location. I built this app from scratch after finding the Zomato API.",
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
          how the API handles a search by a city's name wasn't ideal. If a user
          entered in a city it would return any and all results that included
          the user's search string, I realized that Zomato was much more
          accurate if it received the coordinates of the user's search instead
          of what ever the user may have entered. After discovering this, I
          decided that I would utilize a second API (OpenCage) to locate the
          user's entered string to return longitude & latitude values that would
          then be passed over to Zomato for accurate restaurant information.
        </p>
        <p>
          The second lesson was the importance of data. At face value, I really
          like the Zomato API. It looked like you could simply enter in your
          search criteria and receive information on restaurants! It sounds
          great at first, but after building the app and looking at the data
          that I was receiving, most of it was outdated. Local restaurants that
          are permanently closed are still listed as results, as well as
          restaurants inaccurately described (Ex: Nightclubs described as
          restaurants when they do not serve food).
        </p>
        <p>
          In the end, FeedMe was a great learning tool in understanding how to
          retrieve data from multiple sources and store it in state to
          manipulate through a component tree.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    headline: "T.W.O.R",
    subhead: `A weekly newsletter`,
    teaser: "Enter your location and receive restaurant locations near you.",

    desc: (
      <>
        <i>This Week On Reddit...</i> is a weekly newsletter built using React
        with data sourced from the Reddit API. Back end is Firebase Reatime
        Database & Cloud Functions. Email sent with Nodemailer and GMail.
        weekly.
      </>
    ),
    stack: `React, Reddit API, Firebase`,
    code: "",
    demo: "",
    images: [
      "/images/ProjectScreenShots/FeedMe/FeedMe_HomeScreen_dr.png",
      "/images/ProjectScreenShots/FeedMe/FeedMe_CitySearch_dr.png",
      "/images/ProjectScreenShots/FeedMe/FeedMe_SearchResults_dr.png",
    ],
    goal: `Reddit is a massive resource for all sorts of media, it's a great tool to use to keep up on trends within web developement & design, your city or favorit sport team. Unfortunately, Reddit is a "free" social media platform that curates your feed and sneaks in advertisements. TWOR is a weekly digest that does not curate or send you ads, it simply sends you the top 3 posts of the subreddits you've subscribed using your TWOR account. `,
    lessons: (
      <>
        <p>
          There are several lessons I've learned while building this App. At
          first, I planned on solely using the Zomato API but in practice I
          discovered that it was not as reliable as I'd thought. Specifically,
          how the API handles a search by a city's name wasn't ideal. If a user
          entered in a city it would return any and all results that included
          the user's search string, I realized that Zomato was much more
          accurate if it received the coordinates of the user's search instead
          of what ever the user may have entered. After discovering this, I
          decided that I would utilize a second API (OpenCage) to locate the
          user's entered string to return longitude & latitude values that would
          then be passed over to Zomato for accurate restaurant information.
        </p>
        <p>
          The second lesson was the importance of data. At face value, I really
          like the Zomato API. It looked like you could simply enter in your
          search criteria and receive information on restaurants! It sounds
          great at first, but after building the app and looking at the data
          that I was receiving, most of it was outdated. Local restaurants that
          are permanently closed are still listed as results, as well as
          restaurants inaccurately described (Ex: Nightclubs described as
          restaurants when they do not serve food).
        </p>
        <p>
          In the end, FeedMe was a great learning tool in understanding how to
          retrieve data from multiple sources and store it in state to
          manipulate through a component tree.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    headline: "Kismit",
    subhead: `Small Business Web Design & Development`,
    teaser: "",

    desc: <>Kismit is a busines that I've started in 2020.</>,
    stack: `NextJS, Vercel, CSS Modules + Sass`,
    code: "",
    site: "https://kismit.dev",
    demo: "",
    images: [
      "/images/ProjectScreenShots/Kismit/LandingPage_DesktopMobile.png",
      "/images/ProjectScreenShots/Kismit/Kismit_03.png",
    ],
    goal: `A sort of "subscription based" service, Kismit's business model allows me to offer my design and development skills to small, local businesses who don't have the budget to onboard high-end agencies that could carry a hefty up-front price tag. In additon, Kismit's target market are local businesses that may or may not have a online presence and want to bring their business online either through simply being present in the digital domain, opening an online shop or starting a blog. I market my skillset not only to design and build their website but an on-going partnership of 24/7 customer service, unlimited edits and performance monitoring/upkeep.`,
    lessons: (
      <>
        <p>
          There are several lessons I've learned while building this App. At
          first, I planned on solely using the Zomato API but in practice I
          discovered that it was not as reliable as I'd thought. Specifically,
          how the API handles a search by a city's name wasn't ideal. If a user
          entered in a city it would return any and all results that included
          the user's search string, I realized that Zomato was much more
          accurate if it received the coordinates of the user's search instead
          of what ever the user may have entered. After discovering this, I
          decided that I would utilize a second API (OpenCage) to locate the
          user's entered string to return longitude & latitude values that would
          then be passed over to Zomato for accurate restaurant information.
        </p>
        <p>
          The second lesson was the importance of data. At face value, I really
          like the Zomato API. It looked like you could simply enter in your
          search criteria and receive information on restaurants! It sounds
          great at first, but after building the app and looking at the data
          that I was receiving, most of it was outdated. Local restaurants that
          are permanently closed are still listed as results, as well as
          restaurants inaccurately described (Ex: Nightclubs described as
          restaurants when they do not serve food).
        </p>
        <p>
          In the end, FeedMe was a great learning tool in understanding how to
          retrieve data from multiple sources and store it in state to
          manipulate through a component tree.
        </p>
      </>
    ),
  },
];

export default projects;
