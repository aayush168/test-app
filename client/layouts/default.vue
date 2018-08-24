<template>
  <v-app>
    <primary-toolbar/>
    <v-container grid-list fluid class="mainContainer">
      <v-layout row wrap class="mainLayout">
        <v-flex xs3>
          <primary-drawer v-if="isLoggedIn"/>
        </v-flex>
        <v-flex xs9><nuxt/></v-flex>        
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import PrimaryToolbar from '@/components/toolbar/PrimaryToolbar';
import PrimaryDrawer from '@/components/drawer/PrimaryDrawer';

export default {
  data () {
    return {
    }
  },
  components: {
    PrimaryToolbar,
    PrimaryDrawer
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
  }
}
</script>

<style lang="stylus">
a {
  color: #111;
  text-decoration: none;
}
.mainContainer {
  padding: 0px;
  .mainLayout {
    height: 100%;
  }
}
</style>

