<template>
    <div>
      <div class="box clearfix">
        <img src="../img/back_icon.png" alt="" class="fl backbtn" @click="$router.push('/')">
        <div style="width: calc(100% - 0.5rem);" class="fr">
          <v-search @psearch="psearch" />
        </div>
      </div>

      <div class="box">
        <v-porductlist v-if="product.length > 0" :list="product" />
        <p v-if="product.length <= 0" class="nop">暂无该商品名的商品</p>
      </div>

    </div>
</template>

<script>
  import porductlist from './block/productList.vue'

  export default {
    components: {
      'v-porductlist':porductlist
    },
    data(){
      return{
        product:[]
      }
    },
    methods: {
      psearch (data) {
        this.ajaxPost({
          url:'/cri-cms-api/mall/app/queryCommodity',
          data: {
            commodityName: data
          },
          success:res => {
            this.product = res.data.results
          }
        })
      }
    },
    beforeMount(){
      if (this.$route.query.type && this.$route.query.type == 'search') {
        this.ajaxPost({
          url:'/cri-cms-api/mall/app/queryCommodity',
          data: {
            commodityName: this.$route.query.search
          },
          success:res => {
            this.product = res.data.results
          }
        })
      } else {
        this.ajaxPost({
          url:'/cri-cms-api/mall/app/queryCommodity',
          success:res => {
            console.log(res)
            this.product = res.data.results
          }
        })
      }
    }
  }
</script>

<style scoped>
  .backbtn{
    height: 0.4rem;
    margin-top: 0.3rem;
  }
  .nop{
    font-size: 0.32rem;
    color: #aaa;
    text-align: center;
    line-height: 4rem;
  }
</style>
