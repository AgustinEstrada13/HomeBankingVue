<template>
  <div class="header">
    <div class="imgHeader">
      <i class="fas fa-piggy-bank"></i>
    </div>
      <div class="titleHeader">
        <h1>¡HOME BANKING!</h1>
      </div>
      
       
      <div class="userLoginHeader">
        
        <div class="btn-group mb-1 ">
          <h2 class="me-3 mt-3">{{this.nameUser}}</h2>
          <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><img src="@/assets/usuario-de-perfil.png" alt="profile" id="imgProfile" class="me-2">
          </button>
          
          <ul class="dropdown-menu bg-dark">
            <li class="bg-white"><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item logOut text-center" href="#"><router-link @click="alertOut()" to="/" ><i class="fas fa-power-off"></i> Log Out</router-link></a></li>
          </ul>
        </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios"
import swal from 'sweetalert';
export default {
     data(){
        return{
            nameUser:[],
            
            
        }
    },
    created(){
        axios.get("/api/clients/current")
        .then((res) =>{
            this.nameUser = res.data.firstName + " " + res.data.lastName;
            
        })
        
    },
    methods:{
      alertOut(){
        axios.post("/api/logout")
        .then(swal("Good bye " + this.nameUser + ", see you soon"));
        
        this.$store.commit("setLog","");
        localStorage.clear();
      }
      },
    

}
</script>

<style>

  .header{
    min-height: 10vh;
    max-width: 100vw;
    background: linear-gradient(to right, #b92b27, #1565c0);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid black;
    
  }

  .imgHeader, .titleHeader, .userLoginHeader{
    min-width: 25vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .header h1{
    color: white;
    text-align: initial;
    font-size: 2.9rem;
    letter-spacing: 2px;
    
  }
  
  .fa-piggy-bank{
    font-size: 5rem;
  }
  a {
    font-size: 1rem;
    font-weight: bold;
    color: #D7AF4D;
    text-decoration: none;
    padding: 10px;
  }

  a.router-link-exact-active {
    background-color: #D7AF4D;
    color: aliceblue;
    border-radius: 20px;
  }

  #imgLogo{
    height: 6rem;
  }
  #imgProfile{
    height: 3rem;
  }
  #logOut a a{
    color:black!important;
    text-decoration: none;
  }

  .btn-dark{
    border-radius: 25px!important;
  }

  @media only screen and (max-width: 375px) {
    .logo{
      width: 100%;
    }
    #imgLogo{
    height: 5rem;
    }
    .header h1{
      font-size: 1.7rem;
    }
    #imgProfile{
      height: 2rem;
    }
    .btn-group{
      height: 3rem;
      
    }
    .btn-dark{
      font-size: .9rem!important;
    }
    .dropdown-menu li:first-child{
      text-align: center;
      font-weight: bold;
      background-color: #3A3A44;
      color:white;
    }

  }
</style>








































































