<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <login/>
    </v-flex>
  </v-layout>
</template>

<script>

import Login from '@/components/auth/Login'

export default {
  data() {
    return {

    }
  },
  components: {
    Login
  }
}

</script>

<style>

</style>
