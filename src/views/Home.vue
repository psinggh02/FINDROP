<template>
  <div class="home">
    <!-- <h1 class="headline grey--text">Components</h1> -->
    <v-container class="my-5">
      <!-- <v-row class="mb-3 ml-1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn small depressed color="grey lighten-4" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
          <span>Ordering by project name</span>
        </v-tooltip>

        <v-btn small depressed color="grey lighten-4" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">By Person Name</span>
        </v-btn>
        <v-btn small depressed color="grey lighten-4" @click="clear()">
          <v-icon left small>clear</v-icon>
          <span class="caption text-lowercase">Clear</span>
        </v-btn>
      </v-row> -->
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
              >Example</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb';
export default {
  data() {
    return {
      projects: [
        {
          name: "Drawer",
          issues: "1",
          status: "complete",
          desc:
            "Component Description"
        },
        {
          name: "Modal",
          issues: "1",
          status: "complete",
          desc:
            "Component Description"
        },
        {
          name: "Steps",
          issues: "2",
          status: "ongoing",
          desc:
            "Component Description"
        },
        {
          name: "Camera",
          issues: "2",
          status: "ongoing",
          desc:
            "Component Description"
        }
      ]
    };
  },
  created(){
    db.collection('projects').onSnapshot(res =>{
      const changes = res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added')
        {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  methods: {
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