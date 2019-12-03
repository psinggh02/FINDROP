<template>
  <v-dialog
    v-model="config.enabled"
    :width="config.width"
    :persistent="config.persistent"
  >
    <v-card>
      <v-toolbar
        color="primary"
        class="subtitle-1 white--text"
        max-height="50px"
      >
        <v-icon
           v-if="Boolean(config.icon)"
            @click="onClose"
            class="pb-3"
            dark
        >{{config.icon}}</v-icon>
        <span class="pb-3">{{config.title}}</span>
        <v-spacer></v-spacer>
        <span class="pb-3">
          <v-icon
            v-if="Boolean(config.close)"
            @click="onClose"
            dark
            class="close-btn"
          >mdi-close</v-icon>
        </span>
      </v-toolbar>
      <v-card-text class="pa-4">
        <slot name="modalContent"></slot>
        <font class="subtitle-1 font-weight-regular black--text">{{ config.values }}</font>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pa-2">
        <v-spacer></v-spacer>
        <v-btn
          v-if="Boolean(config.saveButton)"
          @click="onSave"
          color="primary"
          :disabled="config.enableSave"
          class="font-weight-light text-none save-btn"
          outlined
        >{{config.saveButton}}</v-btn>
        <v-btn
          v-if="Boolean(config.cancelButton)"
          @click="onCancel"
          color="primary"
          :disabled="config.enableCancel"
          class="font-weight-light text-none cancel-btn"
          outlined
        >{{config.cancelButton}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DCO-Modal',
  props: {
    config: {
      type: Object,
        default() {
        return {
          enabled:true,
          width:450,
          icon:'mdi-search',
          title:'Title',
          close:true,
          values:'Slot Data',
          saveButton:'Save',
          cancelButton:'Cancel'
        };
      },

    },
  },
  methods: {
    onClose() {
      this.config.enabled = false;
    },
    onSave() {
      if (this.config.saveCallback) {
        this.config.saveCallback();
      }
      this.config.enabled = false;
    },
    onCancel() {
      if (this.config.cancelCallback) {
        this.config.cancelCallback();
      }
      this.config.enabled = false;
    },
  },
};
</script>
