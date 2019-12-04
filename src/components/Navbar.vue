<template >
  <nav  v-if="$route.path!='/'">
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>
        Awesome! You added a new project
        <v-btn depressed color="success" class="white--text" @click="snackbar = false">Close</v-btn>
      </span>
    </v-snackbar>
    <v-app-bar flat app>
       
       <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon medium dark  @click="routeToHome();">home</v-icon>
      <v-toolbar-title class="text-uppercase white--text px-4">
        <span class="font-weight-light">FIN</span>
        <span>DROP</span>
      </v-toolbar-title>
      <v-tab/>
      <!-- <v-flex class="search pt-7">
         <v-autocomplete 
          dark outlined
          color="white" 
          dense
          rounded
          label="Search Component"
          :items="availbaleComponents"
          @click="routeToComponent"
      ></v-autocomplete>
      </v-flex> -->
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2"  depressed v-on="on">
            <span class="font-weight-light">Menu</span>
             <v-icon class="ml-2" left>
              expand_more
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn @click="enableNavbar=false;" to="/" depressed>
        <span class="font-weight-light">Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="primary">
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center">
            <v-avatar size="80">
              <img src="../assets/logo.png" alt="avatar" />
            </v-avatar>
            <v-toolbar-title class="text-uppercase white--text">
              <span class="font-weight-light">FIN</span>
              <span>DROP</span>
            </v-toolbar-title>            
            <!-- <div class="white--text">FINDROP</div> -->
          </div>
        </v-col>
      </v-row>
      <v-list dense>
        <v-list-item color="primary" v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import components from '@/components.json';
export default {
  data() {
    return {
      drawer: false,
      snackbar: false,
      items: [
        { title: "Home", icon: "home", route: "/home" },
        { title: "Components", icon: "widgets", route: "/components" },
        { title: "Team", icon: "person", route: "/team" }
      ],
      results:'',
      result:[],
      model:'',
      components,
      availbaleComponents:[],
       searchQuery:'',
       enableNavbar:false
    };
  },
  created(){
    for(let i=0;i<components.length;i++){
  this.availbaleComponents.push(components[i].name);
    }
  },
  methods:{
    routeToComponent(){
     },
     routeToHome(){
       this.$router.push('/home');
     }
  }
};
</script>
<style>
.search{
  max-width: 25%;
}
</style>