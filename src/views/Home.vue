<template>
      <v-col>
        <v-btn @click="login" class="login_position" align="center" color="black"><span style="color:white">ログイン</span></v-btn>
      </v-col>
</template>

<script>
export default {
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
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
}
</style>