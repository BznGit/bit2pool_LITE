
<template> 
  
  <table>
    
    <tr  class="table-head">
        <th class="table-td-none">Icon</th>
        <th>Coin</th>
        <th>Pool hashrate</th>
        <th>Network hashrate</th>
        <th class="table-td-none">Рercentage of pool in the network</th>
        <th>Users</th>
        <th class="table-td-none">Expected time to block</th>
        <th>Price</th>
    </tr><img  class="preloder-img" src="../assets/img/preloader1.gif" v-if="prelod1"> 
    <tr v-for="item in sumData" v-bind:key="item" class="table-body" v-bind:id="item.port"  @click="chooseCoin">
      <td class="table-td-none"> 
        <img class="table-row-img"  v-bind:src="item.img">
      </td>
      <td >{{item.symbol}}</td>   
      <td >{{item.pool_hash_rate}}</td>
      <td >{{item.network_hashrate}}</td>
      <td class="table-td-none">
        <k-progress status="success" type="line" :percent="item.percentage" ></k-progress>
      </td>
      <td class="table-td-users">{{item.countUsers}}</td>
      <td class="table-td-none">{{item.expectedTime}}</td>
      <td >{{item.price}}</td>     
     </tr>  
  </table> 
</template>

<script>

import  KProgress from './kprogress.vue'
export default {
  components: { 
     KProgress
  },

  data: function(){
    return{
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
    margin-left: 47vw;
    margin-top: 32vh;
    height: 70px;
    width: 70px;
   
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

  .table-td-users{
    padding-left: 20px;
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
   .preloder-img{
    margin-left: 47vw;
    margin-top: 32vh;
    height: 50px;
    width: 50px;
   
  }
   .table-td-none{
    display: none;
  }

  }

</style>
