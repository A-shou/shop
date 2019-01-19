<template>
  <div class="box">
    <div class="topbox">
      <img src="../../img/back_icon.png" alt="" class="topimg" @click="$router.go(-1)">
      <p class="topbtn" @click="addAddress">确定</p>
    </div>
    <div v-if="userData">
        <div style="padding-top: 0.3rem;">
          <p>收货人姓名：</p>
          <input v-model="userData.consigneeName" type="text"/>
        </div>
        <div>
          <p>收货人联系电话：</p>
          <input v-model="userData.consigneePhone" type="number"/>
        </div>
        <div v-if="address">
          <v-asbox :ovalue="address" />
        </div>
    </div>
  </div>
</template>

<script>
  import asbox from './address.vue'

  export default {
    components:{
      'v-asbox':asbox
    },
    data(){
      return{
        name:'',
        phone:'',
        address:{
          text: '',
          District: '请选择区域',
          Province: '请选择省份',
          City: '请选择城市',
        },
        userData: {
          consigneeName: '',
          consigneePhone: ''
        }
      }
    },
    methods:{
      addAddress(){
        if(this.$route.query.type == 'add'){
          this.ajaxPost({
            url:'/cri-cms-api/mall/app/saveAddress',
            data:{
              userId: this.$store.state.userId,
              consigneeName: this.userData.consigneeName,
              consigneePhone: this.userData.consigneePhone,
              consigneeProvince: this.address.Province,
              consigneeCity: this.address.City,
              consigneeArea: this.address.District,
              consigneeContent: this.address.text
            },
            success: res => {
              this.$router.back(-1)
            }
          })
        }else{
          this.ajaxPost({
            url:'/cri-cms-api/mall/app/updateAddress',
            data:{
              id: this.userData.id,
              userId: this.$store.state.userId,
              consigneeName: this.userData.consigneeName,
              consigneePhone: this.userData.consigneePhone,
              consigneeProvince: this.address.Province,
              consigneeCity: this.address.City,
              consigneeArea: this.address.District,
              consigneeContent: this.address.text
            },
            success: res => {
              this.$router.back(-1)
            }
          })
        }
      }
    },
    mounted(){
      this.$store.commit('setFootDown')
      console.log(this.$route.query.data)
      if (this.$route.query.type != 'add') {
        this.userData = this.$route.query.data
        this.address = {
          text: this.$route.query.data.consigneeContent,
          District: this.$route.query.data.consigneeArea,
          Province: this.$route.query.data.consigneeProvince,
          City: this.$route.query.data.consigneeCity,
        }
      }
    }
  }
</script>

<style scoped>
  input{
    margin: 0.2rem 0;
    border: 1px solid #ddd;
    width: 100%;
    outline: none;
    padding-left: 0.2rem;
    box-sizing: border-box;
    height: 0.6rem;
  }
  .box>div{
    margin-bottom: 0.2rem;
  }
  .topbox{
    height: 0.4rem;
    padding-top: 0.2rem;
  }
  .topimg{
    height: 0.4rem;
    float: left;
  }
  .topbtn{
    float: right;
    line-height: 0.4rem;
  }
</style>
