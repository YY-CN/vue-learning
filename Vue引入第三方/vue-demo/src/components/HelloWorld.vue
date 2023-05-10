<template>
  <div class="hello">


    <!-- Swiper官方文档https://swiperjs.com/vue -->
    <Swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
      <Swiper-slide>
        <img src="../assets/images/1.jpeg">
      </Swiper-slide>
      <Swiper-slide>
        <img src="../assets/images/2.jpg">
      </Swiper-slide>
      <Swiper-slide>
        <img src="../assets/images/3.jpeg">
      </Swiper-slide>
      <Swiper-slide>
        <img src="../assets/images/1.jpeg">
      </Swiper-slide>
    </Swiper>


  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      // modules: [Pagination],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },

  // 官方方法
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
</style>
