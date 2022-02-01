<template>
    <div class="stratums">
      <h3>Stratums</h3> 
    <div class="stratums-item" v-for="item in stratums" v-bind:key="item" >

      {{item.name}}
      <div class="on-offline" v-bind:style="{'background-color': item.status}"></div>
    </div>

    </div>
</template>

<script>


  export default {
    data: function(){
      return{
          stratumstat:"red",  
      }
    },
    props:['stratums'],
    methods:{
    },
    mounted(){
      console.log(this.stratums)
      
    },
    computed:{
  
      
      //},npm rimserve
    }
    
    
  }
</script>

<style scoped>
  .stratums{
    display: flex;
    flex-direction: column;
   
   
  }
  .stratums-item{
    display: flex; 
    width: 97%;
    height: 18%;
    border-radius: 15px;
    border: 2px solid rgb(154, 207, 234);
    margin: auto;
    margin-top: 5px;
    padding: 2px;
    justify-content:space-between;
    
  
  }

  h3{
    color: #31708f;
    text-align: left;
    margin-left: 10px;
  }

.on-offline{
    display:flex;
    width: 24px;
    height: 24px;
    
    border-radius: 12px;
    background-color: red;
    margin: 3px;
  
}


 

  

 

</style>
