<template>
  <Header />
  <div class="home">
      <MainHome />
  </div>
</template>

<script>
  import MainHome from "@/components/MainHome.vue"
  import Header from "@/components/Header.vue"
  export default{
    components:{
      MainHome,
      Header
    }
  }
</script>
