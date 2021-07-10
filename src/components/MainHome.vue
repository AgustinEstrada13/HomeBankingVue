<template>
  <main>
      <div class="wrapper">
          <div class="info">
              <div class="contentInfo">
                  <div>
                      <h2>Observe your accounts easily and quickly</h2>
                  </div>
                  <div>
                      <h2>You can also buy cryptos</h2>
                  </div>    
              </div>
          </div>

          <div class="homeNav">
              <div class="contentHomeNav">
                    <div class="onlyRouter w-100 d-flex justify-content-center mb-2">
                        <h2 class="text-danger me-3"> Are you here</h2>
                        <router-link to="/Home" class="text-dark"><i class="fas fa-home text-dark"></i> Home</router-link>
                    </div>
                   

                    <div class="links">

                     <div class="titleNav"><h2 class="w-100 fs-1 text-white mt-4">Select where you want to go</h2></div>

                    <div class="iconNav w-100 mt-3 d-flex justify-content-center "> <i class="fas fa-arrow-down text-danger fs-1"></i> </div>
                      <div class="contentLinks w-100 d-flex justify-content-around align-items-center flex-wrap mt-4">
                          <div class="router ">
                              <router-link to="/Account"><i class="fas fa-money-check-alt"></i> Accounts</router-link>
                          </div>
                          <div class="router ">
                              <router-link to="/Card"><i class="far fa-credit-card"></i> Cards</router-link>
                          </div>
                          <div class="router ">
                               <router-link to="/Buy"><i class="fas fa-coins"></i>Buy</router-link>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </main>
</template>

<script scoped>
export default {
   methods: {

   },
}
</script>

<style scoped>
*{
    margin:0;
}
main{
    min-height: 90vh;
    width: 100vw;
    background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42))
}

.wrapper{
    min-height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.info{
    width: 100vw;
    min-height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
}

.contentInfo{
    height: 50%;
    width: 80%;
    background-color:rgb(25,25,25);
    border-radius: 20px;
    border: 2px inset #2ecc71;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: white;
    padding: 20px;
    letter-spacing: 2px;
}

.homeNav{
    min-height: 60vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contentHomeNav{
    min-height: 50vh;
    width: 80%;
    background-color: rgb(25,25,25);
    border-radius: 5rem;
    letter-spacing: 2px;
    padding: 20px;
}

.links{
    min-height: 40vh;
    width: 100%;
    border-radius: 40px;
    margin-top: 5px;
    border: 2px inset #2ecc71;

}

.contentLinks{
    height: 10vw;
    width: 10vw;
}

.router{
    background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42));
    min-width: 20vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid white
}

.router a{
    color: white;
    text-decoration: none;
}

.router :hover{
transform: scale(1.5);
}
</style>