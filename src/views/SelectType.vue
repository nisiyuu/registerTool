<template>
<div align="center">
          <v-card
            :color="img.color"
            dark
            v-for="(img,i) in imgs"
            :key="i"
            @click="send(img.type,img.color)"
            class="mt-10"
          >
            <v-card-title class="headline">{{img.text}}</v-card-title>
            <img
      :src="img.icon"
      class="size"
    >
            <v-card-subtitle>{{img.subtext}}</v-card-subtitle>
</v-card>
</div>
</template>

<script>
export default {
  components:{
  },
  data(){
    return{
      imgs:[
      {icon:'./img/original.png',type:'01',text:'original',subtext:'ikuyoオリジナルの商品の登録',color:"#add8e6"},
      {icon:'./img/used.png',type:'02',text:'select',subtext:'古着をはじめとしたセレクト商品の登録',color:"#f4a460"},
      {icon:'./img/sticker.png',type:'03',text:'others',subtext:'ステッカーをはじめとした雑貨類の登録',color:"#ffc0cb"}
      ]
    }
  },
  computed:{
  },
  methods: {
    send(type,color){
      console.log(type,color)
      this.$router.push({ name: 'inputpage', params:{type:type,color:color}})
    },
  }
}
</script>

<style scoped>
.size{
  width:30%;
  height:20%;
}
</style>