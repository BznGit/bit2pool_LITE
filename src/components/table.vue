
<template> 
<table>
     <tr v-if="tableVis" class="table-head">
        <th  @click="poalfavity" >
       Icon
      </th>
      <th  @click="poalfavity" >
        Coin
      </th>
      <th  @click="pononehash" >
        Pool hashrate
      </th>
        <th  @click="pohashrate" >
        Network hashrate
      </th>
      <th  @click="postaleprop" >
        Users
      </th>
      <th  @click="pomindiff" >
        Expected time to block
      </th>
      <th  @click="poblock" >
        Price
      </th>
       <th  @click="poblock" >
        Рercentage of pool in the network
      </th>
      
    </tr>
<img  class="preloder-img" src="../assets/img/preloader1.gif" v-if="prelod1">  
      <tr v-for="item in sumData" v-bind:key="item" class="table-body" v-bind:id="item.port"  @click="chooseCoin" >
      
      <td > 
           <img class="table-row-img"  v-bind:src="item.img">
        </td>
       <td>
           {{item.symbol}}
      </td>
         
        
        <td  >{{item.pool_hash_rate}}</td>
        <td >{{item.network_hashrate}}</td>
        <td   >{{item.countUsers}}</td>
        <td >{{item.expectedTime}}</td>
        <td  >{{item.price}}</td> 
         <td>
         <k-progress 
           status="success" 
           type="line"
           :percent="item.percentage" >
         </k-progress>
         </td>
     </tr>  
    </table>
    
     
  <Coin  v-if="coinVis" @close-coin="close" v-bind:coinInf="coinInf" v-bind:stratums="stratums" 
    v-bind:recentBlocks="recentBlocks" v-bind:arrHash="arrHash" v-bind:coinNum="coinNum" />
</template>

<script>

import Coin from './coin.vue'
import  KProgress from './kprogress.vue'
export default {
  components: {
     Coin,
     KProgress
  },

  data: function(){
    return{
      coinVis:false,
      coinInf:null,
      recentBlocks: null,
      arrTime: null,
      arrHash: null, 
      coinNum: null, 
      stratums: [],
    
    }
  },
  props:['sumData', 'prelod1', 'tableVis'],
  methods:{
    chooseCoin(e){
     let coin = e.target.parentNode;
     console.log(e.target.parentNode)
      if (coin.id=='') coin = coin.parentNode;
      console.log(coin.id)
      let dataCoin = this.sumData.find(item=>item.port == coin.id);
      let server = dataCoin.server; 
      console.log(dataCoin);
      this.coinNum=coin.id;
      console.log('=====',this.coinNum )
      location = 'http://'+server + coin.id + '/static';

    },
    close(){
      this.coinVis = false;
      this.stratums=[];
    }   
  },
  created(){ 
         
  },
}


</script>

<style scoped>

  table{
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 96%;
    box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(156 39 176 / 40%);
    border-spacing: 0;
    text-align: left;
   
    
  }
  th{
    padding: 10px;
  }
  tr{
    font-size: 1em;
    padding-left: 5px;
       
  }
  .table-head{
    height:min-content;
    background-color:rgb(154, 207, 234);
    border: 0px solid rgb(154, 207, 234);
    color: #31708f;
    font-size:1em;
    height: 50px; 
    font-weight: bolder;
    
   
  }
  .preloder-img{
    margin-left: 45vw;
    
    margin-top: 30vh;
    height: 100px;
    width: 100px;
   
}
td{
   padding-left: 10px;
    border-bottom: 1px solid #31708f;
}


  tr:hover{
   cursor: pointer; 
   color: red; 
   font-weight:bolder;
  } 
  .table-head:hover{
    cursor:default;
    color: #31708f;
    font-weight:normal;
  }

  @media screen and (max-width: 760px) {
  table{
    margin: 0;
    width: 100vw;

  }
  th{
    padding: 5px;
  }
    tr{
  
    padding-left: 1px;
       
  }

  }

</style>
