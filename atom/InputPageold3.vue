<template>
  <div>
    <v-col cols="6">
      <v-select
        v-model="value"
        :items="items"
        label="登録登録商品のタイプを選んでください"
        outlined
      ></v-select>
    </v-col>
      <v-col cols="2">
      <v-text-field
        v-model="$store.getters.newitem.groupID"
        label="商品ID"
        required
      >
      </v-text-field>
      </v-col>

      <v-col cols="6">
      <v-text-field
        v-model="$store.getters.newitem.name"
        label="商品名"
        required
      >
      </v-text-field>
      </v-col>

      <v-col cols="6">
      <v-text-field
      v-model="$store.getters.newitem.description"
      label="商品概要"
      required
      >
      </v-text-field>
      </v-col>

      <!-- <v-col cols="6">
      <div class="imageRegister">
        <label for="">商品一覧に表示する画像</label>
        <input type="file" @change="onFileChangemain" class="imageInput">
      </div>
      <div class="imageRegister">
        <label for="">正面画像</label><br>
        <input type="file" @change="onFileChange1" class="imageInput"><br>
      </div>
      <div class="imageRegister">
        <label for="">背面画像</label><br>
        <input type="file" @change="onFileChange2" class="imageInput">
      </div> -->

      <v-col cols="6">
      <v-btn @click="send($store.getters.newitem)">確認画面へ</v-btn>
      </v-col>

      
      <v-col cols="6">
      <div><img class="image" v-show="uploadedImage" :src="uploadedImage"/></div>
      <div><img class="image" v-show="uploadedImage1" :src="uploadedImage1"/></div>
      <div><img class="image" v-show="uploadedImage2" :src="uploadedImage2"/></div>
      </v-col>
  </div>
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
  width: 200px;
  height: 200px;
}

.imageInput{
  margin-top:1%;
}
</style>


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
      ],
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