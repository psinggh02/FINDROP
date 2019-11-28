<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex class="alignCenter" xs12 sm12 md6 lg6>
        <v-flex class="loginTitle" xs12 sm12 md12 lg12>
         <div class="text-center">
            <v-avatar size="80">
              <img src="../assets/logo.png" alt="avatar" />
            </v-avatar>
            <v-toolbar-title >
              <span class="font-weight-regular">FIN</span>
              <span class="font-weight-bold">DROP</span>
            </v-toolbar-title>            
          </div>
        </v-flex>
        <v-layout>
          <v-tab disabled class="hidden-md-and-up" />
          <v-flex xs0 lg3 sm2 md0 xl3 class="hidden-xs-only" />
          <v-flex>
            <v-form lazy-validation ref="loginForm">
              <v-flex xs9 sm8 md10 lg8>
                <v-text-field
                  append-icon="mdi-account"
                  name="username"
                  label="Username"
                  type="text"
                  :rules="loginRules"
                  :error="errorLogin"
                color="primary"
                  v-model="username"
                  required
                  @keyup.enter="username.length>0 ? login(): false;"
                ></v-text-field>
              </v-flex>
              <v-flex xs9 sm8 md10 lg8>
                <v-text-field
                  append-icon="mdi-lock"
                  name="password"
                   label="Password"
                  :rules="loginRules"
                  id="password"
                  type="password"
                  color="primary"
                  v-model="password"
                  :error="errorLogin"
                  :error-messages="errorMessage"
                  required
                  @keyup.enter="password.length >0 ? login(): false;"
                ></v-text-field>
              </v-flex>
            </v-form>
            <v-flex xs9 sm8 md10 lg8 class="loginButton">
              <v-btn
                id="login"
                aria-label="login"
                color="primary"
                dark
                @click="login"
                :loading="loading"
                class="body-1 font-weight-light white--text text-none"
              >Login</v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        class="hidden-sm-and-down"
        id="gradient"
        xs12
        sm12
        md6
        lg6
      ></v-flex>
    </v-layout>
  </v-container>
</template>
<script >

import Event from '@/util/event.js';
export default {
  data: () => {
    return {
      errorLogin: false,
      errorMessage: "",
      loading: false,
      loginRules: [
        v => {
          return Boolean(v);
        }
      ],
      password: "",
      username: ""
    };
  },
   created(){
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "admin") {
        this.$router.push({ name: "home" });
        Event.$emit("enableNavbar",true);
      } else {
        this.errorLogin = true;
        this.errorMessage = "Invalid username or password";
      }
    }
  }
};
</script>
<style >
#images {
  height: 70px;
  margin-top: 50px;
}
#gradient {
  height: 100vh;
   background-image: linear-gradient(#694ed6,
#694ed6,
#c137a2,
#f05055,
#e3241c)
}
.alignCenter {
  margin-top: 15vh;
}
.loginTitle {
  text-align: center;
}
.loginButton {
  text-align: right;
}
.v-application .mb-4 {
     margin-bottom: 0px !important; 
}
</style>