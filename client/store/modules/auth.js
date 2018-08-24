function initialState() {
  return {
    user: {},
    isLoggedIn: false
  }
}

const state = {
  ...initialState(),
};

const getters = {
  user: state => state.user,
  isLoggedIn: state => state.isLoggedIn
};

const mutations = {
  setUser(state, res) {
    state.user = res,
    state.isLoggedIn = true
  },
  clearUserData(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  }
};

const actions = {
  signIn({commit}, loginData) {
    return this.$axios.$post('http://localhost:5000/auth/login', loginData).then(res => {
      localStorage.token = res.token;
      commit('setUser', res)
      return 'success'
    }).catch(err => {
      throw err
    })
  },
  signUp({commit}, userData) {
    return this.$axios.$post('http://localhost:5000/auth/signup', userData).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
      throw err
    })
  },
  checkLogin() {
    return 
  },
  logout({commit}) {
    commit('clearUserData')
    this.$router.push('/')
  }
}

const auth = {
  state,
  getters,
  mutations,
  actions
}

export default auth;