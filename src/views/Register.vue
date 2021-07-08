<template>
    <div class="wrapper">
    <div class="row content">
        <div class="col-md-6">
            <div class="card">
                <form @submit="sumbitRegister()" class="box">
                    <h1>Register</h1>
                    <p class="text-muted"> Please complete the registration</p> 
                    <input v-model="firstName" type="text" name="" placeholder="First Name" required aria-label="First Name" aria-describedby="basic-addon1"> 
                    <input v-model="lastName" type="text" name="" placeholder="Last Name" required aria-label="Last name" aria-describedby="basic-addon1"> 
                    <input v-model="pass" type="password" name="" placeholder="Password" required aria-label="Password" aria-describedby="basic-addon1"> 
                    <input v-model="email" type="email" name="" placeholder="Email" required aria-label="Email" aria-describedby="basic-addon1"> 

                    <input type="submit" name="" value="Register Now" href="#">
                    <router-link to="/"><input type="submit" name="" value="Back" href="#"></router-link>
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
import axios from 'axios'
export default {
    data(){
        return{
            firstName:"",
            lastName:"",
            pass:"",
            email:"",

        }
    },
    methods:{
        sumbitRegister(){
            event.preventDefault();
            axios.post('/api/clients',"firstName=" + this.firstName + "&lastName="+ this.lastName +"&email=" + this.email + "&password=" + this.pass,
            {headers:{'content-type':'application/x-www-form-urlencoded'}})
            .then(swal("Good job!", "Registration completed!", "success"))
            this.$router.push("/");
        }
    }
    
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.wrapper{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #b92b27, #1565c0)
}
.content{
    min-height: 100vh;
    width: 99vw;
    background-color: rgb(25, 25, 25,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.col{
    min-height: 100vh;
}
.card {
    margin-bottom: 20px;
    border: none;
    border-radius: 30px!important;
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
    border-radius: 50px;
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