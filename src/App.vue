<template>
    <Header @search="searchingCoin"/>
    <div class="wallet">
      <input id="wltsrc" class="wallet-search" type="text" @input="changeWlt" placeholder="Wallet..." >
      <div class="wallet-ok" @click="searchWallet">
        <img class="wallet-ok-img"  v-if="buttonSrc" src="./assets/img/search.png"  >
        <img class="wallet-ok-img1" v-if="!buttonSrc"  src="./assets/img/close.png">
        <img class="wallet-ok-img2" v-if="preload2" src="./assets/img/preloader1.gif" >
      </div>
      
    </div>
    <Table v-bind:sumData="sumData" v-bind:tableVis="tableVis" v-bind:prelod1="prelod1"  @po-alfavity="poalfavity" @data="onData" />
</template>

<script>


import Header from './components/header.vue'
import Table from './components/table.vue'
import configCoins from './assets/config/configCoins.config';
import configServers from './assets/config/configServers.config';
import {formatHashrate} from './assets/libs/utils.js';
import {formatInt} from './assets/libs/utils.js';
import {formatSeconds} from './assets/libs/utils.js';
import {sad} from './assets/libs/utils.js';
console.log('Сумма:',sad(2,4))

export default {
  name: 'App',
  data(){
		return{
      tableVis:true,
			sumData:null,
      ishodSumData:null,
      prelod1:true,
      preload2: false,
      wallet:null,
      wltCahanged: false,
      buttonSrc: true,
      counter1:0,
      configServers:configServers,
		}
	},
  components: {
    Header,
    Table,
    
  },
  methods:{
    poalfavity(){  
       
      if (this.counter1==false){
        this.counter1=true;
        this.sumData.sort(function (a, b) {
          if (a.symbol > b.symbol) {
            return 1;
          }
          if (a.symbol< b.symbol) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        });
      }       
    },
  
    searchingCoin(src){   
			console.log(src)
      if (src== 0) this.sumData = this.ishodSumData;
   
      let arr = this.sumData.filter(function(item){
      let curr = item.symbol.toLowerCase();
      let bool = curr.includes(src.toLowerCase())
      console.log(bool)
      if (bool == true) return true;
     });
    
     this.sumData = arr;
   },
   searchWallet(){
      
    let wallet = document.getElementById('wltsrc');
    if (wallet.value==''){
      alert('Введите кошелек!');
      return;
    } 
    if (this.wallet==null || this.wltCahanged){  
        this.wallet = wallet.value;
        this.buttonSrc = false
        localStorage.setItem('wallet', wallet.value);
        this.tableVis=false;
        location.reload();
      }else{
        this.wallet = null;
        localStorage.removeItem('wallet')
        wallet.value = '';
        this.buttonSrc = true;
        this.tableVis=true;
        location.reload();
      }
    },
    changeWlt(e){
      
      let wltLength = e.target.value.length;
      if (wltLength!=0){
        this.buttonSrc=true;
        this.wltCahanged=true;
      } else{
          this.buttonSrc=false;
          location.reload();
          localStorage.removeItem('wallet')
      } 
     
               
    }
  },

  mounted(){
    console.log('new version!')
    let wllt = localStorage.getItem('wallet');
    console.log(wllt);
    if (wllt!==null){
      let wallet = document.getElementById('wltsrc');
      this.wallet = wllt;
      wallet.value = wllt;
      this.buttonSrc = false;
      this.prelod1=false;    
      this.tableVis=false;
      // поиск кошелька и воркеров----
      let rl = configServers[2] + '9338' + '/web/graph_data/miner_hash_rates/last_year';     
      fetch(rl).then(res=>res.json()).then(data=>{
             
        let i=0;
        data.forEach(item=>{ 
          let obj = item[1];
          for (let key in obj) if (key==this.wallet) i++;  
        });
        
        let workers=[];
        data.forEach(item=>{
          let obj = item[1];
          for (let key in obj){      
            let temp = this.wallet + '.'
            if (key.includes(temp)){
              let pos=key.indexOf('.');
              if (workers.includes(key.slice(pos+1))==false)  workers.push(key.slice(pos+1))
            }   
          }
        }) 
        if (workers.length !=0 )console.log('Воркеры: ' + workers); else
          {if (i!=0)  console.log ('У кошелька ' + this.wallet + ' нет воркеров'); 
          else console.log ('Кошелька '+ this.wallet + ' не существует');
        }               
      })
    }else{
      var rls = [];
      var rlsUsers = [];
      var rlsExpect = [];
      var coinIds = [];

     let noData = {
        pool_hash_rate: "no data",
        network_hashrate: "no data",
        pool_nonstale_hash_rate: "no data",
        pool_stale_prop: "no data",
        min_difficulty: "no data",
        network_block_difficulty: "no data",
        
      }
      // Формирования массивов запросов
      configCoins.forEach((function(item)
        {rls.push('http://'+item.server + item.port + '/global_stats')}));  
        
      configCoins.forEach((function(item)
        {rlsUsers.push('http://'+item.server + item.port + '/users')}));   
      
      configCoins.forEach((function(item)
        {rlsExpect.push('http://'+item.server + item.port + '/local_stats')}));
      
      configCoins.forEach((function(item)
        {coinIds.push(item.id)}));
       
      var allCoins = coinIds.toString();
      console.log("allCoins", allCoins)
      
      var tempArr =[];
      var tempArr1 =[];
      var tempArr2 =[];
      var tempArr3 =[];
      Promise.allSettled(rls.map(rl =>
      fetch(rl).then(resp => resp.json())))
      .then(global => {
        let i=0;
        global.forEach(elem => {
          if (elem.status=="fulfilled"){
            let obj = Object.assign(configCoins[i], elem.value);       
            tempArr.push(obj);
            i++;
          }else{
            let obj = Object.assign(configCoins[i], noData);
            tempArr.push(obj);
            i++; 
          }  
        })
      })
      .then(()=>{ Promise.allSettled(rlsUsers.map(rl =>
        fetch(rl).then(resp => resp.json())))
        .then(users => {
            let j = 0;
            users.forEach(item=>{     
              if (item.status=="fulfilled"){
                var  objCount ={countUsers: Object.keys(item.value).length};
                var obj1 = Object.assign(tempArr[j], objCount);
                tempArr1.push(obj1);
                j++;
              }else{
                objCount = {countUsers: "no data"}
                obj1 = Object.assign(tempArr[j], objCount);
                tempArr1.push(obj1);
                j++; 
              }
            })
          })
         })
        .then(()=> Promise.allSettled(rlsExpect.map(rl =>
          fetch(rl).then(resp => resp.json())))
          .then(expects => {
            let k = 0;
            console.log(expects)
            expects.forEach(item=>{  
                   
                  if (item.status=="fulfilled" && item.value != null){
                    let temp = item.value.attempts_to_block/tempArr1[k].pool_hash_rate;
                    var  objExpect ={expectedTime: temp};
                    var obj2 = Object.assign(tempArr1[k], objExpect);
                    tempArr2.push(obj2);
                    k++;
                  }else{
                    objExpect = {expectedTime: "no data"}
                    obj2 = Object.assign(tempArr1, objExpect);
                    tempArr2.push(obj2);
                    k++; 
                } 
            })       
            this.prelod1 = false;
          })
        )
        .then(()=>{
            fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + allCoins + ',0x&vs_currencies=usd').then(res=>res.json())
            .then(coinGecko =>{ 
              console.log('Gecko>>',coinGecko)       
              for(let m = 0; m<tempArr2.length; m++){
                var objPrice={};
                var obj3={};
            
                let idd = coinGecko[(tempArr2[m].id)]  ;
                console.log('idd>>',tempArr2[m].id)
                if (idd==undefined) objPrice = {price: 'none'}
                else objPrice = {price: coinGecko[(tempArr2[m].id)].usd}
                obj3 = Object.assign(tempArr2[m], objPrice);
                tempArr3.push(obj3);            
              
              }
              tempArr3.forEach(item=>{
                if (item.pool_nonstale_hash_rate=="no data") return
                item.pool_hash_rate = formatHashrate(item.pool_hash_rate)
                item.network_hashrate =formatHashrate(item.network_hashrate)
                item.expectedTime = formatSeconds(item.expectedTime)
                item.price=='none'? item.price = ''+item.price: item.price = '$ '+item.price
                item.min_difficulty =formatInt(item.min_difficulty)
                item.network_block_difficulty =formatInt(item.network_block_difficulty)             
              })  
              this.sumData = tempArr3;
              this.ishodSumData = tempArr3; 
            })
          })
    }
  }
} 

