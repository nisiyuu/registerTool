<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        ikuyo register tool
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://ikuyojp.com"
        target="_blank"
        text
      >
        <span class="mr-2">go to shop</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  data(){
    return{
      amount:'200'
    }
  },
  methods:{
  }
}
</script>
