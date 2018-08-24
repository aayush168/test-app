<template>
  <section class="loginWrapper">
    <h2 class="headline mb-5">Login</h2>
    <form ref="loginForm" @submit.prevent="login()">
      <v-layout row wrap>
      <v-flex md6>
        <v-text-field v-model="username" label="Username" :error-messages="usernameErrors" required></v-text-field>
        <v-text-field v-model="password" type="password" :error-messages="passwordErrors" label="Password" required ></v-text-field>
        <p v-if="errorMessage != ''">{{ errorMessage }}</p>
        <button class="mt-5 btn" type="submit">Sign In</button>       
      </v-flex>
      </v-layout>
    </form>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  validations: {
    username: { required },
    password: { required }
  },
  computed: {
    usernameErrors() {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('Username is required.')  
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')  
      return errors
    }
  },
  methods: {
    ...mapActions([ 'signIn' ]),
    login() {
      this.$v.$touch()
      if(this.$v.$error) {
        return true
      } else {
        const user = {
          username: this.username,
          password: this.password
        }
        this.signIn(user).then(res => {
          this.$router.push('Dashboard')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.loginWrapper {
  padding: 30px 0;
  .btn {
    text-transform: capitalize;
    padding: 10px 30px;
    background-color: #555;
    color: white;
    border-radius: 5px;
  }
}

</style>
