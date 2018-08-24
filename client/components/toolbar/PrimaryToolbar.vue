<template>
  <v-toolbar>
    <v-toolbar-title><router-link to="/">Home</router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">    
      <v-btn flat v-if="isLoggedIn" @click="logout">Logout</v-btn>
      <v-btn flat v-if="!isLoggedIn" @click="logout"><router-link to="/SignUp">SignUp</router-link></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  },
  mounted() {
    console.log(this.$route.name)
  }
}
</script>
