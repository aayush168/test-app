<template>
  <v-navigation-drawer permanent>
    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="redirect(item.path)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      items: [
        { title: 'Products', icon: 'dashboard', path: 'addProducts' },
        { title: 'Product Lists', icon: 'dashboard', path: 'productLists' },        
      ],
      right: null
    }
  },
  methods: {
    ...mapActions(['setDashBoardComponent']),
    redirect(path) {
      this.setDashBoardComponent(path)
    }
  }
}
</script>
