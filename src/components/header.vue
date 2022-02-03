<template>
  <div class="header">
      <div class="header-logotype">
        <img class="header-logotype-img" src="../assets/img/logo2.png">  
        <h3 @click="reload">p2p-spb.xyz</h3>
      </div>
      <div id="srcIcon" @click="searchShow" class="search">
          <img class="header-search-img" src="../assets/img/left2.png">
      </div>
      <div id="srcInput" class="src"> 
         <h3 style="margin-right:5px">Coin:</h3>
         <input class="coinsearch" type="text"  placeholder="Search..." @input="searching">
        <div  @click="searchClose" class="search">
              <img class="header-search-img" src="../assets/img/right2.png">
        </div>
      </div>
      <div class="head-menu" @click="menuVis=!menuVis">
			<img class="head-menu-img" src="../assets/img/menu2.png">
    </div>
    <Menu @closeMenu="menuVis=!menuVis" v-if="menuVis"/>
  </div>
   
</template>

<script>
import Menu from './menu.vue'

export default {
  components: {
      Menu,
  },

  data: function(){
    return{
      greeting: 'hello',
      menuVis: false,
    }
  },
  methods:{
    reload(){
      location.reload();
    },
    searching(event){
      let src = event.target.value;
      this.$emit('search', src);
    },
    searchShow(){
      let srcIcon = document.getElementById("srcIcon")
      srcIcon.style.display="none"
       let srcInput = document.getElementById("srcInput")
      srcInput.style.display="flex"
    },
    searchClose(){
      let srcIcon = document.getElementById("srcIcon")
      srcIcon.style.display="flex"
       let srcInput = document.getElementById("srcInput")
      srcInput.style.display="none"
    }
  },
 
}
</script>

<style scoped>
  .header{
    display: flex;
    position: relative;
    justify-content: center;
    align-content: center;
    margin:0;
    padding: 0;
    width:100vw;
    height:50px;
    color: rgb(49, 112, 143);
    background-color:rgb(154, 207, 234)
  }

  .header-logotype{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 40px;
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
  }

  h1{
    padding-top: 4px;
  }
  .header-logotype:hover{
    cursor: pointer;
  }
  .header-logotype-img{
  
    height: 35px;
    margin-right: 20px;
  }
  .src{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-right: 0;
    margin-left: auto;
  }
  .coinsearch{
    display: flex;
    outline: 0;
    margin-bottom: auto;
    margin-top: auto;
    margin-right: 30px;
    margin-left: auto;
    background-color: white;
    height: 30px; 
    width: 90px;  
    border: 0;
    border-radius: 15px;
    font-size:18px;
  }
  .head-menu{
    
    display: none;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 40px;
    margin-right: 0;
    margin-left: 0px;
    padding: 0;
  }
  .head-menu:hover{
    background-color: rgb(113, 166, 190);
  }
  .head-menu:active{
    background-color: rgb(113, 166, 190);
  }
  .head-menu-img{
   display: flex;
   width: 5px;
   margin: auto;
   

  }
  .search{
    display: none;
  }

  @media screen and (max-width: 760px) {

 .header-logotype{
    margin-left: 10px;
    height: 80%;
  }

  .header-logotype-img{
  
    height: 25px;
    margin-right: 10px;
  }
  .src{
    display: none;
  }
 .search{
    display: flex;
    width: 40px;
    height: 50px;
    margin-right: 0px;
    margin-left: auto;

  }
  .search:active{
    background-color: rgb(113, 166, 190);
  }
  .header-search-img{
     margin:auto;
    height: 45%;
  }
  .header-close-img{
    margin:auto;
    height: 40%;
  }

}     

</style>
