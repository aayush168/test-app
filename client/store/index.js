import Vuex from "vuex";
import auth from "./modules/auth";
import products from "./modules/products"

const createStore = () => {
  return new Vuex.Store({
    state: {
      dashboardComponent: 'dashboard'
    },
    getters: {
      dashboardComponent: state => state.dashboardComponent
    },
    mutations: {
      settingDashboard(state, path) {
        state.dashboardComponent = path
      }
    },
    actions: {
      setDashBoardComponent({ commit }, path) {
        commit('settingDashboard', path)
      }
    },
    modules: {
      auth,
      products
    }
  });
}

export default createStore

