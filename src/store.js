import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dbconnection: null,
    form:{
      groupID: '',
      type: '',
      name: '',
      price: '',
      samplemain:'',
      samples:[
        {"sample":''},
        {"sample":''},        
      ],
      description:'',
      items: [
        { id: '', size: '', color: '', listItem: '', image: '' },
        // { "id": "17", "size": "S", "color": "white", "listItem": "white S", "stock": true, "image": "img/7/sample_front.png" },
      ],
      stock:true,
    },
  },
  getters: {
    dbconnection(state) {
      if (state.dbconnection !== null) {
        return state.dbconnection;
      }
      const firebaseConfig = {
        apiKey: "AIzaSyCMnTH8vTFh9q3y9Cx_Bb6HkwqjguMztx4",
        authDomain: "ikuyoproject-9e009.firebaseapp.com",
        databaseURL: "https://ikuyoproject-9e009.firebaseio.com",
        projectId: "ikuyoproject-9e009",
        storageBucket: "ikuyoproject-9e009.appspot.com",
        messagingSenderId: "966232363555",
        appId: "1:966232363555:web:7e412b4d1941af98"
      };
      firebase.initializeApp(firebaseConfig);
      state.dbconnection = firebase.firestore();
      return state.dbconnection;
    },
  },
  mutations: {
    updateForm(state,formData) {
      state.form = formData
    },
  },
})