<template>
  <Header />

    <div class="mainTransaction">
        <MainTransaction />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Header from "@/components/Header.vue"
import MainTransaction from "@/components/MainTransaction.vue"
export default {
    components:{
      NavBar,
      Header,
      MainTransaction,
    },
}
</script>

<style>

</style>