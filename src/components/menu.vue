<template>
  <div @click="closeMunu" class="fon"></div>
  <div class="menu">
    <h3>Add</h3>
    <h3>About</h3>
  </div>
   
</template>

<script>
export default {
  data: function(){
    return{
       greeting:'goodbye'
        
    }
  },
  methods:{
    closeMunu(){
      this.$emit('closeMenu');
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu{
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 50px;
    right: 0px;
    width:200px;
    border: 2px solid rgb(193, 204, 209);
    border-top: 0;
    color: #31708f;
    background-color:rgb(253, 253, 253);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 5;
  }
  .menu>h3{
    padding-top:10px;
    padding-bottom:10px;
  }
.menu>h3:hover{
    color: white;
    background-color: rgb(154, 207, 234);
    cursor: pointer;
}
.fon{
  display: flex;
  position: fixed;
  top: 50px;
  right: 0px;
  height: 100%;
  width: 100%;
  background-color: grey;
  opacity: 0.5;
  z-index: 4;
}
</style>
