<template>
    <div class="font-family is-hidden-desktop">
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
                    <img src="logo.png" alt="لوگو دلیان">
                </a>
            </div>
            <div class="column pb-0 has-text-left">
                <a href="/singup" class="ml-3">
                    <button class="button is-link is-light border-radius-search-input-header">
                        <span class="icon">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </span>
                    </button>
                </a>
                <button class="button is-success is-light border-radius-search-input-header">
                    <span class="icon">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
        </div>
        <div class="field mx-6">
            <p class="control has-icons-left">
                <input class="input is-primary border-radius-search-input-header" type="password"
                    placeholder="جستجو..." />
                <span class="icon is-small is-left">
                    <i class="fa fa-search" aria-hidden="true"></i>
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
    }
}
</script>