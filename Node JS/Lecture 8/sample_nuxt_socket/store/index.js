export default {
  state(){
      return {
        counter: 0,
        messages: []
      }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    test(state, payload){
        state.title = payload.title;
        state.content = payload.content;
    },
    changeAuthenticatinStatus(state){
       state.authenticated = true;
    },
    newMessage(state, msg) {
      console.log(msg);
      state.messages.push(msg);
    }
  },
  actions:{
      nuxtServerInit (contextFromStore, contextFromNuxt){
          if(contextFromNuxt.req.session && contextFromNuxt.req.session.isAuth){
              contextFromStore.commit('changeAuthenticatinStatus');
          }
      }
  }
};