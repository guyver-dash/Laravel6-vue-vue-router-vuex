import Vue from "vue";
import Vuex from "vuex";
import branches from "./branches";

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        branches
    }
});

export default Store;
