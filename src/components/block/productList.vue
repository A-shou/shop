<template>
    <ul class="list_box">
      <li v-for="(item,index) in list" class="list" @click="productTo">
        <div class="imgbox listimg">
          <p></p>
          <img :src="item.img" alt="">
        </div>
        <p class="title">{{item.name}}</p>
        <p class="text">积分：{{item.text}}</p>
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
        productTo(){
          this.$router.push({path:'/product'})
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
  .text{
    padding: 0 0.1rem;
    font-size: 0.3rem;
    text-align: right;
  }
</style>
