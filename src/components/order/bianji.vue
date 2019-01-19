<template>
    <div>
      <div class="box fltop clearfix">
        <img src="../../img/back_icon.png" alt="" class="fl backbtn" @click="$router.back(-1)">
      </div>
      <div style="height: 1rem"></div>
      <ul class="box">
        <li class="shxx" v-for="(item, index) in list" @click="change(item)">
          <p><span>收货人姓名:</span><span>{{item.consigneeName}}</span></p>
          <p><span>收货人电话：</span><span>{{item.consigneePhone}}</span></p>
          <p><span>收货地址：</span><span>{{item.consigneeProvince}} - {{item.consigneeCity}} - {{item.consigneeArea}} - {{item.consigneeContent}}</span></p>
          <img class="bianji" src="../../img/bianji.png" alt="" @click.stop="setlist(item)">
        </li>
      </ul>

      <div class="add" @click="addAddress">
          +
      </div>

    </div>
</template>

<script>
    export default {
      data(){
       return{
          list:[]
       }
      },
      beforeMount(){
        this.$store.commit('setFootDown')
        this.ajaxPost({
          url:'/cri-cms-api/mall/app/queryAddress',
          data:{
            userId: this.$store.state.userId
          },
          success:res => {
            console.log(res)
            this.list = res.data.results
          }
        })
      },
      methods:{
        change (item) {
          if (this.$route.query.type && this.$route.query.type == 'order') {
            this.$router.replace({path: '/order', query: item})
          }
        },
        setlist(data){
          this.$router.push({path:'/setlist',query:{type:'change', data: data}})
        },
        addAddress(){
          this.$router.push({path:'/setlist',query:{type:'add'}})
        }
      }
    }
</script>

<style scoped>
  .add{
    border: 1px solid #ddd;
    margin: 0.3rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.6rem;
    color: #aaa;
    border-radius: 0.2rem;
  }
  .shxx{
    line-height: 0.3rem;
    padding: 0.2rem 0;
    position: relative;
    border-bottom: 1px solid #ddd;
    font-size: 0.24rem;
  }
  .shxx:last-child{
    border: 0;
  }
  .shxx span{
    display: block;
  }
  .shxx p{
    margin-bottom: 0.05rem;
    overflow: hidden;
  }
  .shxx span:nth-child(1){
    float: left;
    width: 1.8rem;
  }
  .shxx span:nth-child(2){
    float: right;
    width: calc(100% - 1.8rem);
  }
  .bianji{
    position: absolute;
    right: 0rem;
    top: 0.2rem;
    height: 0.3rem;
  }
</style>
