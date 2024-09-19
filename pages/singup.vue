<template>
    <div>
        <div class="columns is-vcentered mx-0 my-0">
            <!-- Column with form -->
            <div class="column is-half has-background-white mx-auto py-0 my-0 has-text-centered">
                <div class="columns is-centered mt-6">
                    <div class="column box is-8-desktop is-10-mobile mx-auto">
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
            <!-- Column with image -->
            <div class="column is-half has-background-white is-hidden-mobile p-0 is-flex is-align-items-center">
                <img src="lighvan-cheese-8(1).jpg" class="height-100" alt="پنیر لیقوان">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login'
}
</script>
