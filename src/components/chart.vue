<template>
    <div class="select-period">
        <div class="select-period-box">
           <img class="select-period-img-left" src="../assets/img/left2.png" @click="left"> 
        </div>
        <div class="select-period-text">{{arrPeriod[period]}}</div>
        <div class="select-period-box">
           <img class="select-period-img-right" src="../assets/img/right2.png" @click="right"> 
        </div>
        
    </div>
    <highcharts  v-if="showChart" class="stock" :constructor-type="chart" :options="stockOptions"></highcharts>
    
</template>
<script>
export default {
    data() {
        return {
            hashData:null,
            showChart: true,
            period: 1,
            arrPeriod:['Hour', 'Day', 'Week', 'Month', 'Year'],
            

           stockOptions: {
 
                chart: { renderTo: 'graph',  },
                credits: { enabled: false },
                exporting: { enabled: false },
                
                title: { text: '' },
                rangeSelector: {
                    selected: 5,
                    enabled: true,
                },
                xAxis: {
                    type: 'datetime',
                    maxZoom: 24*3600,
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    title: {
                        text: 'Hashrate',
                        style:{
                            color: '#31708f',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }
                    },
                    min: 0,
                },
                tooltip: {
                    shared: true
                },
                legend: {
                    enabled: true,
                    borderWidth: 0
                },
                plotOptions: {
                    areaspline: {
                        fillColor: '#ace',
                        marker: { enabled: false },
                        lineWidth: 1,
                        shadow: false,
                        states: {
                            hover: { lineWidth: 1 }
                        },
                        threshold: null
                },
                spline: {
                    marker: { enabled: false },
                    lineWidth: 1,
                    shadow: true,
                    states: {
                        hover: { lineWidth: 1 }
                    },
                    threshold: null
                },
                },
                series: [{
                    type: 'areaspline',
                    name: 'Hashrate',
                    data: this.hashData,
                    lineWidth: 2,
                    marker: {
                        enabled: false
                    },
                }]
               
            },
        }
    },
    created(){
        
        this.stockOptions.series[0].data=this.arrHash;
        console.log(this.coinNum)
    },
    methods:{
        right(){   
            (this.period==4)? this.period=0: this.period++;
            this.periodQuery(this.period)

        },
        left(){   
            (this.period==0)? this.period=4: this.period--;
            this.periodQuery(this.period)
        },

        periodQuery(period){
            let url = 'http://p2p-ekb.xyz:' + this.coinNum + '/web/graph_data/pool_rates/last_'+this.arrPeriod[period].toLowerCase(); 
            this.showChart=false;     
            fetch(url).then(res=>res.json()).then(data=>{
                this.hashData = [];
               
                console.log("ishod 0", data[0][0])
                console.log("ishod 3", data[data.length-1][0])
                data.forEach(item=>{
                    if (item[1].doa == undefined) item[1].doa=0;
                    if (item[1].orphan == undefined) item[1].orphan=0;
                    this.hashData.push([parseFloat(item[0])*1000, parseFloat(item[1].good) + parseFloat(item[1].doa) + parseFloat(item[1].doa)])
                   
                    this.stockOptions.series[0].data=this.hashData;
                    this.showChart=true; 
                    
                })                
            })

        },
          
           
        
    },
    props:['coinNum','arrHash'],
} 
</script>
<style scoped>
.stock {
  width: 95%;
  height: 100%;
  margin: 0 auto
}
.select-period{
    display:flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    
}

.select-period-box{
   display: block;
   width: 45%;
   height: 50px;
   
}
.select-period-img-right{
    display: block;
    margin-left: 10px;
    width: 18px;
}
.select-period-img-left{
    display: block;
    margin-right: 10px;
    margin-left: auto;
    width: 18px;
}
.select-period-img-left:hover{
   
    cursor: pointer;
    transform: scale(1.2);
  }
  .select-period-img-left:active{
   
    cursor: pointer;
    transform: scale(1.0);
  }
  .select-period-img-right:hover{
   
    cursor: pointer;
    transform: scale(1.2);
  }
   .select-period-img-right:active{
   
    cursor: pointer;
    transform: scale(1.0);
  }
  .select-period-text{
     justify-content: center;
     align-content: center;
     align-items: center;
      width: 80px;
      justify-content: center;
      font-size: 26px;
      font-weight: bolder;
      color: #31708f;
  
  }

  @media screen and (max-width: 760px) {
  .select-period-img-left:active{
      background-color: rgb(154, 207, 234);;
  }
 .select-period-img-right:active{
      background-color: rgb(154, 207, 234);;
  }
  .select-period-img-left:hover{
   
    cursor: pointer;
    transform: scale(1);
  }
  .select-period-img-right:hover{
   
    cursor: pointer;
    transform: scale(1);
  }

  }
</style>
