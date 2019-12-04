<template>
  <div>
    <nav>
      <v-app-bar flat app>
   <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">{{applicationName}}</span>
        
      </v-toolbar-title>
      <v-tab/>
      <v-spacer></v-spacer>
      </v-app-bar>
       <v-navigation-drawer
      :right="$vuetify.rtl"
      class="appDrawer"
      :mini-variant.sync="mini"
      :dark="$vuetify.dark"
      app
      v-model="drawer"
      hide-overlay
      width="271"
    >
      <v-layout justify-center pa-5>
        <div pa-5>
          <v-flex pa-5>
            <div align="center">
               <div class="header__logo"></div>
              <span class="font-weight-bold">{{applicationName}}</span>
            </div>
          </v-flex>
        </div>
      </v-layout>
      <v-divider></v-divider>
      <v-list>
        <div>
          <template v-for="item in commonMenuItems">
            <v-list-item class="v-list__tile--link theme--light" :key="item.title">
              <v-icon color="primary">{{ item.icon }}</v-icon>
              <v-flex class="pl-4"></v-flex>
              <v-list-item-title class="pa-0">
                <router-link
                  style="text-decoration: none;"
                  active-class="primary--text active"
                  class="body-2 font-weight-bold"
                  v-bind:to="item.path"
                >{{item.title}}</router-link>
              </v-list-item-title>
            </v-list-item>
          </template>
        </div>
      </v-list>
      <v-flex class="pl-2">
        <v-btn
          aria-label="logoutButton"
          id="logoutButton"
          class="logoutButton white--text body-1 font-weight-light"
          color="primary"
          to="/"
        >Logout</v-btn>
      </v-flex>
    </v-navigation-drawer>
    </nav>
  </div>
</template>
<script>
export default {
  name: "drawer",
  props: {
    expanded: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
     applicationName:'FINDROP',
          commonMenuItems:[
    {
        "icon": "mdi-home",
        "title": "Title 1",
        "path": "/",
        "name": "Home"
    },
    {
        "icon": " mdi-file-document-box",
        "title": "Title 2",
        "path": "/",
        "name": "ScreenMaintenance"
    },
    {
        "icon": " mdi-apps",
        "title": "Title 3",
        "path": "/",
        "name": "AppConfiguration"
    }
      ],
      drawer: true,
      mini: false,
      right: null
    };
  },
};
</script>
<style scoped>
.logoutButton {
  position: absolute;
  width: 90%;
  bottom: 15px;
  right: 5%;
  text-align: center;
}

</style>