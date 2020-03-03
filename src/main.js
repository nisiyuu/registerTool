import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCMnTH8vTFh9q3y9Cx_Bb6HkwqjguMztx4",
  authDomain: "ikuyoproject-9e009.firebaseapp.com",
  databaseURL: "https://ikuyoproject-9e009.firebaseio.com",
  projectId: "ikuyoproject-9e009",
  storageBucket: "ikuyoproject-9e009.appspot.com",
  messagingSenderId: "966232363555",
  appId: "1:966232363555:web:5bb73162a8b6c297175796",
  measurementId: "G-JJ76XF41RJ"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App),
})
