<template>
<div>
  <div v-show="!confirmItems[0].name" align="center" class="ma-0 pa-0">
      <span>商品タイプ選択からやり直して下さい</span>
      <div class="mt-12"><v-btn :to="{name: 'selecttype'}">戻る</v-btn></div>
  </div>
    <v-card class="ma-0 pa-0" :color="color" v-show="confirmItems[0].name">
    <v-row justify="center">
      <v-col cols=11 lg=5 md=5 sm=11 class="mt-2" v-show="confirmItems[0].samplemain">
        <img :src="confirmItems[0].samplemain" class="img_size ml-6">
      </v-col>
      <v-col cols=11 lg=5 md=5 sm=11 class="mt-2" v-show="!confirmItems[0].samplemain">
        画像は登録されていません
      </v-col>

      <v-col cols=11 lg=6 md=6 sm=11 class="mt-2">
        <v-card outlined><v-col cols=11 lg=11 md=11 sm=11>商品タイプ</v-col></v-card>
        <v-col>{{confirmItems[0].type}}</v-col>
        <v-card outlined><v-col cols=11 lg=11 md=11 sm=11>商品ID</v-col></v-card>
        <v-col>{{confirmItems[0].groupID}}</v-col>
        <v-card outlined><v-col cols=12 lg=12 md=12 sm=12>商品名</v-col></v-card>
        <v-col>{{confirmItems[0].name}}</v-col>
        <v-card outlined><v-col cols=12 lg=12 md=12 sm=12>商品概要</v-col></v-card>
        <v-col>{{confirmItems[0].description}}</v-col>
      <v-col align="end">
        <v-btn class="mr-4" @click="reset()">戻る</v-btn>
        <v-btn @click="dbSet()">送信</v-btn>
        </v-col>
      </v-col>
    </v-row>
    </v-card>
</div>
</template>


<script>
export default {
  components:{
    
  },
  props:{
    color:{type:String,default:'#add8e6'}
  },
  data(){
    return{
      
    }
  },
  computed:{
    confirmItems(){
       return this.$store.getters.newitem
    },
  },
  methods: {
    reset(){
      this.$store.dispatch('typereset');
      this.$router.push({ name: 'selecttype'})
    },
    createImage(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
      dbSet(){
          const senddata = this.$store.state.newitems[0];
          console.log(senddata);
          this.$store.dispatch('dataSet',senddata);
          this.$store.dispatch('typereset');
      }
  }
}
</script>

<style scoped>
.img_size{
  width:20vw;
  height:80%;
}

</style>