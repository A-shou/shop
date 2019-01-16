<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiper" class="bannerbox">
        <swiper-slide v-for="(item,index) in banner" :key="index" class="swiper-slide">
          <div class="imgbox">
            <img :src="item.pic1">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: [ 'banner' ],
    data(){
      return{
        swiperOption: {
          notNextTick: true,
          loop:true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        },
      }
    }
  }
</script>

<style scoped>
  .bannerbox{
    padding-bottom: 0.4rem;
    background: #eee;
  }
  .swiper-pagination{
    bottom: 0;
  }
</style>
