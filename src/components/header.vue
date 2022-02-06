<template>
  <div class="header">
      <div class="header-logotype">
        <img class="header-logotype-img" src="../assets/img/logo3.png">  
        <h3 @click="reload">p2p-spb.xyz</h3>
      </div>
      <div class="header-href">
        <a href="https://forum.bits.media/index.php?/topic/38977-btcdashvtcsibnvc-nody-p2pool-na-p2p-spbxyz/">
          <img class="header-href-img" src="https://forum.bits.media/bitcoin_forum.svg">
        </a>
        <a href="https://telegram.org/dl?tme=f4f9964d53579b65dc_3989336244067786002">
        
          <svg 
            width="35px"
            height="35px"
            viewBox="0 0 25 25"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve" 
            xmlns:serif="http://www.serif.com/"
            style="fill: rgb(49, 112, 143);fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421; ">
            <path id="telegram-5" d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,
            2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,
            0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,
            -0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,
            0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,
            -0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,
            -4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"/>
            </svg>
            </a>
            
      </div>
  </div>
   
</template>

<script>
export default {
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
    justify-content:center;
    align-content: center;
    width:100vw;
    height:50px;
    color: rgb(49, 112, 143);
    background-color:rgb(154, 207, 234)
  }

  .header-logotype{
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: max-content;
    margin-left: 0;
    margin-right: auto;
  }

  .header-logotype:hover{
    cursor: pointer;
  }
  .header-logotype-img{
  
    height: 50px;
    margin-right: 20px;
  }

  .header-href{
    display: flex;
    align-items: center;
    margin-right: 15px;
  
  }
  .header-href-img{
    margin-right: 10px;
    width: 140px;
  }
  a{

  }


  @media screen and (max-width: 760px) {

 .header-logotype{
    margin-left: 0px;
  height:50px;
  }


  .header-close-img{
    margin:auto;
    height: 40%;
  }

}     

</style>
