<template>
    <div class="font-family">
        <div class="columns mx-2 my-0">
            <div class="column is-half has-background-white  mx-4 py-0 my-0">
                <div class="columns is-centered mt-6">
                    <div class="column box is-8-desktop">
                        <div class="has-text-centered">
                            <a href="/">
                                <img src="logo.png" alt="لوگو دلیان">
                            </a>
                        </div>
                        <p class="has-text-success">ورود به سایت</p>
                        <hr class="mx-2 mt-4">
                        <div class="control">
                            <label class="label">جهت خرید شماره موبایل خود را وارد نمائید</label>
                            <input class="input is-rounded is-primary" type="text" placeholder="*شماره موبایل" />
                        </div>
                        <div class="has-text-centered">
                            <button class="button is-success my-4">ارسال</button>
                        </div>
                        <div class="has-text-centered">
                            <NuxtLink to="/Rules" class="has-text-grey my-4">قوانین و مقررات</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half has-background-white is-hidden-mobile py-0 my-0">
                <img src="lighvan-cheese-8(1).jpg" class="border-radius-search-input-header" style="height:100% ;"alt="پنیر لیقوان">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'login'
}
</script>