import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        username: 'Jane Doe',
        panier: [],
        joke: ''
    },
    getters: {
        username: (state) => state.username,
        panier: (state) => state.panier,
        panier_length: (state) => state.panier.length,
        joke: (state) => state.joke
    },
    mutations: { // Fonctions synchrones
        setUsername: function(state, value) {
            state.username = value;
        },
        addToBasket(state, value) {
            if(typeof value === 'string') {
                state.panier.push(value)
            } else {
                throw new Error('Mauvais type')
            }
        },
        setJoke: function (state, value) {
            state.joke = value;
        },
        recupPanier: function (state) {
            if(localStorage.getItem('panier')) {
                state.panier = localStorage.getItem('panier').split('|');
            }
        }

    },
    actions: { // Fonctions asynchrones
        getJoke: async function(state) {
            const {data} = await axios.get('https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode', {
                headers: {
                    'Accept' : 'application/json',
                    'User-Agent': 'Dawan - Formation Vue JS'
                }
            });
            state.commit('setJoke', data.joke);
        }
    },
    save() {

    }
});
export default store;