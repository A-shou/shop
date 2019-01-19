<template>
    <div class="classbox">
      <div class="box clearfix">
        <img src="../img/back_icon.png" alt="" class="fl backbtn" @click="goback">
        <div style="width: calc(100% - 0.5rem);" class="fr">
          <v-search />
        </div>
      </div>

      <div class="clearfix class_box">
        <div class="fl lbox">
          <div v-for="(item,index) in navlist" class="lbox_list" :class="{lbox_liston: index == navindex}" @click="navto(index, item.id)">{{item.typeName}}</div>
        </div>

        <div class="rbox fr">
          <v-porductlist :list="product" />
        </div>
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
          navindex:0,
          navlist:[],
          product:[]
        }
      },
      beforeMount(){
        this.ajaxPost({
          url:'/cri-cms-api/mall/app/queryType',
          success: res => {
            this.navlist = res.data.results
            this.navlist.unshift({
              typeName: '全部',
              id: ''
            })
          }
        })
        this.ajaxPost({
          url:'/cri-cms-api/mall/app/queryCommodity',
          success:res => {
            console.log(res)
            this.product = res.data.results
          }
        })
      },
      methods:{
        goback(){
          this.$router.back(-1)
        },
        navto(index, id){
          this.navindex = index
          this.ajaxPost({
            url:'/cri-cms-api/mall/app/queryCommodity',
            data: {
              typeId: id
            },
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
  .listbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .lbox_list{
    line-height: 1rem;
    background: #eee;
    border-bottom: 1px solid #ddd;
    color: #666;
    padding-left: 0.1rem;
  }
  .lbox_liston{
    color: #282828;
    background: #fff;
  }
  .class_box{
    border-top: 1px solid #ddd;
    height: calc(100% - 2rem);
  }
  .lbox{
    width: 2rem;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .rbox{
    height: 100%;
    width: calc(100% - 2rem);
    box-sizing: border-box;
    padding: 0.2rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .classbox{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .backbtn{
    height: 0.4rem;
    margin-top: 0.3rem;
  }
</style>
