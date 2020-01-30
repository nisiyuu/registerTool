<template>
  <div>
    <h1>登録商品のタイプを選んでください</h1>
    <select v-model="$store.state.form.type">
      <option disabled value="">Please select one</option>
      <option>01</option>
      <option>02</option>
      <option>03</option>
    </select>
    <p><button @click="send($store.state.form)">商品登録画面へ</button></p>
  </div>
</template>

<script>
export default {
  components:{
    
  },
  data(){
    return{
    }
  },
  computed:{
  },
  methods: {
    send(){
      // this.$store.commit('updateForm', val)
      // console.log(val);
      const typeData = this.$store.state.form.type;
      this.$router.push({ name: 'inputpage', params:{type:typeData}})
    },
  }
}
</script>

//.add(...) と .doc().set(...) は完全に同等なので、どちらでも便利な方を使うことができます。