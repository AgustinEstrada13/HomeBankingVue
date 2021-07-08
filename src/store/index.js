import { createStore } from 'vuex'

export default createStore({
  state: {
    idCliente: 0, //id del cliente para usar en cuentas
    idAccount: [], //id de la cuenta para usar en transferencias
    nameClient:"", //nombre del cliente autentificado
    log:"" //Sesion

  },
  mutations: {
    setClient(state, payload){
      state.idCliente = payload
    },
    setAccount(state, payload){
      state.idAccount = payload 
    },
    setName(state, payload){
      state.nameClient = payload
    },
    setLog(state, payload){
      state.log = payload
    }
  },
  actions: {
    setClient({commit}, payload){
      commit('setClient', payload)
    },
    idAccount({commit}, payload){
      commit('setAccount', payload)
    },
    setName({commit}, payload){
      commit('setName', payload)
    },
    setName({commit}, payload){
      commit('setLog', payload)
    }

  },
  modules: {
    getters:{
      getClient(state){
        return state.idCliente;
      },
      getAccount(state){
        return state.idAccount;
      },
      getName(state){
        return state.nameClient;
      },
      getName(state){
        return state.log;
      }

    }
  }
})
