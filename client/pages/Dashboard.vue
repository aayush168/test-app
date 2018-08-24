<template>
  <section class="dashboardWrapper">
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import addProducts from '@/components/products/addProducts'
import productLists from '@/components/products/productLists'


export default {
  data() {
    return {
      currentTabComponent: 'addProducts'
    }
  },
  computed: {
    ...mapGetters(['dashboardComponent'])
  },
  components: {
    addProducts,
    productLists
  },
  watch: {
    dashboardComponent: function(val) {
      console.log(val)
      this.currentTabComponent = val
    }
  }
}
</script>

<style lang="stylus">

.dashboardWrapper {
  padding: 30px;
}
</style>

