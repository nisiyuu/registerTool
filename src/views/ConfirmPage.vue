<template>
  <div>
    {{confirmItems}}
  <v-btn @click="dbSet()">送信</v-btn>
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
    confirmItems(){
       return this.$store.getters.newitem
    }
  },
  methods: {
      dbSet(){
          const senddata = this.$store.state.newitems;
          senddata.forEach(element => {
            this.$store.getters.dbconnection.collection("items").doc(element.groupID).set(
            element,
          )
          .then(docRef => {
          console.log("Document written with ID: ", docRef);
          this.$router.push({ name: 'success' })//成功へページ遷移
          })
          .catch(error => {
          console.error("Error adding document: ", error);
          this.$router.push({ name: 'failure' })//失敗へページ遷移
          });
          });
      }
  }
}
</script>

//.add(...) と .doc().set(...) は完全に同等なので、どちらでも便利な方を使うことができます。