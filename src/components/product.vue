<template>
  <div>
    <div class="box fltop clearfix">
      <img src="../img/back_icon.png" alt="" class="fl backbtn" @click="$router.back(-1)">
    </div>
    <div style="height: 1rem"></div>

    <div class="producttop">
      <swiper v-if="getEnd" :options="swiperOption" ref="mySwiper" class="bannerbox">
        <swiper-slide v-for="(item,index) in banner" :key="index" class="swiper-slide">
          <div class="imgbox">
            <img :src="item">
          </div>
        </swiper-slide>
      </swiper>
      <div class="navround">{{realIndex}}/<span style="font-size: 0.22rem;">{{banner.length}}</span></div>
      <div>
        <img src="" alt="">
      </div>
    </div>

    <div class="box">
      <h3 class="title">{{product.commodityName}}</h3>
      <p class="stitle">产品简介</p>
      <div class="text" v-html="product.commodityDescribe"></div>
    </div>

    <div class="productfoot" :class="{productfootdown:!$store.state.footclass}">
      <div class="imgbox footimg fl" @click="$router.push({path:'/cart'})">
        <img src="../img/icon_3.png" alt="">
      </div>
      <div class="fr shopbtn" @click="addCart">加入购物车</div>
    </div>

    <v-loading v-if="loading" :loadtext="''"  @closeload="loading = false"></v-loading>

    <transition name="fade">
      <div v-if="addalert" class="altbox">已加入购物车</div>
    </transition>
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
        banner:[],
        getEnd: false,
        loading:false,
        realIndex:1,
        addalert:false,
        product:{},
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
    methods:{
      addCart(){
        if (!this.$store.state.userId) {
          this.$router.push('/login')
          return
        }
        this.loading = true
        this.ajaxPost({
          url:'/cri-cms-api/mall/app/saveTrolley',
          data:{
            commodityId: this.product.id,
            userId: this.$store.state.userId,
            commodityNum: 1
          },
          success: res => {
            this.loading = false
            this.addalert = true
            setTimeout(() => {
              this.addalert = false
            },2000)
            console.log(res)
          }
        })
      },
      goback(){
        this.$router.back(-1)
      },
    },
    mounted(){
      this.$store.commit('setFootDown')
      this.ajaxPost({
        url:'/cri-cms-api/mall/app/getCommodityByID',
        data:{
          id: this.$route.query.id
        },
        success: res => {
          console.log(res)
          this.product = res.data.result.mallCommodity
          for (let i = 0; i < 5; i++) {
            this.banner[i] = this.product['pic' + (i + 1)]
            if (this.product['pic' + (i + 2)] == '') {
              i = 5
            }
          }
          this.getEnd = true
          console.log(this.banner)
        }
      })
    }
  }
</script>

<style scoped>
  .altbox{
    position: fixed;
    z-index: 100;
    bottom: 1.2rem;
    background: #666;
    color: #fff;
    text-align: center;
    width: 2.4rem;
    line-height: 0.8rem;
    border-radius: 0.1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .stitle{
    background: #eee;
    line-height: 0.6rem;
    padding-left: 0.2rem;
    border-left: 0.04rem solid #f8cf2d;
  }
  .title{
    font-size: 0.32rem;
    line-height: 0.54rem;
    margin-bottom: 0.2rem;
  }
  .text{
    font-size: 0.28rem;
    line-height: 0.5rem;
    padding-top: 0.1rem;
  }
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
