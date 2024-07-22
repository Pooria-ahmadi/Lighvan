<template>
  <div class="font-family width-1366px-all-page has-background-success-light">
    <h1 class="has-text-centered under-text-line has-text-weight-bold is-size-3 pt-6 is-size-4-mobile" data-aos="fade-left"> پنیر لیقوان
      شاهی </h1>
    <div class="columns is-centered mx-0 py-6" data-aos="fade-left">
      <div class="column is-8 ">
        <p class="has-text-centered is-size-3-desktop is-size-4-tablet is-size-5-mobile">
          طعم شاهانه، اصالت لیقوان، کیفیت بی‌نظیر.
        </p>
        <div class="has-text-centered">
          <img src="tree leaf.png" alt="">
        </div>
        <p class="has-text-justified mx-5 is-size-6-mobile line-height-description is-size-5-desktop">
          پنیر شاهی با تاریخچه‌ای غنی و ریشه‌هایی در مناطق مختلف اروپا، به عنوان یکی از پنیرهای خاص و منحصر به فرد
          شناخته می‌شود. این پنیر به دلیل طعم تند و بوی خاص خود، مورد توجه بسیاری از علاقه‌مندان به پنیر قرار دارد و به
          عنوان یک منبع غنی از مواد مغذی، می‌تواند به سلامت عمومی بدن کمک کند.
        </p>
      </div>
    </div>
    <div class="card columns mx-0 p-5 mb-6 is-vcentered" v-for="(card, index) in cards" :key="index">
      <div class="column is-half has-text-centered zoom-container"data-aos="fade-left" @mouseover="zoomIn" @mouseleave="zoomOut">
        <img :src="card.image" alt="Placeholder image" class="zoom-image" ref="zoomImage">
      </div>
      <div class="column is-half"data-aos="fade-right">
        <div class="content">
          <h2 class="title is-4">{{ card.title }}</h2>
          <p class="subtitle is-5 mt-4"><span>{{ price }}</span> تومان </p>

          <div class="field">
            <label class="label">تعداد</label>
            <div class="control">
              <input class="input" style="width: 180px;" type="number" :value="quantity" readonly>
            </div>
          </div>

          <div class="buttons">
            <button class="button is-success mx-4 border-radius" @click="increment">+</button>
            <button class="button is-success border-radius" @click="decrement">-</button>
          </div>

          <div class="field">
            <button class="button is-primary is-medium border-radius" @click="finalizeOrder">
              سبد خرید
            </button>
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
      title: 'پنیر لیقوان شاهی',
    }
  },
  data() {
    return {
      price: 100,
      quantity: 1,
      fixedButton: false,
      cards: [
        { title: 'پنیر 12 کیلویی شاهی', content: 'این پنیر منبع خوبی از پروتئین است که برای رشد و تعمیر بافت‌های بدن ضروری است.', image: '9.jpg' },
        { title: 'پنیر 10 کیلویی شاهی', content: 'فرآیند تولید: پنیر شاهی با افزودن قارچ‌های Penicillium به شیر تولید می‌شود. این قارچ‌ها در طی فرآیند بلوغ پنیر، رگه‌های آبی یا سبز را ایجاد می‌کنند و به پنیر طعمی تند و بویی خاص می‌بخشند.', image: '10.jpg' },
        { title: 'پنیر 250 گرمی شاهی', content: ' پنیر شاهی دارای طعمی تند و گاهی شور است که به دلیل فرآیند تخمیر و وجود قارچ‌های خاص به وجود می‌آید. بافت این پنیر معمولاً نرم و کرمی است، هرچند که نوع‌های خشک‌تر و سفت‌تر نیز وجود دارند.', image: '11.jpg' },
        { title: 'پنیر نیم کیلویی شاهی', content: ' پنیر شاهی دارای طعمی تند و گاهی شور است که به دلیل فرآیند تخمیر و وجود قارچ‌های خاص به وجود می‌آید. بافت این پنیر معمولاً نرم و کرمی است، هرچند که نوع‌های خشک‌تر و سفت‌تر نیز وجود دارند.', image: '12.jpg' },
      ]
    }
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 0) this.quantity--;
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