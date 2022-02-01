<template>
    <div class="resent_blocks">
      <div class="header">
        <div class="header-back" @click="closeBlocks">
            <img class="header-back-img" src="../assets/img/back.png">  
        </div> 
          <div class="header-name">
              Resent blocks
          </div>
      </div>
      <div class="cion-close">
        <svg class="cion-close-img" @click="closeBlocks"  enable-background="new 0 0 32 32" height="32px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Cancel"><path clip-rule="evenodd" d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z" fill="#31708f" fill-rule="evenodd"/><path clip-rule="evenodd" d="M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z" fill="#31708f" fill-rule="evenodd"/></g></svg>
      </div>
      <h3>Resent bloсks</h3> 
      <table class="coin-table2">
        <thead>
          <th>When</th>
          <th>Date/Time</th>
          <th>Number</th>
          <th>Hash</th>
        </thead>
      </table>
      <div  id="blocks" class="scroll-table-body" >
        <table class="coin-table2">
          <tbody>
            <tr v-for="item in recentBlocks" v-bind:key="item">
              <td>{{item.when}}</td><td>{{item.ts}}</td><td>{{item.number}}</td><td>{{item.hash}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>

export default {
  


  data: function(){
    return{
         
    }
  },
  props:[ 'recentBlocks',],
  methods:{
    closeBlocks(){
      this.$emit('close-blocks');
    }
  }, 
}
</script>

<style scoped>
  .resent_blocks{
    display: block;
    position: absolute;
    top:15%;
    left:15%;
    width: 70%;
    height: 70%;
    background-color:#ffffff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 100;
    overflow: hidden;
 

  }
  .header{
    display: none;
  }
  .cion-close{
    display: flex;
    justify-content:flex-end;
    height: 30px;
   
 
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

   h3{
     color: #31708f;
     text-align: center;
      margin-left: 10px;
  }
  .coin-row2   h3{
    text-align: left;
    margin-left: 0px;
  }

  .scroll-table-body{
    margin-left: 2%;
    margin-right: 1%;
    height: 100%;
    overflow-y:auto;
    overflow-x:hidden;
    word-break: break-all;
  }

 
  .coin-table2{
    table-layout: fixed;
    text-align: left;
    vertical-align:bottom;
   
  }
  thead{
    
    height: 50px;
    text-align: left;
   
    
  }
  thead th:nth-child(1) {
  width: 5vw;
  padding-left:  1vw;
  }


  thead th:nth-child(2) {
    width: 10vw;
  }

  thead th:nth-child(3) {
    width: 5vw;
  }

  thead th:nth-child(4) {
    width: 30.5vw;
    word-break: break-all;
  }
 .coin-table2 tr{
    border-bottom: 1px solid rgb(154, 207, 234);
    height: 50px;
    padding: 5px;
    
     
  }
    tbody td:nth-child(1) {
    width: 10%;
     border-bottom: 1px solid rgb(154, 207, 234);
  }

  tbody td:nth-child(2) {
    width: 20%;
    border-bottom: 1px solid rgb(154, 207, 234);
  }

  tbody td:nth-child(3) {
    width: 10%;
    border-bottom: 1px solid rgb(154, 207, 234);
  }

  tbody td:nth-child(4) {
    width: 60%;
    border-bottom: 1px solid rgb(154, 207, 234);
  }
  
 
  @media screen and (max-width: 760px) {
  .resent_blocks{
    top:0vh;
    left:0vw;
    width: 100%;
    height:100%;
    border-radius: 0px;
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
  .header-name{
    margin: auto;
    margin-left: 20vw;
    font-weight: bolder;
    font-size: 20px;
  }
  h3{
    display: none;
  }

  }


 

</style>
