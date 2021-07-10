<template>
  <nav>
      <div class="contentNav">

          <div class ="nav_link">
            
            <router-link to="/Home"><i class="fas fa-home"></i> Home</router-link>
          </div>    
          <div class ="nav_link">
            <router-link to="/Account"><i class="fas fa-money-check-alt"></i> Accounts</router-link>
          </div>  
          <div class ="nav_link">
            <router-link to="/Card"><i class="far fa-credit-card"></i> Cards</router-link>
          </div>  
          <div class ="nav_link">
            <router-link to="/Buy"><i class="fas fa-coins"></i> Buy</router-link>
          </div>  

      </div>
  </nav>
</template>

<script>
export default {

}
</script>


<style>
nav{
  height: 8vh;
}
  .contentNav{
    height: 100%;   
    background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42));
    justify-content: center;
    align-items: center;
    display: flex;
    border-bottom: 1px solid rgb(46,204,113);
  }

  .nav_link a{
        font-size: 1rem;
        font-weight: initial;
        text-decoration: none;
        color: white;
        border-radius: 20px;
        background-color: black;
        border: 1px solid rgb(52,152,219);

  }
  .nav_link{
    width: 35%; 
  }
</style>