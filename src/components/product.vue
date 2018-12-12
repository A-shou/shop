<template>
  <div>
    <div class="producttop">
      <swiper :options="swiperOption" ref="mySwiper" class="bannerbox">
        <swiper-slide v-for="(item,index) in banner" :key="index" class="swiper-slide">
          <div class="imgbox">
            <img src="../img/2.jpg">
          </div>
        </swiper-slide>
      </swiper>
      <div class="navround">{{realIndex}}/<span style="font-size: 0.22rem;">{{banner.length}}</span></div>
      <div>
        <img src="" alt="">
      </div>
    </div>

    <div class="box">
      产品简介
    </div>

    <div class="productfoot" :class="{productfootdown:!$store.state.footclass}">
      <div class="imgbox footimg fl" @click="$router.push({path:'/cart'})">
        <img src="../img/icon_3.png" alt="">
      </div>
      <div class="fr shopbtn">加入购物车</div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return{
        banner:['1','2','3'],
        realIndex:1,
        swiperOption: {
          notNextTick: true,
          loop:true,
          on: {
            touchEnd: () => {
              let swiper = this.$refs.mySwiper.swiper
              console.log(swiper.realIndex)
              this.realIndex = swiper.realIndex+2 > this.banner.length ? 1 : swiper.realIndex+2
            },
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        },
      }
    },
    mounted(){
      this.$store.commit('setFootDown')
    }
  }
</script>

<style scoped>
  .navround{
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    z-index: 100;
    bottom: 0.1rem;
    right: 0.1rem;
    background: rgba(0,0,0,0.8);
    border-radius: 50%;
    line-height: 0.7rem;
    color: #fff;
    text-align: center;
  }
  .producttop{
    position: relative;
    margin-bottom: 0.2rem;
  }
  .productfoot{
    transition: 0.4s;
    height: 1rem;
    width: 100%;
    z-index: 500;
    background: #fff;
    bottom: 0;
    left: 0;
    transition-delay: 0.2s;
    box-shadow: 0 -0.02rem 0.2rem rgba(0,0,0,0.2);
    position: fixed;
  }
  .productfootdown{
    transform: translateY(100%);
  }
  .footimg{
    width: 0.6rem;
    margin: 0.2rem 0 0 0.4rem;
  }
  .shopbtn{
    color: #fff;
    background: #ff4e4e;
    height: 100%;
    line-height: 1rem;
    width: 2rem;
    text-align: center;
  }
</style>
