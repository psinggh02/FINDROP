<template>
  <div class="projects">
    <v-card>
          <v-card-text>
            <vue-markdown>{{componentDesc}}</vue-markdown>
          </v-card-text>
    </v-card>
    <v-card>
        <router-view></router-view>
    </v-card>    
  </div>
  
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Components',
  data() {
    return {
      componentDesc: this.$route.params.desc
    }
  },
  components: {
    VueMarkdown
  }, 
};
</script>

<style>
</style>