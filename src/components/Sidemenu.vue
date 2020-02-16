<template>
  <v-card
    height="100vh"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            登録
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      items: [
          { title: '新規登録', icon: 'mdi-view-dashboard',link: { name: 'selecttype'}},
          { title: '履歴', icon: 'mdi-image',link: { name: 'history'}},
        ],
        right: null,
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
