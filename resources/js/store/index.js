import Vue from "vue";
import Vuex from "vuex";
import branches from "./branches";
import users from "./users";
Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        branches,
        users
    }
});

export default Store;
