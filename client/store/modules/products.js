function initialState() {
  return {
    productLists: []
  }
}

const state = {
  ...initialState(),
};

const getters = {
  productLists: state => state.productLists
};

const mutations = {
  populateProductList(state, payload) {
    state.productLists = payload
  },
};

const actions = {
  addProducts({ commit }, payload) {
    return this.$axios.$post('http://localhost:5000/api/products', payload, { headers: {
      authorization: `Bearer ${localStorage.token}`,
    }}).then(res => {
      console.log(res)
    }).catch(err => {
      throw err
    })
  },
  getProducts({ commit }, payload) {
    return this.$axios.$get('http://localhost:5000/api/products', {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      }
    }).then(res => {
      commit('populateProductList', res )
    }).catch(err => {
      throw err
    })
  },
  removeProduct({ commit }, product) {
    return this.$axios.$delete('http://localhost:5000/api/products/'+product, { 
      headers: { authorization: `Bearer ${localStorage.token}`},
    }).then(res => {
      console.log(res)
    }).catch(err => {
      throw err
    })
  }
}

const products = {
  state,
  getters,
  mutations,
  actions
}

export default products;