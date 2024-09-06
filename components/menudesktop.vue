<template>
  <div class="font-family is-hidden-tablet-only">
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
              شیور
            </NuxtLink>
            <NuxtLink class="navbar-item has-text-weight-semibold" to="/shahi">
              شاهی
            </NuxtLink>
          </div>
        </div>
        <div class="column">
          <div class="navbar-end is-hidden-mobile">
            <div class="field ml-3 my-0">
              <p class="control has-icons-left">
                <input class="input is-primary border-radius-search-input-header" type="password" placeholder="جستجو..." />
                <span class="icon is-small is-left">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
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
      </div>
    </div>
  </div>
</template>