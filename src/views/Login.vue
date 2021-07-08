<template>
    <div class="wrapper">
    <div class="row content">
        <div class="col-md-6">
        <h1 class="mb-2">¡WELCOME TO HOME BANKING!</h1>   
            <div class="card">
                <form @submit="sumbit()" class="box">
                    <h1 class="animate__animated animate__fadeInDown">Login</h1>
                    <p class="text-muted"> Please enter your login and password!</p> 
                    <input v-model="mail" type="text" name="" placeholder="Username" aria-label="LoginUserEmail" aria-describedby="basic-addon1"> 
                    <input v-model="pass" type="password" name="" placeholder="Password" aria-label="LoginUserPassword" aria-describedby="basic-addon1"> 

                    <a class="forgot text-muted" href="#">Forgot password?</a> 
                    <router-link to="/register"><a class="forgot text-muted" href="#">Register</a></router-link> 
                    <input @Click="SaveSession()" type="submit" name="" value="Login" href="#" >
                    <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                    <div class="col-md-12">
                        <ul class="social-network social-circle">
                            <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
    
</div>

</template>

<script>
import axios from "axios"

export default {
    data(){
        return{
            mail:"",
            pass:"",
            name:"",
            log:[],
            name:"",
            loading:false,
        }
    },
    created(){
        

    },
    methods:{
        sumbit(){
            event.preventDefault();
            //ENVIAR LOGIN A LA BASE DE DATOS           
            axios.post('/api/login',"email=" + this.mail + "&password="+ this.pass,
            {headers:{'content-type':'application/x-www-form-urlencoded'}})
            .then(res =>{
                //RECUPERAR EL USUARIO AUTENTIFICADO 
                axios.get("/api/clients/current")
                .then(res =>{
                    this.log = res.data;
                    this.$store.commit('setLog',"ok"); //LOGIN OK
                    localStorage.setItem("login", JSON.stringify(this.$store.state.log)); //SETEAR LOG EN LOCALSTORAGE
                    this.name = this.log.firstName + " " + this.log.lastName; //GUARDO EL NOMBRE DEL USUARIO
                    swal("¡Hello " + this.name)+"!"; //AVISO DEL LOG OK
                    this.$router.push("/Home");
                })
            })      
                        
        //FIN FUNCION
        },
        SaveSession(){
            this.loading =!false;
            setTimeout(() =>{
                this.loading=!true;
            },2000)
        
        }
            


    },
    mounted(){
        
    }
}
</script>

<style scoped>

.wrapper{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #b92b27, #1565c0)
}
.content{
    height: 98.3vh;
    width: 99vw;
    background-color: rgb(25, 25, 25,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    
}
h1{
    letter-spacing: 3px;
}
.card {
    margin-bottom: 20px;
    border: none;
    border-radius: 20px!important;
    background-color: #2ecc71!important;
}

.box {
    /* width: 100vw; */
    height: 100%;
    padding: 40px;
    top: 50%;
    left: 50%;
    background: #191919;
    text-align: center;
    transition: 0.25s;
    border-radius: 30px;
    border:3px solid #2ecc71;
}

.box input[type="text"],
.box input[type="password"],
.box input[type="email"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s
}

.box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500
}

.box input[type="text"]:focus,
.box input[type="password"]:focus,
.box input[type="email"]:focus {
    width: 300px;
    border-color: #2ecc71
}

.box input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer
}

.box input[type="submit"]:hover {
    background: #2ecc71
}

.forgot {
    text-decoration: underline
}

ul.social-network {
    list-style: none;
    display: inline;
    margin-left: 0 !important;
    padding: 0
}

ul.social-network li {
    display: inline;
    margin: 0 5px
}

.social-network a.icoFacebook:hover {
    background-color: #3B5998
}

.social-network a.icoTwitter:hover {
    background-color: #33ccff
}

.social-network a.icoGoogle:hover {
    background-color: #BD3518
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
    color: #fff
}

a.socialIcon:hover,
.socialHoverClass {
    color: #44BCDD
}

.social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto 0 auto;
    border-radius: 50%;
    text-align: center;
    width: 50px;
    height: 50px;
    font-size: 20px
}

.social-circle li i {
    margin: 0;
    line-height: 50px;
    text-align: center
}

.social-circle li a:hover i,
.triggeredHover {
    transform: rotate(360deg);
    transition: all 0.2s
}

.social-circle i {
    color: #fff;
    transition: all 0.8s;
    transition: all 0.8s
}
</style>