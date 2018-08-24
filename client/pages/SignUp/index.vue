<template>
  <v-container grid-list-lg>
    <section class="signupContainer">
      <h2 class="headline mb-5">SignUp</h2>
      <form ref="form" @submit.prevent="submit()">
        <v-layout row wrap>
        <v-flex md6>
          <v-text-field v-model="firstname" :error-messages="firstnameErrors" label="First Name" required></v-text-field>
        </v-flex>
        <v-flex md6>
          <v-text-field v-model="lastname" :error-messages="lastnameErrors" label="Last Name" required></v-text-field>
        </v-flex>
        </v-layout>
        <v-text-field v-model="username" :error-messages="usernameErrors" label="Username" required></v-text-field>
        <span>You can enter letters, numbers & peroids.</span>
        <v-layout row wrap>
        <v-flex md6>
          <v-text-field v-model="password" type="password" :error-messages="passwordErrors" label="Password" required></v-text-field>
        </v-flex>
        <v-flex md6>
          <v-text-field v-model="confirmPassword" type="password" :error-messages="confirmPasswordErrors" label="Confirm Password" required></v-text-field>
        </v-flex>
        </v-layout>
        <v-text-field v-model="email" :error-messages="emailErrors" label="Email" required></v-text-field>       
        <v-text-field v-model="mobileNumber" :error-messages="mobileNumberErrors" label="Mobile Number" required></v-text-field>                     
        <button class="mt-5 btn">submit</button>
      </form>
    </section>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength, email, alpha, numeric, sameAs } from 'vuelidate/lib/validators'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        mobileNumber: ''
      }
    },
    validations: {
      firstname: { required, alpha},
      lastname: { required, alpha},
      username: { required},
      password: { required, minLength},
      confirmPassword: { required, sameAsPassword: sameAs('password')},
      email: { required, email},
      mobileNumber: { required, numeric}
    },
    computed: {
      firstnameErrors() {
        const errors = []
        if (!this.$v.firstname.$dirty) return errors
        !this.$v.firstname.required && errors.push('Firstname is required.')
        !this.$v.firstname.alpha && errors.push('Invalid Firstname')        
        return errors
      },
      lastnameErrors() {
        const errors = []
        if (!this.$v.lastname.$dirty) return errors
        !this.$v.lastname.required && errors.push('Lastname is required.')
        !this.$v.lastname.alpha && errors.push('Invalid Lastname')        
        return errors
      },
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
      },
      confirmPasswordErrors() {
        const errors = []
        if (!this.$v.confirmPassword.$dirty) return errors
        !this.$v.confirmPassword.required && errors.push('Confirm Password is required.')
        !this.$v.confirmPassword.sameAsPassword && errors.push('Password mismatch.')        
        return errors
      },
      emailErrors() {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.required && errors.push('Email is required.')
        !this.$v.email.email && errors.push('Invalid Email.')        
        return errors
      },
      mobileNumberErrors() {
        const errors = []
        if (!this.$v.mobileNumber.$dirty) return errors
        !this.$v.mobileNumber.required && errors.push('Mobile Number is required.')
        !this.$v.mobileNumber.numeric && errors.push('Invalid Mobile Number')        
        return errors
      }
    },
    methods: {
      ...mapActions(['signUp']),
      submit () {
        this.$v.$touch()
        if(this.$v.$error) {
          return true
        } else {
          const user = {
            fullname: this.firstname+' '+this.lastname,
            username: this.username,
            password: this.password,
            email: this.email,
            mobileNumber: this.mobileNumber
          }
          this.signUp(user).then().catch(err => {
            console.log(err)
          })
        }
      },
    }
  }
</script>

<style lang="stylus">
@import '~assets/stylus/variables.styl';

.signupContainer {
  max-width: 600px;
  margin: auto;
}

</style>
