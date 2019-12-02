<template>
  <v-flex xs2 sm2 md2 lg2 xl2>
    <v-dialog v-model="logoutConfirm" :persistent="true" max-width="450">
      <v-card>
        <v-toolbar dark color="primary">
          <v-icon>timer</v-icon>
          <v-card-title class="text--left headline font-weight-light">Session is Expired</v-card-title>
        </v-toolbar>
        <v-card-text class="subheading font-weight-regular pt-4 px-6 pa-0">Session has been inactive for a while. For security reasons, user will be automatically logged out from the application.</v-card-text>
        <v-card-actions class="pa-2">
          <v-spacer></v-spacer>
          <v-btn
            id="ok"
            class="body-1 font-weight-light"
            color="primary"
            dark
            small
            @click="logout();"
          >OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>
<script>
import IdleVue from "idle-vue";
import IdleVueComponent from "idle-vue/src/components/Idle.vue";
import Vue from "vue";
Vue.component("idle-view", IdleVueComponent);
const eventsHub = new Vue();
let customTimeout=4000;
Vue.use(IdleVue, {
  "eventEmitter": eventsHub,
  "idleTime": customTimeout
});
export default {
  "data": () => {
    return {
      "logoutConfirm": false,
      "show": false
    };
  },
  "methods": {
    logout() {
      this.logoutConfirm = false;
    }
  },
  onIdle() {
    this.logoutConfirm = true;
  }
};

</script>