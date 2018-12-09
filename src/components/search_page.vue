<template>
    <div>
      <div class="box clearfix">
        <img src="../img/back_icon.png" alt="" class="fl backbtn" @click="$router.back(-1)">
        <div style="width: calc(100% - 0.5rem);" class="fr">
          <v-search />
        </div>
      </div>

      <div class="box">
        <v-porductlist :list="product" />
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
  .backbtn{
    height: 0.4rem;
    margin-top: 0.3rem;
  }
</style>
