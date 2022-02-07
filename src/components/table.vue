
<template>    
    <div v-if="tableVis" class="table-head">
      <div class="table-head-item" @click="poalfavity" >
        Coin
      </div>
      <div class="table-head-item" @click="pononehash" >
        Pool hashrate
      </div>
        <div class="table-head-item" @click="pohashrate" >
        Network hashrate
      </div>
      <div class="table-head-item" @click="postaleprop" >
        Users
      </div>
      <div class="table-head-item" @click="pomindiff" >
        Expected time to block
      </div>
      <div class="table-head-item" @click="poblock" >
        Price
      </div>
  
    </div>
    <img  class="preloder-img" src="../assets/img/preloader1.gif" v-if="prelod1">
 <div class="table">  
    <div v-for="item in sumData" v-bind:key="item" class="table-body" >
      <div v-bind:id="item.port" class="table-row"  @click="chooseCoin" >
        <div class="table-coin" > 
          <img class="table-row-img"  v-bind:src="item.img">
          <span class="table-symbol">{{item.symbol}}</span>
        </div>
        <div class="table-data" >{{item.pool_hash_rate}}</div>
        <div class="table-data" >{{item.network_hashrate}}</div>
        <div class="table-data"  >{{item.countUsers}}</div>
        <div class="table-data" >{{item.expectedTime}}</div>
        <div class="table-data" >{{item.price}}</div>
        
        
      </div>  
    </div>
  </div>
  <Coin  v-if="coinVis" @close-coin="close" v-bind:coinInf="coinInf" v-bind:stratums="stratums" 
    v-bind:recentBlocks="recentBlocks" v-bind:arrHash="arrHash" v-bind:coinNum="coinNum" />
</template>

<script>

import Coin from './coin.vue'

export default {
  components: {
     Coin,
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
      //let url = 'http://p2p-ekb.xyz:' + coin.id + '/local_stats';        
      /* fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
        let tempObj = {
          attempts_to_share: data.attempts_to_share,
          block_value: data.block_value,
          }
        this.coinInf = Object.assign(dataCoin, tempObj);
        

      }).then(()=>{
        let url1 = 'http://p2p-ekb.xyz:' + coin.id + '/recent_blocks';        
        fetch(url1).then(res=>res.json()).then(data=>{
          data.forEach(item=>{
            let now = new Date();
            let ts = new Date(item.ts*1000)
            let when = new Date(now - ts); 
            if (when.getUTCHours()== '0') item.when = when.getUTCMinutes() + ' minutes ago';
              else item.when = when.getUTCHours() + ' hours ago';
       
            item.ts =  ts.toString()
          })  
         if (data.length==0)  this.recentBlocks = [{ts:"no data"}];else  
          this.recentBlocks = data;
          console.log(data)
          
        });  
      }).then(()=>{
        let url2 = 'http://p2p-ekb.xyz:' + coin.id + '/web/graph_data/pool_rates/last_day';        
        fetch(url2).then(res=>res.json()).then(data=>{
          this.arrHash = [];
         
          data.forEach(item=>{
           
            if (item[1].doa == undefined) item[1].doa=0;
            if (item[1].orphan == undefined) item[1].orphan=0;
            this.arrHash.push([parseFloat(item[0])*1000, item[1].good + item[1].doa + item[1].doa])
          
          })
          console.log('=>',this.arrHash[299]);
          this.coinVis =true;
         });
      }).then(()=>{
          //Проверка состояния страты через прокси--------------------------------------------------
          console.log(servers);
          servers.forEach(item=>{
            item = item.slice(0, -1)
            item = item.slice(7);
            
            fetch('/check_stratum_status',{  
              method:'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
              body: JSON.stringify({stratum:item, coin: coin.id})
            }).then(resp => resp.text())
            .then(data => {
              console.log(data) 
              if (data!==null) this.stratums.push(JSON.parse(data))
              console.log(this.stratums) 


            }).catch((error) => console.log(error))
          })
        //--------------------------------------------------------------------------------------------
      })*/
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
  .table{
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    width: 60vw;


    
  }
  
  .table-row{
    display: flex;
    flex-direction: row;
    border: 1px solid white;
    border-bottom: 1px solid #31708f;
    justify-content: space-between;
    padding-top:5px;
    padding-bottom:5px;
    
  }
  .table-head{
    position:relative;
    display: flex;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    height:max-content;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    border-radius: 10px;
    width: 60vw;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color:rgb(154, 207, 234);
    margin-bottom: 0;
  }
  .preloder-img{
    margin-left: auto;
    margin-top: 30vh;
    height: 100px;
    width: 100px;
   
}

  .table-head-item{
    display: flex;
    width: 19%; 
    color: #31708f;
    font-size:large; 
    align-items: center;
    justify-content:center;
    font-weight: bolder; 
  }
   .table-head-item2{
    display: flex;
    width: 16%; 
    color: #31708f;
    font-size:1em;
    height: 50px; 
    align-items: center;
    justify-content:center;
    font-weight: bolder; 
  } 

  .table-head-item:hover{
   cursor: pointer; 
   color: red;  
  } 
  .table-row{
      display: flex;
      height: max-content;
      
  }
  .table-row:hover{
    font-weight:bolder;
    
    color: rgb(253, 1, 1);
    
      
  }
  .table-coin{
    display: flex; 
    flex-direction: row;
    width: 15%;
    justify-content: start;
    align-items:center ;
    overflow-wrap: break-word;
    word-wrap: normal;
    word-break: break-all;
  }
  .table-symbol{
    display: flex;
    justify-content:start;
  }
   .table-data{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center ;
    width: 14%;
  }

  .table-row-img{
    width: 25px;
    display: flex;
    align-self: center;
    margin-right: 15%;
    margin-left: 10%;
    z-index: 0;
        
  }
  .table-row>p{
    display: flex;
    flex-direction: row;
    justify-content:center;
    width: 25%;
    align-items: center;
    height: 50px;
    font-size:larger;
    color: black;
  }
  @media screen and (max-width: 760px) {
  
    .table{  
      width: 98vw;
    
     
      
    }
    .table-head{
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom:2px solid  #31708f;
      width: 100vw;
      height: max-content;
      margin-top: 0px;
      background-color:white;
  
    }
    .table-head-item{
      font-size:3.2vw;
   
    }
    .table-row{
      font-size:3.2vw;
    }

    .table-coin{
      
      font-size:smaller;
    }
    .table-row:hover{
   
      font-weight:unset;
      color: rgb(253, 1, 1);
    
      
  }

  }

</style>
