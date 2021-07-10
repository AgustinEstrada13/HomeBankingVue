<template>

  <router-view/>
</template>

<script>
  import Header from "@/components/Header.vue"
  import {useRouter, useRoute} from 'vue-router'
  export default{
    components:{
      Header,
    },

    mounted(){
      const router = useRouter();
      const route = useRoute();

      this.$store.commit('setLog', JSON.parse(localStorage.getItem("login"))); //RECUPERAR LOG DEL LOCALSTORAGE

      if(this.$store.state.log !="ok"){
        router.replace('/');
      }
    }
  }
</script>


<style>

*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
