<template>
  <div>
    <div class="box">
      <v-search />
    </div>

    <div class="nav_box">
      <ul class="navbox box">
        <li v-for="(item,index) in navlist" class="navlist" :class="{navliston:navindex == index}">{{item}}</li>
      </ul>
      <div class="navmore" @click="$router.push({path:'/class'})">+</div>
    </div>

    <router-view/>

  </div>
</template>

<script>
    export default {
        data(){
          return{
            navindex:0,
            navlist:['123','456','123','456','123','456','123','456'],
          }
        }
    }
</script>

<style scoped>
  .nav_box{
    position: relative;
    overflow: hidden;
    border-bottom: 0.2rem solid #eee;
  }
  .navbox{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding-right: 0.8rem;
  }
  .navlist{
    display: inline-block;
    line-height: 0.5rem;
    margin: 0 0.2rem;
    color: #666;
  }
  .navliston{
    color: #282828;
    border-bottom: 2px solid #f8cf2d;
  }
  .navmore{
    height: 100%;
    width: 0.8rem;
    background: #fff;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.4rem;
    box-shadow: -0.04rem 0 0.2rem rgba(0,0,0,0.2);
    z-index: 100;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
