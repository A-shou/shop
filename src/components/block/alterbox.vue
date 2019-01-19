<template>
    <div class="alterbox" :class="{alterboxoff: !$store.state.alterShow}">
      <p class="alter">{{$store.state.alterText}}</p>
    </div>
</template>

<script>
    export default {
      name: "alterbox",
      data () {
          return {
            text: '提示内容'
          }
      }
    }
</script>

<style scoped>
  .alter{
    background: rgba(0,0,0,0.6);
    color: #fff;
    border-radius: 0.06rem;
    padding: 0.15rem 0.25rem;
    font-size: 0.28rem;
    line-height: 0.36rem;
  }
  .alterbox{
    position: fixed;
    z-index: 9999;
    top: 0.8rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: 0.6s;
  }
  .alterboxoff{
    transform: translateY(-2rem);
    opacity: 0;
  }
</style>
