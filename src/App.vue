<template>
  <v-app class="grey lighten-4">
    <Navbar/>
    <v-content >
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',
  components:{Navbar},
  data: () => ({
    //
  }),
};
</script>
<style>
nav header {
  background: linear-gradient(to right, #694ED6, #C137A2 90%, #E40046 100%) !important;
}
</style>