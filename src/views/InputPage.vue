<template>
  <div>
    <h1>登録タイプ{{type}}</h1>
    <form>
      <div>
        <label>groupID</label>
        <input v-model="$store.state.form.groupID">
      </div>
      <div>
        <label for="">name</label>
        <input v-model="$store.state.form.name">
      </div>

      <div>
        <label for="">samplemain</label>
        <input type="file" @change="onFileChangemain">
      </div>

      <div>
        <label for="">samples1枚目</label>
        <input type="file" @change="onFileChange1">
      </div>

      <div>
        <label for="">samples2枚目</label>
        <input type="file" @change="onFileChange2">
      </div>

      <div>
        <label>description</label>
        <textarea v-model="$store.state.form.description"></textarea>
      </div>
      <button @click="send($store.state.form)">確認画面へ</button>
    </form>
  </div>
</template>


<script>
export default {
  props:{
    type:{type:String, default:'01'},
  },
  components:{
    
  },
  data(){
    return{
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
    },
    onFileChange1(e) {
      this.$store.state.form.samples[0].sample = 'img/'+ e.target.files[0].name;
    },
    onFileChange2(e) {
      this.$store.state.form.samples[1].sample = 'img/'+ e.target.files[0].name;
    }
  }
}
</script>

//.add(...) と .doc().set(...) は完全に同等なので、どちらでも便利な方を使うことができます。