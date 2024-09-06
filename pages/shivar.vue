<template>
  <div class="font-family width-1366px-all-page has-background-success-light">
    <h1 class="has-text-centered under-text-line has-text-weight-bold is-size-3 pt-6 is-size-4-mobile" data-aos="fade-left"> پنیر لیقوان شیور </h1>
    <div class="columns is-centered mx-0 py-6" data-aos="fade-left">
      <div class="column is-8 ">
        <p class="has-text-centered is-size-3-desktop is-size-4-tablet is-size-5-mobile">
          طعم اصیل، کیفیت برتر، پنیر لیقوان شیور
        </p>
        <div class="has-text-centered">
          <img src="tree leaf.png" alt="">
        </div>
        <p class="has-text-justified mx-5 is-size-6-mobile line-height-description is-size-5-desktop">پنیر صبحانه شیور با اصالت فرانسوی خود، بخشی از فرهنگ غذایی این کشور است
          و به دلیل ویژگی‌های مغذی و طعم ملایم، در سراسر جهان محبوب شده است. این پنیر نه تنها به عنوان یک صبحانه لذیذ
          مصرف می‌شود، بلکه به عنوان یک گزینه سالم و متنوع در رژیم غذایی روزانه می‌تواند جایگاه ویژه‌ای داشته باشد. </p>
      </div>
    </div>
    <div class="card columns mx-0 p-5 box mb-6 is-vcentered" v-for="(card, index) in cards" :key="index">
      <div class="column is-half has-text-centered zoom-container"data-aos="fade-left" @mouseover="zoomIn" @mouseleave="zoomOut">
        <img :src="card.image" alt="Placeholder image" class="zoom-image" ref="zoomImage">
      </div>
      <div class="column is-half" data-aos="fade-right">
        <div class="content">
          <h2 class="title is-4">{{ card.title }}</h2>
          <p class="subtitle is-5 mt-4"><span>{{ card.price }}</span> تومان </p>

          <div class="field">
            <label class="label">تعداد</label>
            <div class="control">
              <input class="input" style="width: 180px;" type="number" :value="quantity" readonly>
            </div>
          </div>

          <div class="buttons">
            <button class="button is-success mx-4 border-radius">+</button>
            <button class="button is-success border-radius" >-</button>
          </div>

          <div class="field">
            <a href="+989021459616" class="button is-primary is-medium border-radius" >
              خرید
            </a>
          </div>

          <div class="content mt-4">
            <p class="line-height-description has-text-justified">{{ card.content }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'پنیر لیقوان شیور',
    }
  },
  data() {
    return {
      price: 10000,
      quantity: 1,
      fixedButton: false,
      cards: [
        /*{ title: 'پنیر 12 کیلویی شیور', content: 'این پنیر منبع خوبی از پروتئین است که برای رشد و تعمیر بافت‌های بدن ضروری است.', image: '5.jpg' },
        { title: 'پنیر 10 کیلویی شیور', content: 'پنیر صبحانه شیور با اصالت فرانسوی خود، بخشی از فرهنگ غذایی این کشور است و به دلیل ویژگی‌های مغذی و طعم ملایم، در سراسر جهان محبوب شده است.', image: '6.jpg' },*/
        { title: 'پنیر 400 گرمی شیور', content: ' پنیر صبحانه شیور با اصالت فرانسوی خود، بخشی از فرهنگ غذایی این کشور است و به دلیل ویژگی‌های مغذی و طعم ملایم، در سراسر جهان محبوب شده است.', image: '7.jpg',  price: '۱۹۸،۵۰۰'  },
        { title: 'پنیر 800 گرمی شیور', content: ' پنیر صبحانه شیور با اصالت فرانسوی خود، بخشی از فرهنگ غذایی این کشور است و به دلیل ویژگی‌های مغذی و طعم ملایم، در سراسر جهان محبوب شده است.', image: '8.jpg', price: '۳۴۸،۵۰۰'},
      ]
    }
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    finalizeOrder() {
      alert('سبد خرید خالی است!');
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