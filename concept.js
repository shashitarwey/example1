import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex )
const store = new Vuex.Store({
    state: {
        todos: [{ id: 1, name: "Shopping at 7", done: true }, { id: 2, name: "Learn vuex", done: true }, { id: 3, name: "Gaming", done: false }],

        count: 0
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter( todo => todo.done )
        }
    },
    mutations: {
        increment( state, payload ) {
            state.count += payload;
        }
    },
    actions: {
        increment: ( context , payload) => {
            setTimeout( () => {
                context.commit("increment", payload)
            },3000);
        }
    }
});

export default store;
