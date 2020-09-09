<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
              color="primary"
              dark
              flat
          >
            <v-toolbar-title>Войти</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert
            :value="error"
            type="warning">
                {{error}}
            </v-alert>
            <v-form>
              <v-text-field
                  label="Логин"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                  v-model="email"
              ></v-text-field>

              <v-text-field
                  id="password"
                  label="Пароль"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                  v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.prevent="signup" :disabled="processing">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "AuthPage",
    data(){
      return{
        email:null,
        password: null
      }
    },
    computed:{
      error(){
        return this.$store.getters.getError
      },
      processing(){
        return this.$store.getters.getProcessing
      },
      isUserAuthenticated(){
        return this.$store.getters.isUserAuthenticated
      }
    },
    watch:{
      isUserAuthenticated(val){
        if(val===true){
          alert("auth")
          this.$router.push("/signin")
        }
      }
    },
    methods:{
      signup(){
        this.$store.dispatch('SIGNUP', {email:this.email, password:this.password})
      }
    }  
  }
</script>

<style scoped>

</style>
