<template>
  <div>
    {{$store.state.form}}
  <p><button @click="dbSet()">送信</button></p>
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
  created(){
    
  },
  computed:{
  },
  methods: {
      dbSet(){
          const senddata = this.$store.state.form;
          this.$store.getters.dbconnection.collection("items").doc(senddata.groupID).set(
            senddata,
          )
          .then(docRef => {
          console.log("Document written with ID: ", docRef);
          this.$router.push({ name: 'success' })//成功へページ遷移
          })
          .catch(error => {
          console.error("Error adding document: ", error);
          this.$router.push({ name: 'failure' })//失敗へページ遷移
          });
      }
  }
}
</script>

//.add(...) と .doc().set(...) は完全に同等なので、どちらでも便利な方を使うことができます。