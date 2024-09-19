<template>
    <div class="is-hidden-desktop">
        <div class="columns mx-0 py-0 is-mobile box is-hidden-desktop is-vcentered">
            <div class="column pb-0">
                <div class="navbar-burger" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="column pb-0 has-text-centered">
                <a href="/">
                    <img class="logo-image" src="logo.png" alt="لوگو دلیان">
                </a>
            </div>
            <div class="column pb-0 has-text-left">
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
        <div class="field mx-6">
            <p class="control has-icons-left">
                <input class="input is-primary border-radius-search-input-header" type="password"
                    placeholder="جستجو..." />
                <span class="icon is-small is-left">
                    <img src="search-16.png" alt="">
                </span>
            </p>
        </div>
        <div class="navbar-menu pr-6 is-hidden-desktop" :class="{ 'is-active': isMobileMenuOpen }">
            <ul>
                <li class="my-4">
                    <NuxtLink class="has-text-black has-text-weight-semibold" to="/">
                        خانه
                    </NuxtLink>
                </li>
                <li class="my-4">
                    <NuxtLink class="has-text-black has-text-weight-semibold" to="/shivar">
                        پنیر لیقوان شیور
                    </NuxtLink>
                </li>
                <li class="my-4">
                    <NuxtLink class="has-text-black has-text-weight-semibold" to="/shahi">
                        پنیر لیقوان شاهی
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    },
    computed: {
        cartItemCount() {
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