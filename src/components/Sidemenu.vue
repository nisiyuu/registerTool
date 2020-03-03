<template>
  <v-navigation-drawer permanent>
    <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line>
            <v-list-item-avatar>
              <img v-if="photoURL" :src="photoURL">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title> {{ userName }}  </v-list-item-title>
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
        
        <v-list-item
          v-for="item2 in logouts"
          :key="item2.title"
          @click="logout()"
        >
          <v-list-item-icon>
            <v-icon>{{ item2.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item2.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'


export default {
  data(){
    return{
      items: [
          { title: '登録', icon: 'mdi-pencil',link: { name: 'selecttype'}},
          { title: '履歴', icon: 'mdi-share-variant',link: { name: 'history'}},
        ],
        right: null,
      logouts:[
          { title: 'ログアウト', icon: 'mdi-door'},        
      ]
    }
  },
  computed: {
    ...mapGetters(['userName', 'photoURL'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
</style>
