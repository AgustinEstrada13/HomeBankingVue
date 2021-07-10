<template>
    <main>
        
        <div class="Account" >
            <div class="contentInfoAccount">

                <div class="w-25 mb-5">
                    <h2 v-show="sizeAccount > 1">You have {{this.sizeAccount}} accounts &nbsp; &nbsp; &nbsp; You can create {{this.sizeMaxAccount - this.sizeAccount}} account &nbsp; &nbsp; &nbsp; <i class="fab fa-btc"></i> = $40.000 &nbsp; &nbsp; &nbsp; <i class="fab fa-ethereum"></i> = $2,320.94</h2>
                    <h2 v-show="sizeAccount == 1">You have {{this.sizeAccount}} account -- You can create {{this.sizeMaxAccount - this.sizeAccount}} account-- <i class="fab fa-btc"></i> = 130$</h2>
                </div>

                <div class="mb-5 w-50">
                    <h2>   </h2>
                    <h2></h2>
                </div>

            </div>

            <div class="infoPage w-100">
            <div class="contentInfoPage d-flex align-items-center justify-content-center w-100">
                <h2>Your available accounts.<span>&#160;</span></h2>
            </div>
            </div>
            <div class="newAccount w-100 d-flex justify-content-center ">
                <div class="contentNewAccount">
                <div class="infoNewAccount">
                    <div class="infoText">
                        <i class="fas fa-plus-square "></i><h4>CREATE NEW ACCOUNT</h4>
                    </div>
                    <div>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create new account</button>

                        <!-- Modal -->
                        <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog bg-dark">
                            <div class="modal-content bg-dark">
                            <div class="modal-header d-flex justify-content-center">
                                <h5 class="modal-title" id="staticBackdropLabel"> <i class="fas fa-piggy-bank"></i> Home Banking</h5>
                            </div>
                            <div class="modal-body">
                                <h4>Are you sure you want to create a gutter?</h4>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="btn btn-primary w-25"  data-bs-dismiss="modal">Close</button>
                                <button @click="createNewAccount()" type="button" class="btn btn-secondary w-25" data-bs-dismiss="modal">Yes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>                    
                </div>
            </div>
            </div>    
            <div class="accountUser w-100">
                <div class="contentAccount mt-5"  v-for="cuenta in accounts" :key="cuenta.id">
                <div class="sectionLeft">
                    <div class="titleCard">
                        <h4>ACCOUNT</h4>
                    </div>
                    <div class="buttonCard">
                       <router-link  to="/Transaction"> <button @click="findIndex(cuenta)" type="button" class="btn btn-outline-danger btnAccount ">All transactions</button></router-link>
                    </div>
                    <div class="buttonCard">
                     <router-link  to="/Loan">   <button @click="findIndex(cuenta)" type="button" class="btn btn-outline-danger btnAccount ">Loans</button></router-link>
                    </div>
                    <div class="buttonCard d-flex justify-content-around ">
                        <!-- Button trigger modal -->
                    <button  type="button" @click="findIndex(cuenta)" class="btn btn-outline-warning" >Delete account</button>
                    <button  type="button" @click="findIndex(cuenta)" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Transfer to</button>
                    <!-- Modal --> 
                    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
                    <div class="modal-dialog bg-white">
                        <div class="modal-content w-100">
                        <div class="modal-header bg-dark w-100">
                            <h2 class="modal-title text-danger w-100" id="staticBackdropLabel2"><i class="fas fa-piggy-bank"></i>¡HOME BANKING!</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body bg-dark">
                            <div class="tittleBody w-100">
                                <h4 class="w-100">You can transfer to the account you want</h4>
                                <h5>From account: <span class="text-danger fs-3">{{numAccount}}</span></h5>
                            </div>
                            <div class="contentBody mt-4">
                                <h3>Type of transfer: </h3>
                                <div class="selectTypeTransfer w-100 d-flex justify-content-center">
                                    <select v-model="selectTypeTransfer" class="form-select form-select-sm w-50" aria-label=".form-select-sm example">
                                        <option disabled selected>Select your type of transfer</option>
                                        <option value="1">My accounts</option>
                                        <option value="2">External accounts</option>
                                    </select>
                                </div>
                                
                                <h3 class="mt-4">To:</h3>
                                <div v-if="selectTypeTransfer == 1" class="transferTo w-100 d-flex justify-content-center">
                                    <select v-model="selectToTransfer" class="form-select form-select-sm w-50" aria-label=".form-select-sm example">
                                        <option disabled selected>Select your account to transfer</option>
                                        <option v-for="x in accountsFilter()" :key="x.id" v-bind:value="x.number" >{{x.number}}</option>
                                    </select>
                                </div>
                                <div v-else>
                                    <input type="text">
                                </div>

                                <h3 class="mt-4">Description:</h3>
                                <div class="description w-100">
                                    <input v-model="descriptionTransfer" type="text" placeholder="type description" class="form-control" >
                                </div>

                                <h3 class="mt-4">Amount:</h3>
                                <div class="ammount w-100">
                                    <input v-model="amountTransfer" type="number"  class="form-control" id="amount">
                                </div>

                            </div>

                        </div>
                        <div class="modal-footer bg-dark d-flex justify-content-center">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button @click="sendTransfer()" type="button" class="btn btn-danger">Transfer</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <!------------------------------------------------->
                    </div>
                <div class="sectionCenter">
                    <div class="contentCenter">
                        <p>Name: {{this.userLogin.firstName}} {{this.userLogin.lastName}}</p>
                    </div>
                    <div class="contentCenter">
                        <p>Number: {{cuenta.number}}</p>
                    </div>
                    <div class="contentCenter">
                        <p>Balance: {{"$"}} {{cuenta.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</p><p></p>
                    </div>
                    
                </div>
                
                        
            </div>
            </div>
            
        </div>

        <div class="tableLoans mt-5">
            <div class="title w-100 d-flex justify-content-center">
                <h3 class="fs-1">YOUR LOANS REQUESTED FROM THE BANK</h3>
            </div>

            <div v-if="size>0" class="contentTableLoans w-100">
                
                <table class="table table-responsive mt-5" >
                    <thead>
                        <tr class ="text-danger">
                            <th scope="col">N°</th>
                            <th scope="col">Amount owed</th>
                            <th scope="col">Payments</th>
                            <th scope="col">Type of loans </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in userLogin.loans" :key="transaction.id" class="text-white">
                            <td>{{transaction.clientLoanId}}</td>
                            <td>$ {{transaction.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                            <td>{{transaction.payment}}</td>
                            <td :class="transaction.name == 'Mortgage'?'text-primary':'text-warning'">{{transaction.name}}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="noLoan"> 
                <h3>Request your loan here  <i class="fas fa-arrow-circle-right"></i></h3>
                <button type="button" class="btn btn-danger ms-3 w-10">Loans</button>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            userLogin:[],
            numAccount:"",
            size:0,
            accounts:[],
            sizeAccount:0,
            sizeMaxAccount:3,
            createAccount:false,
            selectTypeTransfer:null,
            selectToTransfer:null,
            descriptionTransfer:"",
            amountTransfer:0,
            
        }
    },
    created(){
        axios.get("/api/clients/current")
        .then((res) =>{
            //USER LOGIN
            this.userLogin = res.data;
            
            this.$store.commit('setClient', this.$store.state.idCliente)
            this.size = this.userLogin.loans.length;

            //USER ACCOUNT
            this.accounts = this.userLogin.accounts;
            this.accounts.sort((a,b) => a.id - b.id)
            
            this.sizeAccount = this.accounts.length;
            
        })

    },
    methods:{
        findIndex(cuenta){
            this.$store.commit('setAccount', cuenta)
            this.numAccount = cuenta.number;
            
        },
        createNewAccount(){
            if(this.sizeAccount < this.sizeMaxAccount){
                axios.post("/api/clients/current/accounts","createNewAccount=true")
                location.reload()
                swal("Created account!", "Thanks for trusting us!", "success");
            }else{
                swal("You have reached the maximum account limit","","warning");
            }
            
        },
        sendTransfer(){
            event.preventDefault();
            if(this.amountTransfer != null && this.descriptionTransfer != null && this.numAccount != null && this.selectToTransfer != null ){
                axios.post("/api/current/transfer","amount=" + this.amountTransfer + "&description=" + this.descriptionTransfer + "&fromAccount=" + this.numAccount + "&toAccount=" + this.selectToTransfer)
                .then(res =>{
                    swal("TRANSFER COMPLETED", "Thanks for trusting us!", "success");
                    location.reload();
                })
            }else{
                swal("COMPLETE THIS FORM","","warning");
            }
            
            
        },
        accountsFilter(){
            return this.accounts.filter(e => e.number !== this.numAccount)
        }
        
        

    },
    computed: {
        
    },
}
</script>

<style>

main{
    min-height: 100vh;

    background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42));
}
.infoPage{
    height: 15vh;
    display: flex;
    justify-content: center;
}
.contentInfoPage{
    height: 100%;
    width: 7vw;
}
.contentInfoPage h2{
    position: relative; 
    color: white;
    	float: left;
}
.contentInfoPage h2 span{
    position:absolute;
    right:0;
    width:0;
    background: linear-gradient(to right, rgb(35, 29, 23), rgb(32, 31, 36));
    border-left: 1px solid #000;
    animation: escribir 5s steps(37) infinite alternate;
}

