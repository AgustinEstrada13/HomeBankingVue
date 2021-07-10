<template>
  <main>
      <div class="tittle">
          <div class="contentTittle">
              <h2>You can requests loans from the bank</h2>
          </div>
      </div>
      <div class="subTittle">
            <div class="contentSubTittle">
                <div class="info">
                    <h3>You have 4 loans</h3>
                </div>
                <div class="">
                    <router-link to="/Account"><button type="button" class="btn btn-danger"><i class="fas fa-backward"></i> Back to accounts</button></router-link>
                </div>

          </div>
      </div>
      <div class="loanForm">
          <div class="contentLoanForm">
                <div class="line">
                    <div class="sectionLeftLoan">
                        <div class="tittleRigth w-100 text-white">
                            <h2>Request loan</h2>
                        </div>
                        <!-- ACCOUNTS -->
                        <div class="w-100 d-flex justify-content-center flex-wrap mt-3">
                            <p class ="w-100 text-danger">YOUR ACCOUNTS</p>
                            <select v-model="numAccount" class="form-select w-75" required>
                                <option disabled selected>Select your account</option>
                                <option v-for="account in accounts" :key="account.id" :value="account.number">{{account.number}} &nbsp; &nbsp; --- &nbsp; you have &nbsp; ${{account.balance}}</option>
                            </select>
                        </div>
                        <!-- TYPE LOAN -->
                        <div class="w-100 d-flex justify-content-center flex-wrap mt-3">
                            <p class ="w-100 text-danger">TYPE OF LOANS</p>
                            <select  v-model="typeLoan" class="form-select w-75" required @change="resetValues">
                                <option disabled value="">Select your type of loan</option>
                                <option  v-for="loan in loans" :key="loan.id" :value="loan" >{{loan.name}}</option>
                            </select>
                        </div>
                        <!-- PAYMENTS-->
                        <div class="w-100 d-flex justify-content-center flex-wrap mt-3">
                            <p class ="w-100 text-danger">PAYMENTS</p>
                            <select v-model="paymentSelect" v-show="typeLoan != null" class="form-select w-75" required>
                                <option  selected>Select your payments</option>
                                <option v-for="payment in typeLoan.payments" :key="payment.id" :value="payment">{{payment}}</option>
                            </select>
                        </div>
                        <!-- BALANCE-->
                        <div class="w-100 d-flex justify-content-center flex-wrap mt-3">
                            <p class ="w-100 text-danger">BALANCE OF LOAN</p>
                            <p class="text-white">Max amount:  ${{typeLoan.maxamount}}</p>
                            <div class="w-100">
                                <input v-model="balanceSelect" class="w-75" type="text" placeholder="Write the desired amount"  required>
                            </div>
                        </div>
                        <!-- BUTTON -->
                        <div class="w-100 d-flex justify-content-center mt-3"> 
                            <button @click="calculateLoan()" type="button" class="btn btn-dark">Calculate</button>
                        </div>
                        
                    </div>
                    <div class="sectionRigth">
                        <div class="tittleLeft w-100 d-flex justify-content-center text-white">
                            <h2>Calculate your loan</h2>
                        </div>
                        <div class="contentsectionLeftLoan">

                        
                            <div class="sectionLeftLoanLeft ">
                                <div class="calculateLoan mt-5 ">
                                    <h3>Loan: </h3>
                                </div>

                                <div class="calculateLoan mt-3 ">
                                    <h3>Payments: </h3>
                                </div>

                                <div class="calculateLoan    mt-3 ">
                                    <h3>Balance: </h3> 
                                </div>

                            </div>
                            <div class="sectionLeftLoanRigth">
                                <div v-show="typeLoan != null" class="calculateLoan mt-5 ms-2 ">
                                    <h3>{{typeLoan.name}}</h3>
                                </div>

                                <div v-show="typeLoan != null" class="calculateLoan mt-3 ms-2 ">
                                    <h3>{{paymentSelect}}</h3>
                                </div>

                                <div v-show="balanceSelect != null" class="calculateLoan mt-3 ms-2 ">
                                    <h3>${{balanceSelect}}</h3> 
                                </div>
                            </div>
                        </div>
                        <div v-show="balanceSelect != null" class="calculate">
                            <div class="infoCalculate w-100 mt-5 bg-dark">
                                <h3 >{{paymentSelect}} payments the ${{this.calculate}}</h3> 
                            </div>

                            <div>
                                <button @click="sendLoan" type="button" class="btn btn-dark">Request loan</button>
                                
                            </div>
                            
                        </div>
                    </div>

                    
              </div>
          </div>
      </div>

      <!-- TOAST OK LOAN-->
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
        <img src="../assets/ok.png" class="rounded me-2 w-25" alt="...">
        <strong class="me-auto">¡HOME BANKING!</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
        Good job!, you request loan with exit!
        </div>
        </div>
        </div>
  </main>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            loans: [],
            accounts:[],
            numAccount:null,
            typeLoan:[4,5,6],
            paymentSelect:null,
            balanceSelect:null,
            calculate:null,
        }
    },
    created () {
        // RECUPERAR LOS PRESTAMOS
        axios.get("/api/clients/current/loans")
        .then(res => {
            this.loans = res.data
        })

        //RECUPERAR LAS CUENTAS
        axios.get("/api/clients/current/accounts")
        .then(res => {
            this.accounts = res.data;
        })
    },
    methods: {
        
        resetValues() { //RESETEA LOS INPUTS CUANDO ESCUCHA EL @CHANGE
            this.paymentSelect = null;
            this.balanceSelect = null;
        },
        calculateLoan() {
            this.calculate = (parseInt(this.balanceSelect) / this.paymentSelect);    
        },
        sendLoan(){
            axios.post("/api/clients/current/loans",{
                id:this.typeLoan.id,
                amount:parseInt(this.balanceSelect),
                payments:this.paymentSelect,
                name:this.numAccount
                })
                .then(res =>{
                    // sweetAlert('Good job','You received loan from the bank ','success')
                    $(".toast").toast('show');
                    setTimeout(function(){
                    window.location.reload(1) 
                    }, 5000);
                    
                })
                    
        }
    },
    computed: {
        
    },
}
</script>

