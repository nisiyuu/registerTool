<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12">
        <v-select
          v-model="value"
          :items="items"
          label="登録商品のタイプを選んでください"
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="6">
      <v-btn @click="send(value)">商品登録画面へ</v-btn>
      </v-col>

      </v-row>
  </v-container>
</template>

<script>
export default {
  components:{
    
  },
  data(){
    return{
      value:'',
      items:[
        {text:'ikuyoオリジナル', value:'01'},
        {text:'ユーズド', value:'02'},
        {text:'その他', value:'03'}
      ]
    }
  },
  computed:{
  },
  methods: {
    send(val){
      this.$store.commit('updateType', val)
      this.$router.push({ name: 'inputpage', params:{type:val}})
    },
  }
}
</script>