@keyframes escribir {
    from { width: 100% }
    to { width:0 }
}

.Account{
    min-height: 40vh;
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.contentInfoAccount{
    height: 8vh;
    width: 100vw!important;
    background-color: rgb(25,25,25);
    font-size: 1rem;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;
    
}
/* EFECTO MARQUESS */
.contentInfoAccount h2 {
 font-size: 2em;
 color: limegreen;
 position: absolute;
 width: 100%;
 height: 100%;
 margin: 0;
 
 line-height: 50px;
 text-align: center;
 /* Starting position */
 -moz-transform:translateX(100%);
 -webkit-transform:translateX(100%);	
 transform:translateX(100%);
 /* Apply animation to this element */	
 -moz-animation: example1 15s linear infinite;
 -webkit-animation: example1 15s linear infinite;
 animation: example1 15s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes example1 {
 0%   { -moz-transform: translateX(100%); }
 100% { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes example1 {
 0%   { -webkit-transform: translateX(100%); }
 100% { -webkit-transform: translateX(-100%); }
}
@keyframes example1 {
 0%   { 
 -moz-transform: translateX(100%); /* Firefox bug fix */
 -webkit-transform: translateX(100%); /* Firefox bug fix */
 transform: translateX(100%); 		
 }
 100% { 
 -moz-transform: translateX(-100%); /* Firefox bug fix */
 -webkit-transform: translateX(-100%); /* Firefox bug fix */
 transform: translateX(-100%); 
 }
}

.contentNewAccount{
    min-width: 25%;
    background-color: rgb(25,25,25);
    border-radius: 30px;
    font-size: 1rem;
    color: aliceblue;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.infoNewAccount:hover{
    color: green;
}

.infoText{
    width: 100%;
}
.accountUser{
    min-height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
}
.contentAccount{
    height: 30vh;
    min-width: 25%;
    background-color: rgb(25,25,25);
    border-radius: 40px;
    font-size: 1rem;
    color: aliceblue;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    box-shadow: rgba(255, 255, 255, 0.2);
}

.sectionLeft{
    height: 100%;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-right: 1px solid white;
    font-size: 1rem;
}
.sectionCenter{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.titleCard{
    width: 100%;
}
.titleCard h4{
    font-weight: bold;
}


.buttonCard{
    width: 100%;
}
.btnAccount{
    width: 90%;
}

.btn a{
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    color:lavender!important;
    text-align: center;
    
}

/* ------------------------------- */

.tableLoans{
    min-height: 35vh;
    width: 100%;
}

.contentTableLoans{
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.noLoan{
    height: 20vh;
    /* width: 100vw; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.noLoan h3{
    color: aliceblue;
    font-size: 1.3rem;
}

</style>