<style>
main{
    min-height: 90vh;
    max-width: 100vw;
}

.tittle{
    height: 20vh;
    max-width: 100vw;
    background-color: #191919;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contentTittle{
    height: 80%;
    width: 70%;
    background-color: rgba(39, 39, 39, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border:1px solid rgb(46,204,113);
}

.contentTittle h2{
    color: rgb(46,204,113);
    letter-spacing: 3px;
}

.subTittle{
    height: 10vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.contentSubTittle{
    height: 100%;
    min-width: 30%;
    background-color: rgb(25,25,25);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.contentSubTittle h3{
    color:rgb(46,204,113);
    letter-spacing: 3px;
}

.loanForm{
    min-height: 50vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;  
}

.contentLoanForm{
    min-height: 90%;
    width: 70%;
    background-color: rgb(25,25,25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    flex-wrap: wrap;
}

.line{
    min-height: 100%;
    width: 100%;
    border: 1px solid rgb(46,204,113);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    background-color: rgba(39, 39, 39, 0.5)
}

.sectionLeftLoan , .sectionRigth{
    height: 100%;
    min-width: 33vw;
    padding: 10px;
    flex-grow: 1;
}

.contentsectionLeftLoan{
    display: flex;
}

.sectionLeftLoanLeft{
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: rgb(46,204,113);
}

.sectionLeftLoanRigth{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;   
    justify-content: flex-start;
    color: rgb(46,204,113);
}



.calculate{
    height: 27vh;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.infoCalculate{
    height: 40%;
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border:1px solid black;
    color: rgb(46,204,113);
}
</style>