</script>

<style>
*{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  overflow-y:hidden;
  
}
.wallet{
  display: none;
  flex-direction: row;
  height: 100px; 
  
  
  justify-content: center;
  align-items: center;
}
.wallet-search{
  display: flex;
  width: 30vw;
  height: 40px;
  border: 2px solid rgb(154, 207, 234);
  border-right: 0px;
  border-radius: 25px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size:20px;
  outline: 0;
}
.wallet-ok{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;;
  height: 42px;
  width: 50px;
 
  color: rgb(49, 112, 143);
  border: 2px solid rgb(154, 207, 234);
  border-left: 0px;
  border-radius : 25px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  font-size:20px
}
.wallet-ok:hover{
  
  cursor: pointer;
  
}
.wallet-ok-img{
  margin-left: 0px;
  width: 24px;
}
.wallet-ok-img1{
  margin-left: 0px;
  width: 20px;
}
.wallet-ok-img2{
  margin-left: 0px;
  width: 30px;
}

@media screen and (max-width: 760px) {
 .wallet{
    height: max-content;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    margin-left: 0px;
 }
 .wallet-search{
   width: 100vw;
   border-radius: 0px;

  font-size:20px;
  outline: 0;
}
.wallet-ok{
  border-radius: 0px;
}

}


</style>
