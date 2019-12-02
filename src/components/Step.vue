<template>
  <div class="dco-main-container">
    <v-row class="justify-center">
      <v-card
      class="ma-2"
      width="300"
      v-for="(row,key) in  stepCards"
      :key="key"
      >
      <v-toolbar color="primary" class="body-2">
        <v-icon class="white--text" large>{{row.icon}}</v-icon>
        <font class="pl-3 white--text">{{row.label}}</font>
        <v-spacer></v-spacer>
        <p class="white--text pt-4">
          <v-icon class="white--text" style="cursor: pointer;" @click=" stepDeleteDialog=true;deleteStep(row)">mdi-delete</v-icon>
        </p>
      </v-toolbar>
      <v-card-text class="cardPadding">
        <v-text-field
        aria-label="text"
       color="primary"
        v-model="row.desc"
        :placeholder="row.desc"
        ></v-text-field>

        <v-layout row wrap class="py-0 dco-main-container--layouts pt-6">
          <v-flex xs5 sm5 md4 lg6 xl4>
            <span>Enabled</span>
          </v-flex>
          <v-switch
          aria-label="switch"
          class="switch"
         color="primary"
          v-model="row.enabled"
          ></v-switch>
        </v-layout>

        <v-layout row wrap class="py-3 dco-main-container--layouts">
          <v-flex xs5 sm5 md4 lg6 xl4>
            <span>Mandatory</span>
            </v-flex>
          <v-switch aria-label="switch" color="primary" v-model="row.mandatory"></v-switch>
        </v-layout>
      </v-card-text>
      <v-card-actions class="pa-4 text-xs-right">
        <v-spacer></v-spacer>
        <v-btn  aria-label="settingsButton" outlined
            id="settingsButton" @click="configureStep(row)" color="primary">
          <v-icon right>mdi-settings</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
    <v-dialog persistent v-model="stepDeleteDialog" max-width="350">
        <v-card v-if="stepDeleteDialog">
           <v-toolbar dark
          class="title font-weight-light"
         color="primary">
            <span>Delete Step</span>
           </v-toolbar>
           <v-card-text class="pa-0">
            <v-card-title color="primary" class="title font-weight-regular">Are you sure to delete this step ?
            </v-card-title>
           </v-card-text>
            <v-divider/>
          <v-card-actions class="pa-2">
            <v-spacer></v-spacer>
            <v-btn
              aria-label="cancelButton"
              id="cancelButton"
              class="text-none font-weight-light"
              color="primary"
              outlined
              @click="deleteStepConfirm(stepToDelete)"
            >Yes</v-btn>
            <v-btn
              aria-label="doneButton"
              id="doneButton"
              class="text-none font-weight-light"
              color="primary"
              outlined
              @click="stepDeleteDialog=false"
            >No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
     stepCards: {
      type: Array,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {
      dialog: false,
      stepDeleteDialog: false,
      deleteSteps: false,
      stepToDelete: {},
      stepCard:[
         {
        "label": "Step 1",
        "desc": "Custom Description",
        "enabled": true,
        "mandatory": true,
        "delete": false,
        "icon": "mdi-account-circle",
        "route": ""
         }
      ]
    };
  },
  created(){
    this.$props.stepCards=this.stepCard;
  },
  methods: {
    configureStep(step) {
      console.log('Step to configure' + step);
    },
    deleteStep(step) {
      this.stepToDelete = step;
    },
    deleteStepConfirm(stepToDelete) {
      console.log('Step to delete'+ stepToDelete);
      this.stepDeleteDialog=false;
    },
  },
};
</script>

<style lang="scss">
.dco-main-container {
  width: 100%;
  &--layouts {
    margin: -30px 0px -30px 0px;
  }
}
.cardPadding {
  padding: 0px 16px 0px 16px;
}
.v-input--selection-controls .v-input__control {
  margin-top: -20px;
}
</style>
