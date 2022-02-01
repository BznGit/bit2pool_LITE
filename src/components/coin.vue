<template>
  <div class="coin">
     
      <div class="header">
        <div class="header-back" @click="closecoin" >
            <img class="header-back-img" src="../assets/img/back.png">  
        </div> 
        <div class="coin-name1">
          <img class="coin-img"  v-bind:src="coinInf.img">
          {{coinInf.symbol}}
        </div>
      </div>
      <div class="cion-close">
      <svg class="cion-close-img" @click="closecoin"  enable-background="new 0 0 32 32" height="32px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Cancel"><path clip-rule="evenodd" d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z" fill="#31708f" fill-rule="evenodd"/><path clip-rule="evenodd" d="M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z" fill="#31708f" fill-rule="evenodd"/></g></svg>
      </div>
      <div class="coin-name">
        <img class="coin-img"  v-bind:src="coinInf.img">
        {{coinInf.symbol}}
      </div>
      <div class="scroll"> 
        <h3>Status</h3>  
        <div class="coin-row">
          <div class="coin-colum1">
            <table class="coin-table">
              <tr>
                <td>Pool hashrate</td><td>{{coinInf.pool_hash_rate}}</td>
              </tr>
              <tr>
                <td>Network hashrate</td><td>{{coinInf.network_hashrate}}</td>
              </tr>
              <tr>
                <td>Current block value</td><td>{{coinInf.block_value}}</td>
              </tr>
              <tr>
                <td>Network block difficulty</td><td>{{coinInf.network_block_difficulty}}</td>
              </tr>
              <tr>
                <td>Share difficulty (pool minimum)</td><td>{{coinInf.min_difficulty}}</td>
              </tr>
              <tr>
                <td>Expected time to block (pool)</td><td>{{coinInf.expectedTime}}</td>
              </tr>
              <div class="resent-bloks" @click="openBlocks">Resent blocks...
              
              </div>
              <Blocks v-if="bloсkVis" v-bind:recentBlocks="recentBlocks" @close-blocks="closeblocks"/> 
              
            </table>
          </div>
          <div class="coin-colum2">
            <Chart v-bind:arrTime="arrTime" v-bind:arrHash="arrHash" v-bind:coinNum="coinNum"/>   
          </div>
        </div>
        <div  class="coin-row2">
          <Stratum v-bind:stratums="stratums"/> 
        </div>
     </div>
  </div>
</template>

<script>
import Chart from './chart.vue' 
import Blocks from './blocks.vue'
import Stratum from './stratum.vue'
export default {
  
  components: {
    Chart,
    Blocks,
    Stratum,
  },

  data: function(){
    return{
      textTableHeads:null,
      bloсkVis: false,
      
        
    }
  },
  props:['stratums','coinInf', 'recentBlocks', 'arrTime', 'arrHash', 'coinNum'],
  methods:{
    openBlocks(){
      this.bloсkVis=true;

     window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    closecoin(){
      this.$emit('close-coin');
      
    },
    closeblocks(){
      this.bloсkVis = false;
      
    }
  },
    created(){
    this.graphLastHour = this.lastHour;
    
  },
  
}
</script>

<style scoped>
  .coin{
    display: flex;
    flex-direction: column;
    position: absolute;
    top:7vh;
    left:10vw;
    width: 80vw;
    height: 90vh;
    background-color:#ffffff;
    
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
  }
  .scroll{
   
    overflow-y: auto;
    height: 100%;
    margin: 10px;
  }
  .header{
    display: none;
  }
  .cion-close{
    display: flex;
    justify-content:flex-end;
    height: 4%;
 
  }
  .cion-close-img{
    display:flex;
    width: 25px;
    margin-right: 7px;
    margin-top: 3px;
  }

  .cion-close-img:hover{
    cursor: pointer;
    transform: scale(1.2);
  }
  .coin-name{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:30px;
    font-weight: bolder;
    color: rgb(49, 112, 143);

  }
  .coin-img{
    width: 35px;
    margin-right: 2%;
  }
   h3{
    text-align: left;
    margin-left: 10px;
    color: rgb(49, 112, 143);
  }
  .coin-row2   h3{
    display: flex;
    height: 100%;
    text-align: left;
    margin-left: 0px;
   
  }
  .coin-row{
    display: flex;
    flex-direction: row;
    height: 48%;
   height: max-content;
 
  }

 .coin-colum1{
    display: flex;
    width: 30%;
    
     overflow-y: auto
  }
  .coin-colum2{
    display: flex;
    flex-direction: column;
    width: 70%;
   overflow: auto;
  }

  .coin-table{
    display: block;
    margin-left: 10px;
    width: 100%;
    overflow-y:hidden;
  }
  .coin-table tr{
    display: block;
    border-bottom: 1px solid rgb(154, 207, 234);
    height: 38px;
    padding: 5px;
        
  }
  .coin-table td{
    width: 400px;
    height: 38px;
    text-align:left;
    vertical-align: bottom;
    margin-bottom: 5px;
  }
  .coin-table td+td{
    width: 400px;
    height: 40px;
    text-align: right;
    vertical-align: bottom;
    margin-bottom: 2px;
  } 
 .resent-bloks{
   display: inline-flex;
   margin-left: -6%;

   width: 88%;
   flex-direction: row;
   justify-content: flex-start;
  align-items:flex-start;
   margin-top:2vh;
   height: 40px;
   text-align: left;
     text-decoration: underline;  
    color: rgb(49, 112, 143);
    
 }
 .resent-bloks:hover{
    cursor: pointer;
 font-weight: bolder;
  
  
 }
 .resent-bloks:hover>img{
    cursor: pointer;
   padding-left: 3px;
   text-decoration: underline;  
  
 }
 
  .select-period-img-right{
    display:  inline-block;
    margin-left: 10px;
    width: 15px;
  }

  @media screen and (max-width: 760px) {
    .coin{
      top:0vh;
      left:0vw;
      width: 100vw;
      height: max-content;
      border-radius: 0px;
      box-shadow:unset;
  
    }

    .coin-name1{
      display: flex;
      margin-left: auto;
      margin-right: auto;
      align-items: center;
      font-size:20px;
      font-weight: bolder;
      color: rgb(49, 112, 143);

    }
    .coin-name{
      display: none;
    }

    .coin-row{
  
      display: flex;
      flex-direction: column;
      height: 48%;
    }
    .coin-row2{
    
      flex-direction: column;
      
    }

    .coin-colum1{
    
           width: 95%;
      margin-left: auto;
      margin-right: auto;
    }
    .coin-colum2{
      margin-left: 0;
      width: 100%;
      height: 400px
    }
  .header{
    display: flex;
    position: relative;
    align-content: center;
    margin:0;
    padding: 0;
    width:100vw;
    height:50px;
    color: rgb(49, 112, 143);
    background-color:rgb(154, 207, 234)
  }
  .header-back{
    display: flex;
    justify-self: start;
    width: 50px;
  }
  .header-back-img{
    display: block;
    margin: auto;
    
    width: 20px;
  }

  .header-back-img:active{
    background-color: rgb(113, 166, 190);
  }
  .cion-close{
    display: none;
  }

  }

 

</style>
