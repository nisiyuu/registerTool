<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <v-row>
        <v-col cols="4"><Sidemenu/></v-col>
        <v-col cols="8"><router-view/></v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Sidemenu from './components/Sidemenu'
import Toolbar from './components/Toolbar'


export default {
  name: 'App',
  components:{
    Sidemenu,
    Toolbar
  },
  data(){
    return{

    }
  }
};
</script>
