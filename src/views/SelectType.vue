<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="7">
        <v-select
          v-model="value"
          :items="items"
          label="登録登録商品のタイプを選んでください"
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="6">
      <v-btn @click="send(value)">次へ</v-btn>
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
        {text:'01.ikuyoオリジナル', value:'01'},
        {text:'02.ユーズド', value:'02'},
        {text:'03.その他', value:'03'}
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