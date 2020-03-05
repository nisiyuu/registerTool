<template>
  <div class="font">
    <v-timeline
    dense
    class="ma-0"
    >
      <v-timeline-item
        v-for="(item,i) in itemlist"
        :key="i"
        :small="true"
        color="black"
      >
        <span slot="opposite">{{item.time.toDate()}}</span>
        <v-card class="elevation-2" :color="item.color">
          <v-row align="center">
          <v-col cols=12 lg=6 md=6 sm=12 align="center" class="mt-3"><img :src="item.samplemain" class="img_size"></v-col>
          <v-col cols=12 lg=5 md=5 sm=12 class="ml-0">
          <v-card class="mt-3"><div>商品タイプ:{{item.type}}</div></v-card>
          <v-card class="mt-3"><div>商品ID:{{item.groupID}}</div></v-card>
          <v-card class="mt-3"><div>商品名:{{item.name}}</div></v-card>
          <v-card class="mt-3"><div>商品概要:{{item.description}}</div></v-card>
          <v-card class="mt-3"><div>登録日時:{{item.time.toDate()}}</div></v-card>
          <v-col align="end"><v-btn class="mt-3" color="black" @click="deleteConfirm(item.groupID)" style="color:white" x-small>削除</v-btn></v-col>
          </v-col>
          </v-row>
        </v-card>
      </v-timeline-item>
    </v-timeline>
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
</style>