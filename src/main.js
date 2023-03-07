import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const vuetify = createVuetify({
  components,
  directives,
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYQTG_ACzhk2JO-CGWvJynQPOwm3XV5dA",
  authDomain: "cs313-13-f2110.firebaseapp.com",
  projectId: "cs313-13-f2110",
  storageBucket: "cs313-13-f2110.appspot.com",
  messagingSenderId: "66167513816",
  appId: "1:66167513816:web:144b1bf56ae307b18dedad",
};

// Initialize Firebase
const initfirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initfirebase);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
