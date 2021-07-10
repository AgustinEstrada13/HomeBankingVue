<template>
  <div class="mainCard">
      <div class="contentTittleCard">
            <div class="titleCard">
                <div class="infoCardLeft">
                    <h3 class="tittleInfoCard text-decoration-underline">INFO CARDS</h3>
                    <h3>Debit card: {{debit}} <span class="text-danger fs-6">max 3</span></h3>
                    <h3>Credit card: {{credit}} <span class="text-danger fs-6">max 3</span></h3>
                </div>
                <div class="infoCardCenter">
                    <h3 class="tittleInfoCard text-decoration-underline">ACTIONS CARDS</h3>
                    <button type="button" class="btn btn-outline-primary w-75">Delete card</button>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-outline-danger w-75" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create new card</button>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title text-danger" id="staticBackdropLabel"><i class="fas fa-piggy-bank"></i> ¡HOME BANKING!</h2>
                        </div>
                        <div class="modal-body">
                            <div class="contentFrom">
                                <form>
                                    <div class="mb-3">
                                        <label for="placeHolder" class="form-label"> Name</label>
                                        <input type="text" class="form-control text-secondary" :value="[[nameUser]]" disabled id="placeHolder">
                                    </div>

                                    <div class="w-100 d-flex justify-content-center align-items-center mt-5 bg-dark">
                                        <h4>Select your type card:</h4>
                                    </div>
                                    <div class="mb-3 d-flex justify-content-center align-items-center bg-dark">
                                        <div class="form-check">
                                            <input @click="filterCardType('DEBIT')" class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" >
                                            <label class="form-check-label" for="flexRadioDefault1">DEBIT</label>
                                        </div>
                                        <div class="form-check">
                                            <input @click="filterCardType('CREDIT')" class="form-check-input ms-2" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" >
                                            <label class="form-check-label ms-2" for="flexRadioDefault2">CREDIT</label>
                                        </div>
                                    </div>
                                    <div class="w-100 d-flex justify-content-center align-items-center mt-5 bg-dark">
                                        <h4>Select your color card:</h4>
                                    </div>
                                    <div>
                                    <div class="mb-3 d-flex justify-content-center align-items-center bg-dark">
                                        <div class="form-check">
                                            <input @click="filterCardColor('PLATINUM')" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                                            <label class="form-check-label" for="flexRadioDefault4">PLATINUM</label>
                                        </div>
                                        <div class="form-check">
                                            <input @click="filterCardColor('GOLD')" class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" >
                                            <label class="form-check-label ms-2" for="flexRadioDefault3">GOLD</label>
                                        </div>
                                        <div class="form-check">
                                            <input @click="filterCardColor('SILVER')" class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault5" >
                                            <label class="form-check-label ms-2" for="flexRadioDefault5">SILVER</label>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="mt-3">
                                        <label for="cvv" class="form-label">CVV</label>
                                        <input v-model="cvv" type="number" class="form-control" placeholder="Your code segurity, please type 3 numbers" min="1" max="999" id="cvv" required>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer d-flex jus">
                            <button type="button" class="btn btn-light w-25" data-bs-dismiss="modal">Close</button>
                            <button @click="createNewCard()" type="submit" class="btn btn-danger w-25">Create card</button>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                
            </div>
      </div>
      

    

    
    <div class="contentCard">
        
        <div  class="card mt-4" v-for="card in cards.sort()" :key="card.id" > 
            <div :class="card.colorCard" class="card__front card__part">

                <div class="d-flex justify-content-around">
                    <p class="fw-bold">{{card.typecard}}</p>
                    <p class="fw-bold">{{card.colorCard}}</p>
                </div>
                
                <p class="card_numer">{{card.number}}</p>
                <div class="card__space-75">
                    <span class="card__label">Card holder</span>
                    <p class="card__info" :class="card.cardholder == 'Mabel Morel' ? 'black' : '' ">{{card.cardholder}}</p>
                </div>
                <div class="card__space-25">
                    <span class="card__label">Creation</span>
                    <p class="card__info">{{card.fromDate.slice(2,7)}}</p>
                </div>
                <div class="card__space-25">
                    <span v-show="card.expiredCard == false" class="card__label">Expires</span>
                    <span v-show="card.expiredCard == true" class="card__label text-danger">Expired</span>
                    <p class="card__info">{{card.thruDate.slice(2,7)}}</p>
                </div>
                
            
            </div>
            
            <div class="card__back card__part" :class="card.colorCard">
                <div class="card__black-line"></div>
                <div class="card__back-content">
                <div class="card__secret">
                    <p class="card__secret--last">{{card.cvv}}</p>
                </div>
                </div>
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
            cards:[],
            user:[],
            nameUser:"",
            cardType:"",
            cardColor:"",
            cvv:0,
            debit:0,
            credit:0,
        }
    },
    created(){
        axios.get("/api/clients/current")
        .then((res) =>{
            this.user = res.data
            this.cards = this.user.cards;
            this.nameUser = this.user.firstName + " " + this.user.lastName
            console.log(this.cards)

            //RECUPERAR LA CANTIDAD DEL TIPO DE TARJETA
            this.cards.forEach(x=>{
                if(x.typecard == "DEBIT"){
                    this.debit++; 
                }else{
                    this.credit++;
                }
            })
        })
    },
    methods: {
        //----------FORM CREAR CARD------------
        //RECUPERAR EL VALOR DEL INPUT CARD TYPE
        filterCardType(cardType) {
            if (cardType =="DEBIT"){
                this.cardType = cardType;
            }else{
                this.cardType = cardType;
            }
        },
        //RECUPERAR EL VALOR DEL INPUT CARD COLOR
        filterCardColor(cardColor){
            if(cardColor =="PLATINUM"){
                this.cardColor = cardColor;
            }else if(cardColor =="GOLD"){
                this.cardColor = cardColor;
            }else{
                this.cardColor = cardColor;
            }
        },

        createNewCard(){
            if(this.cardType != null && this.cardColor !=null && this.cvv !=null ){ //VALIDAR DATOS NULOS
                if(this.debit < 3 || this.credit < 3){ //VALIDAR MAXIMO 
                    axios.post("/api/clients/current/cards","cardType=" + this.cardType + "&cardColorType=" + this.cardColor + "&cvv=" + this.cvv)
                    .then(res=>{
                        swal("Good job!", "Registration completed!", "success");
                        location.reload()
                    })
                        
                }else{
                    swal("ERROR!", "YOU REACHED THE MAXIMUM", "warning")
                }        
            }else{
                swal("ERROR!", "PLEASE COMPLETE THIS FORM!", "warning")
            }
        }



    },
}
</script>

