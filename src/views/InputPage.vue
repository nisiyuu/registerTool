<template>
  <div class="container">
    <h1>登録タイプ{{type}}</h1>
      <inputbox
      :value="$store.state.form.groupID"
      @input="val => $store.state.form.groupID = val"
      label="groupID"
      />
      <inputbox
      :value="$store.state.form.name"
      @input="$store.state.form.name = $event"
      label="name"
      />

      <textbox
      :value="$store.state.form.description"
      @input="$store.state.form.description = $event"
      label="商品説明"
      />

      <div>
        <label for="">商品一覧に表示する画像</label>
        <input type="file" @change="onFileChangemain">
        <img v-show="uploadedImage" :src="uploadedImage"/>

        <label for="">samples1枚目</label>
        <input type="file" @change="onFileChange1">
        
        <label for="">samples2枚目</label>
        <input type="file" @change="onFileChange2">
      </div>

      <button @click="send($store.state.form)">確認画面へ</button>
  </div>
</template>


<style scoped>
.container {
  display: grid; /* グリッドレイアウト */
  grid-template-rows: 100px 100px;
  grid-template-columns: 0.5fr 0.5fr;
}
</style>


<script>
import inputbox from '../components/Input'
import textbox from '../components/Textarea'

export default {
  props:{
    type:{type:String, default:'01'},
  },
  components:{
    inputbox,
    textbox
  },
  data(){
    return{
      uploadedImage: '',
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
    },
    onFileChange2(e) {
      this.$store.state.form.samples[1].sample = 'img/'+ e.target.files[0].name;
    },
  }
}
</script>

//.add(...) と .doc().set(...) は完全に同等なので、どちらでも便利な方を使うことができます。