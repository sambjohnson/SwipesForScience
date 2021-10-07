export default {
  needsTutorial: true,
  manifestUrl:
    "https://swipes-for-testing.s3-ap-southeast-1.amazonaws.com/weddingphotos.json",
  manifestType: "json",
  widgetType: "ImageSwipe",
  widgetProperties: {
    baseUrlTemplate:
      "https://swipes-for-testing.s3-ap-southeast-1.amazonaws.com/{0}.jpg",
    delimiter: "__",
    leftSwipeLabel: "Fail",
    rightSwipeLabel: "Pass",
  },
  iconAttribute: {
    name: "openmoji",
    url: "http://openmoji.org",
  },
  levels: {
    0: {
      level: 0,
      min: 0,
      max: 100,
      character: null,
      img: null,
      img_grey: null,
    },
    1: {
      level: 1,
      min: 101,
      max: 350,
      character: "fish",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true",
    },
    2: {
      level: 2,
      min: 351,
      max: 750,
      character: "frog",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true",
    },
    3: {
      level: 3,
      min: 751,
      max: 1000,
      character: "duck",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true",
    },
    4: {
      level: 4,
      min: 1001,
      max: 1500,
      character: "koala",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true",
    },
    5: {
      level: 5,
      min: 1501,
      max: 2000,
      character: "cat",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true",
    },
    6: {
      level: 6,
      min: 2001,
      max: 2500,
      character: "lion",
      img: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true",
      img_grey:
        "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true",
    },
  },
  betaMode: false,
  firebaseKeys: {
    apiKey: "AIzaSyCsr7ZaI-M9A5PMjLOnqFhxJhClU9Scg1k",
    authDomain: "swipes-for-testing.firebaseapp.com",
    databaseURL: "https://swipes-for-testing.firebaseio.com",
    projectId: "swipes-for-testing",
    storageBucket: "swipes-for-testing.appspot.com",
    messagingSenderId: "952931606450",
  },
  // firebaseKeys: {
  //   authDomain: "",
  //   projectId: "swipes-for-testing",
  //   databaseUrl: "http://localhost:9000/?ns=swipes-for-testing"
  // },
  app: {
    navbarVariant: "info",
  },
  home: {
    title: "Swipes for Science",
    tagline: "A citizen science game template",
    backgroundUrl:
      "https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/SwipesForScience.svg?sanitize=true",
  },
  play: {
    blankImage:
      "https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_blank_canvas.svg?sanitize=true",
  },
  chats: {
    blankImage:
      "https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_no_data.svg?sanitize=true",
  },
  profile: {
    blankImage:
      "https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_chatting.svg?sanitize=true",
  },
  tutorial: {
    customBackgroundAnimation: "Bubbles",
    steps: {
      intro: [
        {
          text: "here is an example tutorial step",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Humpback_whales_in_singing_position.jpg",
        },
        {
          text: "here is another one.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hydrophone_being_lowered_into_the_Atlantic.jpg",
        },
      ],
      examples: [
        {
          text: "swipe right when the image is good quality",
          pointer: "sub-NDARYX806FL1__cor_184",
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: "swipe left when its bad",
          pointer: "sub-NDAREG590BNY__sag_201",
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: "if you're not sure, click 'help' \n to discuss with scientists ",
          pointer: "sub-NDAREW671HZW__ax_86",
          answer: 0,
          tutorialStep: 2,
        },
        {
          text: "Are you ready to play?",
          tutorialCompleted: true,
        },
      ],
    },
  },
};
