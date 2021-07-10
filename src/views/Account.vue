<template>
    <Header />
    <NavBar/>

      <MainAccount/>


</template>

<script>
  
import NavBar from "@/components/NavBar.vue"
import Header from "@/components/Header.vue"
import MainAccount from "@/components/MainAccount.vue"
  export default{
    components:{
      NavBar,
      MainAccount,
      Header
    },

  }


</script>


<style >
  
</style>

