<template>
  <div class="font-family">
    <div class="is-relative">
      <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlide">
        <img :src="slide.image" :alt="slide.alt" style="width: 100%;">
        <div class="has-background-white has-text-centered box background-color-position">
          <p :class="slide.color" class="has-text-weight-bold mb-4 is-size-2-desktop is-size-4-tablet is-size-5-mobile">
            {{ slide.caption }}</p>
          <p :class="slide.color" class="has-text-weight-bold is-size-3-desktop is-size-7-tablet is-size-7-mobile">{{
            slide.subtittle }}</p>
          <NuxtLink :to="slide.test" :class="slide.colorbutton"
            class="button is-medium is-responsive has-text-white border-radius-button ">بیشتر</NuxtLink>
        </div>
      </div>
      <a class="next has-text-white has-text-weight-bold is-size-6" @click="prevSlide">&#10094;</a>
      <a class="prev has-text-white has-text-weight-bold is-size-6" @click="nextSlide">&#10095;</a>
    </div>
    <div class="has-text-centered mb-4 mx-0">
      <span v-for="(dot, index) in slides" :key="index" class="dot" :class="{ 'active': index === currentSlide }"
        @click="changeSlide(index)"></span>
    </div>
    <div class="columns mt-4 mx-6 overflow-x mb-5 is-justify-content-center">
      <div class="column mx-3  is-3" v-for="(card, index) in cards" :key="index">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img :src="card.image" alt="پنیر های لیقوان شیور و شاهی">
            </figure>
          </div>
          <div class="pt-3 has-text-centered">
            <p class="has-text-weight-semibold is-size-5 has-text-info-dark"> {{ card.title }}</p>
            <p class="mt-3">{{ card.content }} </p>
            <p class="mt-3 has-text-danger">{{ card.price }} تومان</p>
            <a href="tel:+989021459616"
              class="button is-link is-rounded has-text-weight-semibold my-5 has-background-primary">خرید </a>
          </div>
        </div>
      </div>
    </div>
    <div class="columns mx-4 overflow-x my-5 is-justify-content-center my-6 py-6">
      <div class="column mx-3 has-background-success-dark is-rounded is-6 has-text-centered is-rounded-five">
        <a class="is-size-4 has-text-centered py-5 has-text-white" href="tel:+989021459616">
          خرید سازمانی مستقیم از تولید کننده
        </a>
      </div>
    </div>
    <div class="width-1366px-all-page">
      <div class="background-fixed">
        <div class="columns is-mobile is-centered is-vcentered mx-6 white-color-text is-flex-direction-column">
          <div class="column has-text-centered my-4">
            <p class="has-text-weight-bold is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-justified">
              پنیر صبحانه، آغاز روز خوش با خانواده
            </p>
          </div>
          <div class="column has-text-centered">
            <div class="columns is-mobile is-centered is-vcentered mx-6 white-color-text">
              <div class="column has-text-centered is-half">
                <p class="has-text-weight-bold is-size-2 mb-5">+16</p>
                <p class="has-text-weight-bold is-size-6">پنیر متنوع</p>
              </div>
              <div class="column has-text-centered is-half">
                <p class="has-text-weight-bold is-size-2 mb-5">+1500</p>
                <p class="has-text-weight-bold is-size-6">مشتری فعال</p>
              </div>
              <div class="column has-text-centered is-half">
                <p class="has-text-weight-bold is-size-2 mb-5">+30</p>
                <p class="has-text-weight-bold is-size-6"> سال تجربه</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-centered mx-4 is-vcentered my-6" data-aos="fade-right" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <div class="column line-height-description has-text-justified is-7">
          <h1 class="mx-5 word-space-mobile is-size-5 has-text-weight-bold"> پنیر لیقوان</h1>
          <p class="mx-5 word-space-mobile">
            پنیر یکی از فرآورده‌های لبنی است که به‌صورت روزانه در وعده‌های غذایی مختلف توسط عموم مردم مصرف می‌شود و
            باتوجه‌به اینکه ماده اولیه آن شیر است خواص آن نیز از شیر فرآوری شده تبعیت می‌کند. پنیر لیقوان نیز از این
            قاعده
            مستثنی نیست و خواص پنیر لیقوان فرآوری شده از شیر تازه گوسفندی بیش از سایر انواع پنیر است.
            یکی از خواص اختصاصی خرید پنیر لیقوان نسبت به سایر پنیرها این است که در فرایند تولید پنیر از باکتری‌های
            تولیدکننده پروبیوتیک استفاده می‌شود.
          </p>
        </div>
        <div class="column is-3">
          <div class="has-text-centered">
            <img src="4.jpg" alt="پنیر لیقوانی" class="border-radius">
          </div>
        </div>
      </div>
      <div class="columns is-centered mx-4">
        <div class="column  is-three-quarters">
          <div class="box has-background-link-light">
            <h2
              class=" word-space-mobile has-text-centered is-size-4 has-text-weight-bold mt-4 has-background-white py-1">
              خواص پنیر لیقوان شیور
            </h2>
            <div class="has-text-centered mt-5">
              <img src="shakhe.png" alt="">
            </div>
            <p class=" word-space-mobile line-height-description mt-4 has-text-justified">

              پنیر از شیر گاو یا گاوهایی که در منطقه پرورش داده می‌شوند، تهیه می‌شود و دارای طعم و مزه خاصی است. آنچه
              پنیر
              لیقوان را از دیگر انواع پنیرها متمایز می‌کند، طعم غنی و ملایم آن است که به دلیل شرایط آب و هوایی و مراتع
              غنی
              این منطقه بوجود می‌آید.

              این پنیر معمولاً از شیر گاوهای محلی تهیه می‌شود که از چراگاه‌ها و مراتع اطراف لیقوان بهره می‌برند. پنیر
              لیقوان به صورت دستی و سنتی تولید می‌شود و برخی از کارخانه‌های محلی نیز در تولید آن نقش دارند. این پنیر
              معمولاً در قالب‌های بزرگ و استوانه‌ای تولید <strong>
                <NuxtLink to="/shivar">بیشتر...</NuxtLink>
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div class="has-text-centered mx-6 my-6" data-aos="flip-left">
        <video controls poster="cheeseonvideo.jpg" class="border-radius">
          <source src="Cheese.mp4" type="video/mp4">
        </video>
      </div>
      <div class="columns is-centered mx-4 is-vcentered  is-flex-direction-row-reverse " data-aos="fade-right"
        data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="column line-height-description has-text-justified is-7">
          <h2 class="mx-5 word-space-mobile is-size-5 has-text-weight-bold">
            پنیر لیقوان شیور چه خواصی دارد؟
          </h2>
          <p class="mx-5 word-space-mobile">
            پنیر لیقوانی شیور دارای مزایای متعددی است. اولاً، به دلیل استفاده از شیر گوسفند، سرشار از پروتئین و کلسیم
            است که برای سلامت استخوان‌ها و دندان‌ها مفید است. ثانیاً، فرآیند تولید سنتی آن باعث می‌شود که این پنیر دارای
            پروبیوتیک‌های طبیعی باشد که به بهبود سلامت دستگاه گوارش کمک می‌کند. همچنین، طعم منحصر به فرد و خوشمزه آن
            می‌تواند به تنوع غذایی و افزایش اشتها کمک کند.
          </p>
        </div>
        <div class="column is-3">
          <div class="has-text-centered">
            <img src="3.jpg" alt="پنیر لیقوانی" class="border-radius">
          </div>
        </div>
      </div>
      <div class="columns is-centered mx-4 my-6">
        <div class="column  is-three-quarters">
          <div class="box has-background-success-light ">
            <h2
              class="word-space-mobile has-text-centered is-size-4 has-text-weight-bold mt-4 has-background-white py-1">
              خواص پنیر شاهی
            </h2>
            <div class="has-text-centered mt-5">
              <img src="shakhe.png" alt="">
            </div>
            <p class="word-space-mobile line-height-description has-text-justified my-4 mx-4">

              پنیر شاهی یکی از نوع‌های محبوب پنیر در ایران است که از شیر گاو یا گاوهای محلی تولید می‌شود. این پنیر
              اصلی‌ترین محصول لبنی استان خراسان رضوی است و به دلیل ویژگی‌های خاص خود محبوبیت زیادی در بین مردم دارد.
              پنیر
              شاهی دارای طعم ملایم و خوشمزه‌ای است که به دلیل این ویژگی، در غذاهای مختلف مورد استفاده قرار می‌گیرد.

              این نوع پنیر معمولاً به صورت قطعات مربعی یا مستطیلی عرضه می‌شود و در بسته‌بندی‌های مختلف در بازارها و
              فروشگاه‌ها یافت می‌شود. تولید این پنیر اغلب به صورت سنتی <strong>
                <NuxtLink to="/shahi">بیشتر...</NuxtLink>
              </strong></p>
          </div>
        </div>
      </div>
      <div class="columns is-centered mx-4 is-vcentered" data-aos="fade-right" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <div class="column line-height-description has-text-justified is-7">
          <p class="mx-5 word-space-mobile">
            پنیر لیقوانی شیور یک نوع پنیر سنتی ایرانی است که از شیر گوسفند تهیه می‌شود. این پنیر از منطقه لیقوان در
            استان آذربایجان شرقی تولید می‌شود و به دلیل استفاده از شیر طبیعی گوسفندهای محلی و فرآیند تولید خاص آن، طعمی
            منحصر به فرد و بافتی نرم و خامه‌ای دارد. پنیر لیقوانی شیور دارای عطر و طعم قوی و کمی شور است که مورد پسند
            بسیاری از مصرف‌کنندگان قرار می‌گیرد. این پنیر معمولا به صورت تازه مصرف می‌شود و در تهیه انواع غذاهای محلی و
            سنتی ایرانی کاربرد دارد. بسته‌بندی و نگهداری این پنیر نیز باید با دقت انجام شود تا کیفیت و طعم آن حفظ شود.
          </p>
        </div>
        <div class="column is-3">
          <div class="has-text-centered">
            <img src="1.jpg" alt="پنیر لیقوانی" class="border-radius">
          </div>
        </div>
      </div>
      <div class="columns is-centered mx-4 is-vcentered my-4  is-flex-direction-row-reverse" data-aos="fade-right"
        data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="column line-height-description has-text-justified is-7">
          <h2 class="mx-5 word-space-mobile is-size-5 has-text-weight-bold">
            پنیر شاهی چه خواصی دارد؟
          </h2>
          <p class="mx-5 word-space-mobile">
            پنیر شاهی، که از شیر گوسفند تهیه می‌شود، دارای مزایای فراوانی است. اولاً، این پنیر منبع غنی از پروتئین و
            کلسیم است که به تقویت استخوان‌ها و دندان‌ها کمک می‌کند. ثانیاً، با داشتن پروبیوتیک‌های طبیعی، به بهبود سلامت
            دستگاه گوارش و تقویت سیستم ایمنی بدن کمک می‌کند. همچنین، طعم غنی و کرمی آن می‌تواند به افزایش لذت از غذا و
            تنوع در رژیم غذایی کمک کند.
          </p>
        </div>
        <div class="column is-3">
          <div class="has-text-centered">
            <img src="2.jpg" alt="پنیر لیقوانی" class="border-radius">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { image: 'White_cheese-slide-2.jpg', alt: 'پنیر شیور', caption: 'پنیر لیقوان شیور', subtittle: 'طعم اصیل لیقوان شیور', color: 'has-text-info-dark', test: '/shivar', colorbutton: 'has-background-info-dark' },
        { image: 'White_cheese-slide-1.png', alt: 'پنیر لیقوان', caption: ' پنیر لیقوان شاهی', subtittle: 'لذتی از طعم و عمق فرهنگ ایرانی', color: 'has-text-danger-dark', test: '/shahi', colorbutton: 'has-background-danger-dark' },
      ],
      cards: [
        /*{ title: 'پنیر یواف', content: '400 گرم', image: '2.jpg' },
        { title: 'پنیر یواف', content: '5 کیوگرم', image: '3.jpg' },
        { title: 'پنیر یواف', content: '16 کیلوگرم', image: '4.jpg' },
        { title: 'پنیر لیقوان شاهی', content: '400 گرم', image: '2.jpg' },
        { title: 'پنیر لیقوان شاهی', content: '800 گرم', image: '3.jpg' },
        { title: 'پنیر لیقوان شیور', content: ' 400 گرم 12 تایی', image: '3.jpg' },*/
        { title: 'پنیر لیقوان شیور', content: '400 گرم پکی ', image: '3.jpg', price: '۱۹۸،۵۰۰' },
        { title: 'پنیر لیقوان شیور', content: '800 گرم 8 تایی', image: '3.jpg', price: '۳۴۸،۵۰۰' },
      ]
    }
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    showSlides() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
    changeSlide(index) {
      this.currentSlide = index;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }
  },
}
</script>
