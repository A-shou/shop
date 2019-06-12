<template>
  <div v-if="show" class="zzbox">
    <div class="alert_box">
      <p class="alert_title">提示</p>
      <p class="alert_text">{{text}}</p>
      <div style="text-align: right;">
        <span class="alert_btn" @click="close()">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['text', 'show'],
      data () {
        return {

        }
      },
      methods: {
        close () {
          this.$emit('close')
        }
      }
    }
</script>

<style scoped>
  .zzbox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .alert_btn{
    color: #d6931d;
  }
  .alert_text{
    font-size: 0.28rem;
    line-height: 0.4rem;
    margin-bottom: 0.2rem;
  }
  .alert_title{
    text-align: center;
    font-size: 0.36rem;
    margin-bottom: 0.3rem;
  }
  .alert_box{
    padding: 0.3rem;
    background: #fff;
    border-radius: 0.1rem;
    width: 5rem;
  }
</style>
