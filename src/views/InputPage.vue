<template>
<div>
  <v-form v-model="valid">
  <v-card class="ma-0" :color="color">
    <v-row justify="center">
      <v-col cols=11 lg=8 md=8 sm=11 class="mt-6">
      <v-text-field
        v-model="groupID"
        label="商品ID"
        required
        prepend-icon="edit"
        :rules="groupIDRules"
      >
      </v-text-field>
      </v-col>

      <v-col cols=11 lg=8 md=8 sm=11>
      <v-text-field
        v-model="name"
        label="商品名"
        required
        prepend-icon="edit"
        :rules="nameRules"
      >
      </v-text-field>
      </v-col>

      <v-col cols=11 lg=8 md=8 sm=11>
      <v-text-field
      v-model="description"
      label="商品概要"
      required
      :rules="descriptionRules"
      prepend-icon="mdi-message-text"
      >
      </v-text-field>
      </v-col>

      <v-col cols=11 lg=8 md=8 sm=11>
      <v-file-input :rules="fileRules" required show-size label="File input" @change="onFileChangemain"></v-file-input>
      </v-col>
      

      <v-col cols=11 lg=11 md=11 sm=11 align="end">
      <v-btn :to="{name: 'selecttype'}" class="mr-4">戻る</v-btn>
      <v-btn :disabled="!valid" @click="send()">確認画面へ</v-btn>
      </v-col>
    </v-row>
        </v-card>
  </v-form>
  </div>
</template>

<script>
export default {
  components:{
  },
  props:{
    type:{type:String,default:'01'},
    color:{type:String,default:'#add8e6'}
  },
  data(){
    return{
      valid:true,
      groupID:'',
      name:'',
      description:'',
      samplemain:'',
      groupIDRules: [
          v => !!v || '商品IDは必須です',
        ],
        nameRules: [
          v => !!v || '商品名は必須です',
        ],
        descriptionRules: [
          v => !!v || '商品概要は必須です',
        ],
        fileRules:[
          v => !!v || '画像ファイルは必須です',
          value => !value || value.size < 900000 || '画像サイズは900000bytesまでです',
        ],
    }
  },
  methods: {
    send (){
      const selectedItem = {
        type:this.type,
        groupID:this.groupID,
        name:this.name,
        description:this.description,
        samplemain:this.samplemain,
        time:new Date(),
        color:this.color
      }
      this.$store.commit('updateForm',selectedItem);
      console.log(this.color)
      this.$router.push({ name: 'confirmpage',params:{color:this.color}})
    },
    onFileChangemain(file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(file)
        fr.addEventListener('load', () => {
          this.samplemain = fr.result
        })
      } else {
        this.samplemain = ''
      }
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

