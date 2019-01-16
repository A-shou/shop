<template>
  <div class="loadingbox">
    <div class="loading">
      <div class="loadcenter" :style="{transform:'rotateZ('+round+'deg)'}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div v-if="loadhtml" class="htmlbox">
        <p class="loadjdt" v-html="loadhtml"></p>
        <p class="loadtext">{{loadtext}}<br/>请稍候...</p>
      </div>
      <p v-if="loadtext&&!loadhtml" class="loadtext">{{loadtext}}<br/>请稍候...</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:['time','loadtext','loadhtml'],
    data(){
      return{
        round:0
      }
    },
    mounted(){
      if(this.time){
        var otime = 0
        var othis = this
        var onub = 0
        function timer(){
          setTimeout(function(){
            otime++
            onub = onub+1 > 8?0:onub+1
            othis.round = onub*-45
            if(otime <= othis.time*10){
              timer()
            }else{
              othis.$emit('closeload')
            }
          },100)
        }
        timer();
      }else{
        var othis = this
        var onub = 0
        function timer(){
          setTimeout(function(){
            onub = onub+1 > 8?0:onub+1
            othis.round = onub*-45
            timer();
          },100)
        }
        timer();
      }
    }
  }
</script>

<style scoped>
  .htmlbox{
    padding-top: 73px;
  }
  .loadjdt{
    height: 4px;
    border:1px solid #eee;
    width: 80px;
    margin-left: 20px;
    padding: 0;
  }
  .htmlbox .loadtext{
    line-height: 16px;
  }
  .loadtext{
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    width: 100%;
    color: #fff;
    bottom: 6px;
    padding: 0 10px;
    box-sizing: border-box;
    left: 0;
  }
  .loadingbox{
    z-index: 9999;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .loading{
    position: absolute;
    width: 121px;
    height: 121px;
    background: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
  }
  .loadcenter{
    width: 2px;
    height: 2px;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .loadcenter span{
    display: block;
    position: absolute;
    top: -1px;
    left: 10px;
    width: 15px;
    height: 4px;
    background: #fff;
    border-radius: 2px;
    transform-origin:-9px 2px;
  }
  .loadcenter span:nth-child(1){
    transform: rotateZ(45deg);
    opacity: 1;
  }
  .loadcenter span:nth-child(2){
    transform: rotateZ(90deg);
    opacity: 0.9;
  }
  .loadcenter span:nth-child(3){
    transform: rotateZ(135deg);
    opacity: 0.8;
  }
  .loadcenter span:nth-child(4){
    transform: rotateZ(180deg);
    opacity: 0.7;
  }
  .loadcenter span:nth-child(5){
    transform: rotateZ(225deg);
    opacity: 0.6;
  }
  .loadcenter span:nth-child(6){
    transform: rotateZ(270deg);
    opacity: 0.5;
  }
  .loadcenter span:nth-child(7){
    transform: rotateZ(315deg);
    opacity: 0.4;
  }
  .loadcenter span:nth-child(8){
    transform: rotateZ(360deg);
    opacity: 0.3;
  }
  @keyframes loading{
    0%{
      transform: rotateZ(0deg);
    }
    12.5%{
      transform: rotateZ(-45deg);
    }
    25%{
      transform: rotateZ(-90deg);
    }
    37.5%{
      transform: rotateZ(-135deg);
    }
    50%{
      transform: rotateZ(-180deg);
    }
    62.5%{
      transform: rotateZ(-225deg);
    }
    75%{
      transform: rotateZ(-270deg);
    }
    87.5%{
      transform: rotateZ(-315deg);
    }
    100%{
      transform: rotateZ(-360deg);
    }
  }
</style>
