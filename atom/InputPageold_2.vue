<template>
    <v-row>
      <v-col cols="12">登録タイプ{{type}}</v-col>
      <v-col cols="4">
      <v-text-field
        v-model="$store.state.form.groupID"
        label="商品ID"
        required
      >
      </v-text-field>
      </v-col>

      <v-col cols="4">
      <v-text-field
        v-model="$store.state.form.name"
        label="商品名"
        required
      >
      </v-text-field>
      </v-col>

      <v-col cols="8">
      <v-text-field
      v-model="$store.state.form.description"
      label="商品概要"
      required
      >
      </v-text-field>
      </v-col>
    
      <v-col cols="12">
      <div class="imageRegister">
        <label for="">商品一覧に表示する画像</label>
        <input type="file" @change="onFileChangemain">
        <img class="image" v-show="uploadedImage" :src="uploadedImage"/>
      </div>
      <div>
        <label for="">samples1枚目</label>
        <input type="file" @change="onFileChange1">
        <img class="image" v-show="uploadedImage1" :src="uploadedImage"/>
      </div>
      <div>
        <label for="">samples2枚目</label>
        <input type="file" @change="onFileChange2">
        <img class="image" v-show="uploadedImage2" :src="uploadedImage"/>
      </div>
      <button @click="send($store.state.form)" v-if="uploadedImage">確認画面へ</button>
      </v-col>
    </v-row>
</template>


<style scoped>
.container {
  display: grid; /* グリッドレイアウト */
  grid-template-rows: 100px 100px;
  grid-template-columns: 0.5fr 0.5fr;
}

.imageRegister{
  margin-bottom:5%;
  margin-top:2%;
}

.image{
  width:50%;
  height:50%;
}
</style>


<script>
export default {
  props:{
    type:{type:String, default:'01'},
  },
  components:{
  },
  data(){
    return{
      uploadedImage: '',
      uploadedImage1:'',
      uploadedImage2:'',
    }
  },
  computed:{
  },
  methods: {
    send(val){
      this.$store.commit('updateForm', val)
      console.log(val);
      this.$router.push({ name: 'confirmpage'})
    },
    onFileChangemain(e) {
      this.$store.state.form.samplemain = 'img/'+ e.target.files[0].name;
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange1(e) {
      this.$store.state.form.samples[0].sample = 'img/'+ e.target.files[0].name;
      let files = e.target.files || e.dataTransfer.files;
      this.createImage1(files[0]);
    },
    createImage1(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage1 = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange2(e) {
      this.$store.state.form.samples[1].sample = 'img/'+ e.target.files[0].name;
      let files = e.target.files || e.dataTransfer.files;
      this.createImage2(files[0]);
    },
    createImage2(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage2 = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  }
}
</script>

//.add(...) と .doc().set(...) は完全に同等なので、どちらでも便利な方を使うことができます。