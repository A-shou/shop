<template>
    <ul class="list_box">
      <li v-for="(item,index) in list" class="list" @click="productTo(item.id)">
        <div class="imgbox listimg">
          <p></p>
          <img :src="item.pic1" alt="">
        </div>
        <p class="title">{{item.commodityName}}</p>
        <div class="clearfix textbox">
          <p class="fl">库存：{{item.inventoryNum}}</p>
          <p class="fr">积分：{{item.commodityIntegral}}</p>
        </div>

      </li>
    </ul>
</template>

<script>
    export default {
      props:['list'],
      data(){
        return{

        }
      },
      methods:{
        productTo(id){
          this.$router.push({path:'/product',query:{id:id}})
        }
      }
    }
</script>

<style scoped>
  .list_box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .list{
    width: calc(50% - 0.1rem);
    margin-bottom: 0.2rem;
    overflow: hidden;
    border-radius: 0.1rem;
    box-shadow: 0.02rem 0.02rem 0.15rem rgba(0,0,0,0.2);
    padding-bottom: 0.2rem;
  }
  .listimg{
    margin-bottom: 0.1rem;
  }
  .title{
    padding: 0 0.1rem;
    font-size: 0.3rem;
    line-height: 0.5rem;
    height: 1rem;
    overflow: hidden;
  }
  .textbox{
    padding: 0 0.1rem;
    font-size: 0.22rem;
  }
</style>
