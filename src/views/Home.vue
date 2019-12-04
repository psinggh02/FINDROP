<template>
  <div class="home">
    <v-container class="my-5">
      <v-card flat v-for="project in projects" class="mb-1" :key="project.title">
        <v-row wrap :class="`ma-0 pa-4 project ${project.status}`">
          <v-col xs12 md2>
            <div class="caption grey--text">Component Name</div>
            <div>{{ project.name }}</div>
          </v-col>
          <v-col xs12 sm3 md4>
            <div class="caption grey--text">Description</div>
            <div>{{ project.desc }}</div>
          </v-col>
          <v-col xs12 sm3 md2>
            <div class="caption grey--text">Issues</div>
            <div>{{ project.issues }}</div>
          </v-col>
          <v-col xs12 sm3 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
                @click="openComponent(project)"
              >Example</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import components from '@/components.json';
import modalDesc from 'raw-loader!@/components/description/modal.txt';
import cameraDesc from 'raw-loader!@/components/description/camera.txt';
import snackbarDesc from 'raw-loader!@/components/description/snackbar.txt';
import drawerDesc from 'raw-loader!@/components/description/drawer.txt';
import datePickerDesc from 'raw-loader!@/components/description/datePicker.txt';
import idleTimeoutDesc from 'raw-loader!@/components/description/idleTimeout.txt';
import stepDesc from 'raw-loader!@/components/description/step.txt';
export default {
  data() {
    return {
      projects: components
    }
  },
  methods: {   
    openComponent(project){
      switch(project.id){
        case 'modal':
              this.$router.push({ 
        name: project.id, 
       params: {desc: modalDesc} 
      });
        break;
        case 'camera':
              this.$router.push({ 
        name: project.id, 
       params: {desc: cameraDesc} 
      });
        break;
        case 'snackbar':
              this.$router.push({ 
        name: project.id, 
       params: {desc: snackbarDesc} 
      });
        break;
        case 'drawer':
              this.$router.push({ 
        name: project.id, 
       params: {desc: drawerDesc} 
      });
        break;
        case 'step':
              this.$router.push({ 
        name: project.id, 
       params: {desc: stepDesc} 
      });
        break;
        case 'idleTimeout':
              this.$router.push({ 
        name: project.id, 
       params: {desc: idleTimeoutDesc} 
      });
      break;
        case 'datePicker':
              this.$router.push({ 
        name: project.id, 
       params: {desc: datePickerDesc} 
      });
      break;

  default: return 0;

}
    },
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    clear() {
      this.projects.reverse();
    }
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>