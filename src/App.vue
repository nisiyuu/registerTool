<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <v-row>
        <v-col cols="3"><Sidemenu v-show="this.$router.currentRoute.name !== 'home'" /></v-col>
        <v-col cols="9" class="pa-0 ma-0">
          <v-col cols=11 lg=11 md=11 sm=11 class="pa-0 mr-0 ml-0 mt-4 mb-0">
  <v-stepper v-show="this.$router.currentRoute.name !== 'history' && this.$router.currentRoute.name !== 'home'"
  v-model="e1"
  >
    <v-stepper-header>
      <v-stepper-step step="1" color="black">商品タイプ選択</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2" color="black">商品情報入力</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" color="black">商品確認と登録</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
          </v-col>

<v-col cols=11 lg=11 md=11 sm=11>     
        <router-view/>
        </v-col>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import Sidemenu from './components/Sidemenu'
import Toolbar from './components/Toolbar'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components:{
    Sidemenu,
    Toolbar
  },
  data(){
    return{
      steps: 3,
      e1: 1,
    }
  },
  computed:{
  },
  methods: {
     stepchange(){
      if(this.$router.currentRoute.name === 'selecttype'){
        this.e1 = 1;
      }
      else if(this.$router.currentRoute.name === 'inputpage'){
        this.e1 = 2;
      }
      else if(this.$router.currentRoute.name === 'confirmpage'){
        this.e1 = 3;
      }
    },
    ...mapActions(['setLoginUser', 'logout', 'deleteLoginUser'])
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        if (this.$router.currentRoute.name === 'home') this.$router.push({ name: 'selecttype' })
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' })
      }
    })
  },
  updated(){
    this.stepchange();
  }
};
</script>


<style scoped>
.pagenation{
  position:absolute;
  bottom:10%;
  right:0%;
}
</style>