<style scoped>

    .modal-header{
        background-color: rgb(25,25,25);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-body{
        background-color: rgb(25,25,25);
        height: 50vh;
 
    }
    .mainCard{
        min-height: 82vh;
        background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42));
    }

    .modal-footer{
        background-color: rgb(25,25,25);
    }
    .contentTittleCard{
        min-height: 30vh;
        padding: 48px;
        background-color: rgb(25,25,25);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .titleCard{
        min-height: 25vh;
        width: 80%;
        background-color: rgba(39, 39, 39, 0.5);
        color:white;
        border-radius: 10px;
        border:1px solid rgb(46,204,113);
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 20px;
    }
    .titleCard h2{
        color: white;
        font-size: 2rem;
    }

    .infoCardLeft{
        min-height: 100%;
        min-width: 15vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border: 1px solid white;
        border-radius: 20px;
        padding: 20px;
    }
    .tittleInfoCard{
        color:rgb(46,204,113);
        letter-spacing: 3px;
        text-shadow: 1px 3px 0 #222222, 1px 13px 5px #292929;
   }
    
    .infoCardCenter{
        min-height: 100%;
        min-width: 15vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border: 1px solid white;
        border-radius: 20px;
        padding: 10px;
    }
    .infoCardCenter .bttn{

    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content: center;
        flex-direction: column;
        -webkit-flex-direction: column;
    }
    .title {
        margin-bottom: 30px;
        color: #162969;
    }

    .card{
        width: 320px;
        height: 190px;
        -webkit-perspective: 600px;
        -moz-perspective: 600px;
        perspective:600px;
        background: linear-gradient(to right, rgb(41, 27, 27), rgb(25, 33, 42));
    }
    .contentCard{
        min-height: 52vh;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .card__part{
        box-shadow: 1px 1px #aaa3a3;
        top: 0;
        position: absolute;
        z-index: 1000;
        left: 0;
        display: inline-block;
        width: 320px;
        height: 190px;
        background-image: linear-gradient(to right bottom, #dc3844, #dc3844, #dc3844, #dc3844, #ff8080); /*linear-gradient(to right bottom, #fd8369, #fc7870, #f96e78, #f56581, #ee5d8a)*/
        border-radius: 8px;
    
        -webkit-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -moz-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -ms-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -o-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
    }

    .card__front{
        padding: 18px;
        -webkit-transform: rotateY(0);
        -moz-transform: rotateY(0);
    }

    .card__back {
        padding: 18px 0;
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
    }

    .card__black-line {
        margin-top: 5px;
        height: 38px;
        background-color: #303030;
    }

    .card__logo {
        height: 16px;
    }

    .card__front-logo{
        position: absolute;
        top: 18px;
        right: 18px;
    }
    .card__square {
        border-radius: 5px;
        height: 30px;
    }

    .card_numer {
        display: block;
        width: 100%;
        word-spacing: 4px;
        font-size: 20px;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .card__space-75 {
        width: 50%;
        float: left;
    }

    .card__space-25 {
        width: 25%;
        float: left;
    }

    .card__label {
        font-size: 10px;
        text-transform: uppercase;
        color: rgba(255,255,255,0.8);
        letter-spacing: 1px;
    }

    .card__info {
        margin-bottom: 0;
        margin-top: 5px;
        font-size: 16px;
        line-height: 18px;
        color: #fff;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .card__back-content {
        padding: 15px 15px 0;
    }
    .card__secret--last {
        color: #303030;
        text-align: right;
        margin: 0;
        font-size: 14px;
    }

    .card__secret {
        padding: 5px 12px;
        background-color: #fff;
        position:relative;
    }

    .card__secret:before{
        content:'';
        position: absolute;
        top: -3px;
        left: -3px;
        height: calc(100% + 6px);
        width: calc(100% - 42px);
        border-radius: 4px;
        background: repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px);
    }

    .card__back-logo {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

    .card__back-square {
        position: absolute;
        bottom: 15px;
        left: 15px;
    }

    .card:hover .card__front {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);

    }

    .card:hover .card__back {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
    }


.GOLD {
    background:conic-gradient(#edc800, #e3b600, #f3cf00, #ffe800,
                                #edc800, #e3b600, #f3cf00, #ffe800,
                                #edc800, #e3b600, #f3cf00, #ffe800,
                                #edc800, #e3b600, #f3cf00, #ffe800);
                                text-shadow: 2px 2px 2px #558ABB;
}

.SILVER {
    background:conic-gradient(#d7d7d7, #c3c3c3, #cccccc, #c6c6c6,
                                #d7d7d7, #c3c3c3, #cccccc, #c6c6c6,
                                #d7d7d7, #c3c3c3, #cccccc, #c6c6c6,
                                #d7d7d7, #c3c3c3, #cccccc, #c6c6c6);
                text-shadow: 2px 2px 2px #558ABB;
}

.PLATINUM {
    background:conic-gradient(#e6e9bf, #d2b5aa, #cbaea3, #d4b5ab,
                                #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab,
                                #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab,
                                #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab);
                text-shadow: 2px 2px 2px #558ABB;
}   
.black{
    color:black;
}
</style>