<template>
  <div class="width-1366px-all-page has-background-success-light">
    <h1 class="has-text-centered under-text-line has-text-weight-bold is-size-3 pt-6 is-size-4-mobile"
      data-aos="fade-left"> پنیر لیقوان شیور </h1>
    <div class="columns is-centered mx-0 py-6" data-aos="fade-left">
      <div class="column is-8 ">
        <p class="has-text-centered is-size-3-desktop is-size-4-tablet is-size-5-mobile">
          طعم اصیل، کیفیت برتر، پنیر لیقوان شیور
        </p>
        <div class="has-text-centered">
          <img src="tree leaf.png" alt="">
        </div>
        <p class="has-text-justified mx-5 is-size-6-mobile line-height-description is-size-5-desktop">پنیر صبحانه شیور
          با اصالت ایرانی خود، بخشی از فرهنگ غذایی این کشور است
          و به دلیل ویژگی‌های مغذی و طعم ملایم، در سراسر جهان محبوب شده است. این پنیر نه تنها به عنوان یک صبحانه لذیذ
          مصرف می‌شود، بلکه به عنوان یک گزینه سالم و متنوع در رژیم غذایی روزانه می‌تواند جایگاه ویژه‌ای داشته باشد. </p>
      </div>
    </div>
    <div class="card columns mx-0 p-5 box mb-6 is-vcentered" v-for="(card, index) in cards" :key="index">
      <div class="column is-half has-text-centered zoom-container" @mouseover="zoomIn" @mouseleave="zoomOut">
        <img :src="card.image" class="zoom-image">
      </div>
      <div class="column is-half">
        <div class="content">
          <h2 class="title is-4">{{ card.title }}</h2>
          <p class="subtitle is-5 mt-4"><span>{{ card.price }}</span> تومان </p>

          <div class="field">
            <label class="label">تعداد</label>
            <div class="control">
              <input :id="'id' + index" class="input" style="width: 180px;" type="number" :value="card.quantity"
                readonly>
            </div>
          </div>

          <div class="buttons">
            <button class="button is-success mx-4 border-radius" @click="increment(index)">+</button>
            <button class="button is-success border-radius" @click="decrement(index)">-</button>
          </div>

          <div class="field">
            <a @click="addToCart(card)" class="button is-primary is-medium border-radius">
              خرید
            </a>
            <a href="tel:09021459616" class="button is-danger mr-4 is-medium border-radius">
              تماس با مسئول فروش
            </a>
          </div>

          <div class="content mt-4">
            <p class="line-height-description has-text-justified">{{ card.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPopup" class="is-rounded box p-4 popup  has-background-success has-text-white">
      محصول به سبد خرید اضافه شد!
    </div>
    <div v-if="showvalue" class="is-rounded box p-4 popup  has-background-danger has-text-white">
      تعداد محصول مورد نظر را انتخاب کنید
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  head() {
    return {
      title: 'پنیر لیقوان شیور',
    }
  },
  data() {
    return {
      showPopup: false,
      showvalue: false,
      cards: [
        { quantity: 0, title: 'پنیر 400 گرمی شیور', content: 'پنیر صبحانه شیور با اصالت ایرانی خود، بخشی از فرهنگ غذایی این کشور است و به دلیل ویژگی‌های مغذی و طعم ملایم، در سراسر جهان محبوب شده است.', image: '44.png', price: '۱۹۸،۵۰۰' },
        { quantity: 0, title: 'پنیر 800 گرمی شیور', content: 'پنیر صبحانه شیور با اصالت ایرانی خود، بخشی از فرهنگ غذایی این کشور است و به دلیل ویژگی‌های مغذی و طعم ملایم، در سراسر جهان محبوب شده است.', image: '33.png', price: '۳۴۸،۵۰۰' },
      ]
    }
  },
  methods: {
    ...mapMutations(['addtoproducts', 'incrementProductQuantity', 'decrementProductQuantity']),

    addToCart(card, index) {
    if (card.quantity === 0) {
      this.showvalue = true;
      setTimeout(() => {
        this.showvalue = false;
      }, 5000);
    } else {
      this.showvalue = false;
      this.addtoproducts({
          title: card.title,
          quantity: card.quantity,
          price: card.price,
          image: card.image,
        });
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 5000);
    }
  },
  increment(index) {
    const input = document.getElementById('id' + index);
    input.value++;
    this.cards[index].quantity = parseInt(input.value);
  },

  decrement(index) {
    const input = document.getElementById('id' + index);
    if (input.value > 0) {
      input.value--;
      this.cards[index].quantity = parseInt(input.value);
    }
  },
    zoomIn(event) {
      const image = event.currentTarget.querySelector('.zoom-image');
      image.classList.add('zoomed');
    },
    zoomOut(event) {
      const image = event.currentTarget.querySelector('.zoom-image');
      image.classList.remove('zoomed');
    }
  },
}
</script>
<style>
.popup {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
}
</style>
