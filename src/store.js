import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    newitems:[],
  },
  getters: {
    newitem(state){
      return state.newitems;
    },
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
    updateForm(state,formData) {
      state.newitems.push(formData)
    },
    updateType(state, type) {
      state.newitems.push(type)
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout () {
      firebase.auth().signOut()
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
    dataSet(context, senddata) {
        console.log('w足した青',senddata)
        firebase.firestore().collection("test").add(senddata)
          .then(docRef => {
            console.log("Document written with ID: ", docRef);
            self.$router.push({ name: 'inputpage' })//成功へページ遷移
          })
          .catch(error => {
            console.error("Error adding document: ", error);
            self.$router.push({ name: 'failure' })//失敗へページ遷移
          });
    },
    async getItems() {
      const items = await firebase.firestore().collection("test").get()
      .then(querySnapshot => {
         return querySnapshot.docs.map(elem => elem.data())
      })
      return items
    },
  }
})



// { "id": "17", "size": "S", "color": "white", "listItem": "white S", "stock": true, "image": "img/7/sample_front.png" },