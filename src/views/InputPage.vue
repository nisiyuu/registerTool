<template>
  <div>
    <v-col cols="6">
      <v-select
        v-model="type"
        :items="items"
        label="登録商品のタイプを選んでください"
        outlined
      ></v-select>
    </v-col>
      <v-col cols="2">
      <v-text-field
        v-model="groupID"
        label="商品ID"
        required
        prepend-icon="edit"
      >
      </v-text-field>
      </v-col>

      <v-col cols="6">
      <v-text-field
        v-model="name"
        label="商品名"
        required
        prepend-icon="edit"
      >
      </v-text-field>
      </v-col>

      <v-col cols="6">
      <v-text-field
      v-model="description"
      label="商品概要"
      required
      prepend-icon="mdi-message-text"
      >
      </v-text-field>
      </v-col>

      <v-col cols="6">
      <v-file-input label="File input" @change="onFileChangemain"></v-file-input>
      </v-col>

      <v-col cols="6">
      <v-btn @click="send()">確認画面へ</v-btn>
      </v-col>

  </div>
</template>

<script>
export default {
  components:{
  },
  data(){
    return{
      type:'',
      groupID:'',
      name:'',
      description:'',
      samplemain:'',
      items:[
        {text:'01.ikuyoオリジナル', value:'01'},
        {text:'02.ユーズド', value:'02'},
        {text:'03.その他', value:'03'}
      ],
    }
  },
  computed:{
    
  },
  methods: {
    send (){
      const selectedItem = {
        type: this.type,
        groupID:this.groupID,
        name:this.name,
        description:this.description,
        samplemain:this.samplemain,
      }
      this.$store.commit('updateForm',selectedItem);
      this.$router.push({ name: 'confirmpage'})
    },
    onFileChangemain(e) {
      this.samplemain = 'img/'+ e.name;
    },
  }
}
</script>

<style scoped>
.imageRegister{
  margin-bottom:5%;
  margin-top:2%;
}

.image{
  width: 200px;
  height: 200px;
}

.imageInput{
  margin-top:1%;
}
</style>

