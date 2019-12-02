<template>
   <v-snackbar 
    class="white--text snackbar"
    v-model="snackBar.enabled"
    :timeout="snackBar.timeout"
    :color="snackBar.color"
    :top="snackBar.top"
  >
    {{ snackBar.message }}
    <v-icon @click="snackBar.enabled = false" class="pa-4" dark>mdi-close</v-icon>
  </v-snackbar>
</template>
<script> 

export default {
  name: 'DCO-Snackbar',
  props: {
      snackBar: {
      type: Object,
      default() {
        return {
          enabled:true,
          timeout:40000,
          color:'green',
          top:true,
          message:'Your message will display here !'
        };
      },
    },
  }
};
</script>
<style>
.v-snack__content {  
  max-height: 50px;
}
</style>