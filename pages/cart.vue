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
      <ul>
        <li  v-for="(item, index) in cartItems" :key="item">
          {{ item.title }} - {{ item.price }} تومان - تعداد: {{ item.quantity }}
          <button @click="removeproducts(index)">حذف</button>
        </li>
      </ul>
      <button @click="clearbasket">خالی کردن سبد خرید</button>
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
    ...mapMutations(['remove_from_products', 'clear_basket']),
    removeproducts(index) {
      this.remove_from_products(index)
    },
    clearbasket() {
      this.clear_basket()
    }
  }
}
</script>