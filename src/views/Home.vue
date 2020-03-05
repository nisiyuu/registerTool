<template>
<div>
  <v-row justify="center">
  <v-col cols=12 lg=12 md=12 sm=12
  >
  <img :src="img.icon" v-for="(img,i) in imgs" :key="i" class="login_position_image">
  </v-col>
  </v-row>
  <div class="login_position_text">商品管理ツールのデモです</div>
    <v-btn @click="login" class="login_position" align="center" color="black"><span style="color:white">管理画面へ</span></v-btn>
</div>
</template>

<script>
export default {
  data(){
    return{
      imgs:[
      {icon:'./img/original.png'},
      ]
    }
  },
  methods: {
    login(){
      this.$store.dispatch('login');
      console.log("aaa");
    }
  }
}
</script>

<style scoped>
.login_position{
  position: absolute;
  top: 55%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
}

.login_position_text{
  font-size: calc(0.75rem + ((1.9vw - 4.8px) * 0.9677));
  font-weight: 900;
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
}

.login_position_image{

  width: 50%;
  height:auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
}


@media screen and (max-width:700px) {
.login_position_image{

  width: 90%;
  height:auto;
  position: absolute;
  top: 45%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
}
}

</style>