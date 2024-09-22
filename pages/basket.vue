<template>
  <div>
    <div v-if="cartItemCount === 0">
      <p class="has-text-centered mt-6 has-text-danger is-size-4 has-text-weight-bold">سبد خرید شما خالی است</p>
      <div class="has-text-centered mt-6">
        <img src="basket.png" alt="">
      </div>
    </div>
    <div v-else>
      <h1 class="has-text-centered mt-6 has-text-success-dark is-size-4 has-text-weight-bold">سبد خرید شما</h1>

      <div class="columns is-centered mt-6">
        <div class="column has-text-centered is-8">
          <div class="columns box is-vcentered is-mobile py-0 mt-6" v-for="(item, index) in cartItems" :key="item">
            <div class="column px-0 is-2-desktop">
              <img :src="item.image" alt="">
            </div>
            <div class="column px-0 is-1-mobile is-flex is-justify-content-center">
              <button class="button  mx-4 border-radius" @click="increment(index)">+</button>
              <p class="pt-2">
                {{ item.quantity }}
              </p>
              <button class="button  border-radius mx-4" @click="decrement(index)">-</button>
            </div>
            <div class="column px-0 is-3-mobile has-text-success-dark">
             قیمت {{ item.price }} تومان  
            </div>
            <div class="column px-0">
              {{ item.title }}
            </div>
            <div class="is-centered">
              <button class="button is-primary is-medium border-radius" @click="removeproducts(index)">-</button>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered mt-6">
        <button class="button is-danger is-medium border-radius" @click="clearbasket">خالی کردن سبد خرید</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  head() {
    return {
      title: 'سبد خرید',
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartItemCount']),
  },
  methods: {
    ...mapMutations(['remove_from_products', 'clear_basket', 'incrementproductsqty', 'decrementproductsqty']),

    increment(index) {
      this.incrementproductsqty(index);
    },
    decrement(index) {
      if (this.cartItems[index].quantity > 0) {
        this.decrementproductsqty(index);
      }
    },
    removeproducts(index) {
      this.remove_from_products(index);
    },
    clearbasket() {
      this.clear_basket();
    }
  }
}
</script>

<style>
th,
td {
  border-bottom: 1px solid black;
}
</style>