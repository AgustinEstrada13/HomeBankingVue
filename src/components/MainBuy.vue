<template>
  <main>
      <div class="wrapper">
          <div class="section">
              <div class="contentSection">
                  <div class="w-100 d-flex justify-content-center align-items-center">
                      <h2 class="text-white">CRYPTOS</h2>
                  </div>
                  <div class="selectCoin">
                        <h3>Select coin for the buy</h3>
                        <select v-model="coinSelect" class="form-select" aria-label="Default select example">
                            <option selected disabled>Select coin</option>
                            <option value="bitcoin">BITCOIN</option>
                            <option value="etherium">ETHERIUM</option>
                        </select>
                    </div>
                    <div class="infoCoin">
                        <h3 v-show="coinSelect == 'bitcoin'" class="text-white w-100"> 1 BITCOIN = $40.000</h3>
                        <h3 v-show="coinSelect == 'etherium'" class="text-white w-100"> 1 ETHERIUM = $2.320,94</h3>
                    </div>
                    <div class="calculateCoin">
                        <h4 class="w-100">Amount:</h4>
                    <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <input v-model="coinAmount" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <span class="input-group-text">.00</span>
                    </div>

                    <div class="infoCalculateCoin w-100">
                        <h2 v-show="coinSelect == 'bitcoin'" class="text-white">Your amount {{coinAmount}}, you buy {{coinAmount / 40000}} {{coinSelect}}</h2>
                        <h2 v-show="coinSelect == 'etherium'" class="text-white">Your amount {{coinAmount}}, you buy {{coinAmount / 2320}} {{coinSelect}}</h2>
                    </div>

                    <div class="selectAccount">
                        <h3 class="w-100">Select your account to buy</h3>
                        <select v-model="accountSelect" class="form-select" aria-label="Default select example">
                            <option selected disabled>Select account</option>
                            <option v-for="account in accounts" :key="account.id" :value="account.number">{{account.number}}</option>
                        </select>
                    </div>
                    <div class="ok">
                        <button @click="buy" type="button" class="btn btn-danger">Buy Crypto</button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      
  </main>
</template>

<script >
export default {
    data() {
        return {
            coinSelect: null,
            coinAmount: null,
            accountSelect: null,
            accounts:[],
        }
    },

    created () {
        axios.get("/api/clients/current")
        .then(res => {
            this.accounts = res.data.accounts
            console.log(this.accounts)
        })

    },

    methods: {
         
        buy() {
            axios.post('/api/clients/current/buy',"number=" + this.accountSelect +"&amountBuyCrypto=" + parseInt(this.coinAmount) +"&description=BUY CRYPTO " + this.coinSelect)
            .then(res =>{
                console.log(res.data);
                swal("GOOD JOB", "YOU BUY CRYPTO", "success")  
            })
        }
    },
}
</script>

<style scoped>
main{
    min-height: 82vh;
    max-width: 100vw;
}

.wrapper{
    min-height: 82vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section{
    height: 70vh;
    width: 70vw;
    border-radius: 20px;
    border:2px inset #2ecc71;
    background-color: rgb(25,25,25);
    display: flex;
    justify-content: center;
    align-items: center;
}

.contentSection{
    height: 90%;
    width: 90%;
}

.selectCoin{
    height: 10vh;
}

.infoCoin{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.calculateCoin{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* background-color: blue; */
}

.infoBuy{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.infoCalculateCoin{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ok{
    height: 10vh;
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>