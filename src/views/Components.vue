<template>
  <div class="projects">
    <v-card>
          <h1 class="headline grey--text">Components</h1>
          <v-card-text>Component Description</v-card-text>
          <v-card>
              <router-view></router-view>
          </v-card>
    </v-card>
  </div>
  
</template>

<script>

export default {
  name: 'Components'
};
</script>

<style>
</style>