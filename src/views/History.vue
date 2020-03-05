<template>
  <div class="font">
    <v-card class="mb-10 pa-0" :color="item.color"
    v-for="(item,i) in itemlist"
    :key="i"
    >
    <v-row justify="center" align="center">
      <v-col cols=10 lg=5 md=5 sm=10 class="mt-2" align="center">
      <v-col><img :src="item.samplemain" class="img_size"></v-col>
      <v-col cols=10 lg=5 md=5 sm=10><v-card outlined><v-col>登録日時</v-col></v-card></v-col>
        <v-col>{{item.time.toDate()}}</v-col>
      </v-col>
      
      <v-col cols=10 lg=5 md=5 sm=10 class="mt-2">
        <v-card outlined><v-col cols=11 lg=11 md=11 sm=11>商品タイプ</v-col></v-card>
        <v-col>{{item.type}}</v-col>
        <v-card outlined><v-col cols=11 lg=11 md=11 sm=11>商品ID</v-col></v-card>
        <v-col>{{item.groupID}}</v-col>
        <v-card outlined><v-col cols=12 lg=12 md=12 sm=12>商品名</v-col></v-card>
        <v-col>{{item.name}}</v-col>
        <v-card outlined><v-col cols=12 lg=12 md=12 sm=12>商品概要</v-col></v-card>
        <v-col>{{item.description}}</v-col>
        <v-col align="end"><v-btn class="mt-3" @click="deleteConfirm(item.groupID)">削除</v-btn></v-col>
      </v-col>
    </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      itemlist:null,
    }
  },
  async mounted(){
    this.itemlist = await this.$store.dispatch('getItems');
    console.log(this.itemlist[0].time);
  },
  methods:{
    deleteConfirm(ida){
        if (confirm('削除してよろしいですか？')) {
         this.deleteData(ida)
        }
      },
      deleteData(id){
        this.$store.dispatch('deleteData',id);
      }
  },
}
</script>

<style scoped>
.img_size{
  width:60%;
  height:auto;
}

.font{
font-size: calc(0.75rem + ((0.8vw - 4.8px) * 0.9677));
}


.font_item{
  font-size: calc(0.75rem + ((0.8vw - 4.8px) * 0.9677));
  color:white;
}
</style>