// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import defineValidationRules from "./validation-rules";
import App from "./App";
import router from "./router";
import appConfig from "./config";
let app;

// we have to to initialize the app w/ existing config keys here.
// this is important for when the user refreshes.

/*
"Import your Firebase configuration and set up the Firebase method onAuthStateChanged.
This will make sure Firebase initializes before loading the app when a user refreshes a page."
- https://savvyapps.com/blog/definitive-guide-building-web-app-vuejs-firebase
*/

let config = appConfig;

initializeApp(config.firebaseKeys);
const auth = getAuth();

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp({
      template: "<App/>",
      components: { App },
    });
    app.use(router).mount("#app");
  }
});

defineValidationRules();
