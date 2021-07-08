<template>
<div class ="mainTransaction">
    <div class="btnBack">
        <router-link to="/Account"><button type="button" class="btn btn-danger"><i class="fas fa-backward"> BACK</i></button></router-link>
    </div>
    
    <div class="tableContent">
        <h2>TRANSACTIONS</h2>
            <table class="table table-responsive" >
                <thead>
                    <tr class="text-white">
                        <th scope="col">ID</th>
                        <th scope="col">Type</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody class="text-white">
                    <tr v-for="account in transactions.transactions" :key="account.id">
                        <td>{{account.id}}</td>
                        <td :class="account.type == 'DEBIT'?'text-danger':'text-warning'">{{account.type}}</td>
                        <td>{{"$"}} {{account.amount}}</td>
                        <td>{{account.description}}</td>
                        <td >{{formateDate(account.date)}}</td>
                    </tr>
                </tbody>
                </table>
    </div>
</div>
     
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            accounts:[],
            transactions:[],
            nroAccount:"",
        }
    },
    created(){
        this.transactions = this.$store.state.idAccount;

    },
    methods:{
        formateDate(date) {return new Date(date).toLocaleDateString('en-gb')}
    }
}
</script>

<style scoped>
.mainTransaction{
    height: 90vh;
    background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* padding: 20px; */
}

.btnBack{
    width: 100vw!important;
}
.tableContent{
    height: 70%;
    min-width: 70vw;
    background-color: rgba(25, 25, 25);
    border-radius: 15px;
    box-shadow: rgba(175, 175, 175, 0.3) 0px 1px 2px 0px, rgba(172, 172, 172, 0.15) 0px 2px 6px 2px;
    /* padding: 20px; */
}
.table{
    font-size: .8rem;
}

.tableContent{
    color:white;
}

i{
    color:rgb(255, 255, 255);
    font-size: 1.5rem;
}

/* jquery de tamaño de letra font-size: .8rem; */









</style>

