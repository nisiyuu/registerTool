<template>
<div class="z">
  <h1>methods</h1>
  <span>{{test()}}</span>
  <span>{{test()}}</span>
  <span>{{test()}}</span>
  <h1>computed</h1>
  <span>{{test2}}</span>
  <span>{{test2}}</span>
  <span>{{test2}}</span>
  <!-- <button @click="countUp">countup</button> -->

<div>分割代入練習</div>
<div>前</div>
{{myFunc(items)}}
{{myFunc(items.name)}}
<div>分割代入あと</div>
{{myFuncNew(items)}}



</div>
</template>

<style scoped>
.basesize{
  font-size: calc(0.75rem + ((1vw - 4.8px) * 0.9677));
}

</style>



<script>
  export default {
    data(){
      return{
        items:{
          name:'りんご',
          price:'100',
          type:"fruit"
        },
        val:1,
      }
    },
    methods: {
      myFuncNew({name}){
        return {name};
      },
      myFunc(name){
        return name;
      },
      test(){
        return Math.random();
      },
      countUp() {
        this.val = this.val + 1;
      },
    },
    updated() {
      console.log("udpated");
    },
     watch: {
    // この関数は question が変わるごとに実行されます。
      val: function (newval, oldval) {
        console.log('change ===>', newval, oldval);
      },
      test2: function (newval, oldval) {
        console.log('change ===>', newval, oldval);
      },
    },
    computed:{
      test2(){
        return Math.random()*this.val;
      },
    }
  }
  </script>
