<template>
  <div class="header">

      <div class="head-name">
        <h3  @click="reload" style="margin-right:3px">P2P-SPB</h3>
        <h3 class="head-name-h3"> - p2pool nodes for many coins</h3>
      </div>
        <div class="header-href">
          <a href="https://forum.bits.media/index.php?/topic/38977-btcdashvtcsibnvc-nody-p2pool-na-p2p-spbxyz/">
            <img class="bits-full" src="https://forum.bits.media/bitcoin_forum.svg">
            <svg class="bits-short" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Слой_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 997.273 1153.818" enable-background="new 0 0 997.273 1153.818" xml:space="preserve">
                <g>
                    <rect x="0" y="0" fill="#FFFFFF" width="40" height="40"/>
                    <g id="XMLID_147_">
                        <g id="XMLID_21_">
                            <path id="XMLID_146_" fill="#F59C21" d="M504.744,511.018c24.55-0.947,50.658-6.604,69.517-16.988     c18.879-10.38,29.57-26.728,28.955-51.272c-0.645-24.541-16.988-45.3-44.669-53.803c-27.692-8.495-46.238-9.124-67.329-9.437     c-21.075-0.307-42.47,1.578-42.47,1.578v129.922C448.748,511.018,480.209,511.965,504.744,511.018z"/>
                            <path id="XMLID_145_" fill="#F59C21" d="M598.8,595.022c-12.572-6.302-40.579-14.786-73.917-16.993     c-33.352-2.204-76.129,0-76.129,0v144.39c0,0,44.669,0.953,74.566-1.251c29.87-2.202,60.706-9.749,76.121-18.253     c15.406-8.493,33.972-21.706,33.972-54.731C633.411,615.145,611.387,601.313,598.8,595.022z"/>
                            <path id="XMLID_57_" fill="#F59C21" d="M995.408,76.9c-323.461-95.504-667.629-95.504-991.091,0v518.826v35.331     c0,217.169,190.477,416.697,495.545,519.091h0.002c305.067-102.394,495.545-301.922,495.545-519.091v-35.331V76.9H995.408z      M713.639,761.118c-40.595,28.315-84.002,33.357-103.194,35.863c-9.47,1.246-25.694,2.559-43.092,3.577v109.366h-67.327V802.328     c-12.577,0-30.595,0-51.272,0v107.596h-67.324V802.328c-66.625,0-132.437,0-132.437,0l13.837-80.862c0,0,26.737,0,40.263,0     c13.535,0,19.186-1.255,24.848-6.599c5.66-5.355,6.92-13.526,6.92-20.144c0-6.604,0-261.106,0-278.565     c0-17.45-1.418-22.173-9.442-31.134c-8.022-8.98-26.89-10.158-37.516-10.158c-10.615,0-40.222,0-40.222,0l1.306-69.902     c0,0,63.711,0,132.438,0V197.062h67.318v107.903c18.704,0,36.25,0,51.272,0V197.062h67.327v109.197     c50.19,3.112,87.553,12.675,120.164,36.771c42.163,31.145,39.95,85.25,39.007,98.15c-0.937,12.9-6.599,37.757-17.935,53.787     c-11.313,16.051-38.998,32.097-38.998,32.097s32.71,6.917,55.687,24.223c22.948,17.304,39.956,47.814,38.989,92.486     C763.333,688.447,754.215,732.808,713.639,761.118z"/>
                        </g>
                        <path id="XMLID_20_" opacity="0.3" fill="#FFFFFF" d="M475.224,6.155c49.453,6.87,515.795,87.211,516.81,672.464    c2.032-15.751,3.374-31.59,3.374-47.563v-35.33V76.899C825.714,26.796,650.336,3.688,475.224,6.155z"/>
                    </g>
                </g>
            </svg>
          </a>
          <a href="https://t.me/p2pspb">
            <svg 
              width="35px"
              height="35px"
              viewBox="0 0 25 25"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve" 
              xmlns:serif="http://www.serif.com/"
              style="fill: white;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421; ">
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
    flex-direction: row;
    width:100vw;
    height:50px;
    color: white;
    background-color:#008CBA;

  }

  .head-name{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-left: 16%;
    align-items: center;
    cursor: pointer;
  }
  .header-href{
    display: flex;
    width: 200px;
    align-items: center;
    margin-right: 15px;
    
  }
  .bits-full{
    margin-right: 10px;
    width: 140px;
    align-items: center;
     
  }
    .bits-short{
      display: none;
  }
  a{ 
      height: 35px;
  }
  
  @media screen and (max-width: 760px) {
    .header{
        width: 100vw;
    }
    .head-name-h3{
      display: none;
    }
    .header-href{
     
      width: 60px;
      align-items: center;
      margin-right: 15px;
    
    
    }
    .bits-full{
        display: none;
    }
    .bits-short{
        display: block;
    }
    .head-name{
   

    }


  
}     
</style>
