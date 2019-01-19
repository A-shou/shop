<template>
  <div class="searchbox clearfix">
    <img src="../../img/search_btn.png" alt="" class="fl">
    <input class="search" v-model="searchtext" placeholder="请输入搜索内容" type="search"/>
  </div>
</template>

<script>
    export default {
      data(){
          return{
            searchtext: ''
          }
      },
      mounted () {
        this.keydownFun('13', () => {
          this.$router.replace({path: '/search', query:{search: this.searchtext, type: 'search'}})
          this.$emit('psearch', 'this.searchtext')
        })
      }
    }
</script>

<style scoped>
  .searchbox{
    background: #eee;
    padding: 0.15rem 0.2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0.3rem;
  }
  .searchbox img{
    height: 0.3rem;
    margin-right: 0.2rem;
  }
  .search{
    height: 0.3rem;
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    width: calc(100% - 0.6rem);
    background: none;
    float: right;
  }
</style>
