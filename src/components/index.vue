<template>
    <div>
      <v-swiper class="indexbanner"></v-swiper>

      <!--<ul class="navlistbox">-->
        <!--<li class="navlist" v-for="(item,index) in navlist">-->
          <!--<img src="../img/icon1.jpg" alt="">-->
          <!--<p>123</p>-->
        <!--</li>-->
      <!--</ul>-->

      <div class="box listbox">
        <p class="blocktitle">积分兑换<span class="fr more" @click="$router.push({path:'/search'})">MORE ></span></p>
        <v-porductlist :list="product" />
      </div>

    </div>
</template>

<script>
  import swiper from './block/swiper.vue'
  import porductlist from './block/productList.vue'

  export default {
    components: {
      'v-swiper':swiper,
      'v-porductlist':porductlist
    },
    data(){
      return{
        navlist:['1','2','3','4','5','6'],
        product:[
          {
            img:require('../img/product.jpg'),
            name:'123',
            text:'123'
          },
          {
            img:require('../img/product.jpg'),
            name:'123',
            text:'123'
          },
          {
            img:require('../img/product.jpg'),
            name:'123',
            text:'123'
          },
          {
            img:require('../img/product.jpg'),
            name:'123',
            text:'123'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .indexbanner{
    border-bottom: 0.2rem solid #eee;
  }
  .navlistbox{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding-left: 0.15rem;
    border-bottom: 0.2rem solid #eee;
    padding-bottom: 0.2rem;
  }
  .more{
    font-size: 0.26rem;
    line-height: 0.32rem;
  }
  .navlist{
    width: 1.6rem;
    text-align: center;
    display: inline-block;
  }
  .navlist img{
    width: 60%;
    margin: 0 auto 0.2rem;
  }
  .listbox{
    padding-top: 0.3rem;
  }
  .blocktitle{
    font-size: 0.32rem;
    margin-bottom: 0.3rem;
    padding-left: 0.1rem;
    border-left: 2px solid #f8cf2d;
  }
</style>
