<template>
  <main>
      
       <div class="img_home">
                
                <div class="title">
                    <h3 class ="ms-1">¡Observe your accounts easily and quickly! </h3>
                </div>

                <nav>
                    
                    <div class="content_nav">
                        <div class="content_nav_title ">
                            <h3>Select where you want to redirect <i class="fas fa-angle-double-right ms-3"></i> </h3>
                        </div>  
                        <div class ="nav_link">
                            <router-link to="/Home" ><i class="fas fa-home active"></i> Home</router-link>
                        </div>    

                        <div class ="nav_link">
                             <router-link to="/Account"><i class="fas fa-money-check-alt"></i> Accounts</router-link>
                        </div>

                        <div class ="nav_link">
                             <router-link to="/Card"><i class="far fa-credit-card"></i> Cards</router-link>
                        </div>  
                    </div>
                </nav>


                <footer>
                    <div class="content_footer">
                        <h3>All rights reserved - 2021 - By Agustín Estrada</h3>
                        <input type="submit" @click="name">
                    </div>
                </footer>
            </div>

  </main>
</template>

<script>
import axios from 'axios'
export default {
   methods: {
       name() {
           axios.get('/api/clients/current',{headers:{'accept':'application/xml'}})
           .then(response =>
           console.log(response.data))
       }
   },
}
</script>

<style scoped>
*{
    margin:0;
}
    main{
        min-height: 80vh;
        max-width: 100vw;
        background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42))
    }

    .homeContainer{
        min-height: 100%;
        opacity: .2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
        z-index: 5;
        background-color:rgb(25, 25, 25,0.2);
    }

    

    .img_home{
    margin:0px;
    padding: 10px;
    height: 90vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 5;


}


    .title{
        width: 65%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: white;
        z-index: 20;
        position: relative;
        padding: 10px;
        background-color: rgb(25,25,25);
        border: 3px solid rgb(46,204,113);
        border-radius: 10px;
        letter-spacing: 2px;
    }

    nav{
        height: 40%;
        min-width: 30vw;
        border-radius: 20px;
        background-color: rgb(25,25,25);
        z-index: 20;
    }

    .content_nav_title h3{
        color: white;
    }
    .content_nav{
        height: 100%;
        min-width: 60vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        border-radius: 20px;
        border:3px solid rgb(46,204,113);

    }

    .nav_link a{
        font-size: 1.2rem;
        font-weight: initial;
        text-decoration: none;
        color: white;
        border-radius: 20px;
        background-color: black;
        border: 1px solid rgb(52,152,219);
    }
    .nav_link a:hover{
        font-size: 1.5rem;
        /* color:red; */
    }
    .active{
        color:red;
    }
    .nav_link {
        max-height: 10vh;
        width: 10vw;
        display: flex;
        align-items: center;
        justify-content: center;
         box-shadow: none!important;
        
    }
    footer{
        height: 5%;
        width: 100%;
        z-index: 30;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        color: rgb(46,204,113);
        align-self: flex-end;
    }

    

</style>