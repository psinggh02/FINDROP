<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <h5>Add a New Project</h5>
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid" ref="form">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    :rules="titleRules"
                    :counter="20"
                    label="Title"
                    prepend-icon="folder"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="content"
                    :rules="contentRules"
                    :counter="200"
                    label="Information"
                    prepend-icon="edit"
                    required
                  ></v-textarea>
                </v-col>

                <v-col cols="12">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="due"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :rules="dueRules"
                        :value="formattedDate"
                        label="Pick a due date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="due" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(due)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12">
                  <v-btn class="mr-2" color="success" @click="submit" :loading="loading">
                    <v-icon left>save</v-icon>
                    <span class="font-weight-light">Add new project</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";
export default {
  data() {
    return {
      valid: false,
      due: null,
      title: "",
      content: "",
      loading: false,
      titleRules: [
        v => !!v || "Title is required",
        v => v.length <= 20 || "Title must be less than 20 characters"
      ],
      contentRules: [
        v => !!v || "Information is required",
        v => v.length <= 200 || "Information must be less than 200 characters"
      ],
      dueRules: [v => !!v || "Due Date is required"],
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, "Do MMM YYYY"),
          person: "Yoshi",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded');
            console.log("add to db");
          });
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYY") : "";
    }
  }
};
</script>

<style>
</style>