<template>
  <div>
    <h2 class="headline">Add Products</h2><br>
    <form @submit.prevent="add()">
      <v-text-field v-model="productData.name" label="Product Name" required></v-text-field>
      <v-text-field v-model="productData.price" label="Price" required></v-text-field>
      <v-text-field v-model="productData.quantity" label="Product Description"></v-text-field>
      <button class="mt-5 btn" type="submit">Add</button>             
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      productData: {
        name: '',
        price: '',
        quantity: ''
      }
    }
  },
  methods: {
    ...mapActions(['addProducts']),
    add() {
      this.addProducts(this.productData)
    }
  }
}
</script>

<style>
  .btn {
    text-transform: capitalize;
    padding: 10px 30px;
    background-color: #555;
    color: white;
    border-radius: 5px;
  }
</style>

