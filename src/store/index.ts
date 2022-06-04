import { createStore } from "vuex";
export default createStore({
  state: {
    landBoolean: false,
    text: ''
  },
  mutations: {
    setText(state, payload){
      state.text = payload.nametext
    },
    setLand(state, payload){
      state.landBoolean = payload.land
      if(payload.land){
        localStorage.setItem("getLogin", 'true');
      }
    }
  },
  getters:{
    getText(state){
      return 'hello' + state.text
    }
  },
  actions: {},
  modules: {}
});