<template>
   <v-layout row wrap>
     <h2 class="headline">Product Lists</h2><br><br>
     <v-flex xs12 v-for="product in products" :key="product._id">
       <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{product.name}}</h3>
            <div>Price : {{product.price }}<br>Quantity: {{product.quantity}}</div>
            <button @click="removeProduct(product._id)">Delete</button>
          </div>
        </v-card-title>
        <v-divider></v-divider>
       </v-card>
       <br>
     </v-flex>
   </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        products: []
      }
    },
    computed: {
      ...mapGetters(['productLists'])
    },
    methods: {
      ...mapActions(['getProducts', 'removeProduct'])
    },
    mounted() {
      this.getProducts()
    },
    watch: {
      productLists: function(val) {
        this.products = val
      }
    }
  }
</script>
