<template>
  <div class="is-hidden-tablet-only">
    <div class="box is-hidden-mobile py-3">
      <div class="columns">
        <div class="column py-0">
          <div class="navbar-start is-hidden-mobile ">
            <a class="pt-1" href="/">
              <img class="logo-image" src="logo.png" />
            </a>
            <NuxtLink class="navbar-item mr-6 has-text-weight-semibold" to="/">
              خانه
            </NuxtLink>
            <NuxtLink class="navbar-item has-text-weight-semibold" to="/shivar">
              پنیر لیقوان شیور
            </NuxtLink>
            <NuxtLink class="navbar-item has-text-weight-semibold" to="/shahi">
              پنیر لیقوان شاهی
            </NuxtLink>
          </div>
        </div>
        <div class="column">
          <div class="navbar-end is-hidden-mobile">
            <div class="field ml-3 my-0">
              <p class="control has-icons-left">
                <input class="input is-primary border-radius-search-input-header" type="password"
                  placeholder="جستجو..." />
                <span class="icon is-small is-left">
                  <img src="search-16.png" alt="">
                </span>
              </p>
            </div>
            <NuxtLink to="/singup" class="ml-3">
              <button class="button is-link is-light border-radius-search-input-header">
                <span class="icon">
                  <img src="user.png" alt="">
                </span>
              </button>
            </NuxtLink>
            <NuxtLink to="/basket">
              <div class="cart-icon">
                <button class="button is-success is-light border-radius-search-input-header">
                <span class="icon">
                  <img src="shopping-cart.png" alt="">
                  <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
                </span>
              </button>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed : {
cartItemCount(){
  return this.$store.getters.cartItemCount
}
  }
}

</script>
<style>
.cart-icon {
  position: relative;
  display: inline-block;
}
.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: rgb(1, 252, 22);
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
}
</style>