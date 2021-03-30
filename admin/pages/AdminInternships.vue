<template>
  <div class="Internships">
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        src="https://images.unsplash.com/photo-1561795845-1c76443dbec3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"
        width="15%"
        permanent
        class="elevation-12"
      >
        <v-flex justify-center>
          <v-list-item>
            <div
              class="layout align-center justify-center"
              style="max-width: 100px; max-height: 100"
            >
              <v-img
                class="rounded-circle ml-14 mt-5 pa-4"
                src="https://recruitment.iiita.ac.in/faculty_recruitment/IIIT_logo_transparent.gif"
              ></v-img>
            </div>
          </v-list-item>

          <v-list-item> </v-list-item>

          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item-group
              v-model="selectedItem"
              class="text--white"
              color="white"
            >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                router
                exact
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
      </v-navigation-drawer>

      <v-main class="grey lighten-2">
        <v-row>
          <v-col cols="12">
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 rounded-ls" elevation="0">
                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-toolbar-title class="text-h4 green--text darken-5"
                      >Internships</v-toolbar-title
                    >
                    <v-divider class="mx-2" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field
                      light
                      color="green"
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                    <v-spacer></v-spacer>

                    <v-dialog light v-model="dialog" max-width="500px">
                      <v-btn
                        slot="activator"
                        color="green"
                        dark
                        class="mb-2"
                        @click="dialog = true"
                        >New Item</v-btn
                      >
                      <v-card class="grey lighten-2">
                        <v-card-title>
                          <span class="headline">Edits</span>
                        </v-card-title>

                        <v-card-text color="grey lighten-2">
                          <v-container grid-list-md class="grey lighten-2">
                            <v-layout wrap>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="company"
                                  label="company"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="stipend"
                                  label="stipend"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="duration"
                                  label="Duration"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="startDate"
                                  label="Start date"
                                  color="black"
                                ></v-text-field>
                              </v-flex>

                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="applyBy"
                                  label="Apply By"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
                          <v-btn
                            color="green"
                            flat
                            @click.native="onAddinterncard"
                            >Save</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>

                  <v-container class="grey lighten-2">
                    <v-data-table
                      light
                      :headers="headers"
                      :items="interncards"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }">
                        <v-icon
                          x-large
                          class="mr-2"
                          color="green"
                          @click="editItem(item)"
                        >
                          mdi-pencil
                        </v-icon>

                        <v-icon
                          x-large
                          color="red"
                          @click="
                            deleteItem(
                              interncards[interncards.indexOf(item)]._id,
                              item
                            )
                          "
                        >
                          mdi-delete
                        </v-icon>
                      </template>
                    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/interncards");

      return {
        interncards: response.interncards,
      };
    } catch (err) {}
  },
  data: () => ({
    title: "",
    ide: "",
    text: "",
    description: "",
    ind: "",
    cards: ["interncards"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    items: [
      {
        icon: "mdi-apps",
        title: "Dashboard",
        to: "/Dashboard",
      },
      {
        icon: "mdi-account",
        title: "Students",
        to: "/Students",
      },
      {
        icon: "mdi-bookshelf",
        title: "Study Material",
        to: "/Material",
      },
      {
        icon: "mdi-file-document-multiple",
        title: "Internships",
        to: "/Internships",
      },
      {
        icon: "mdi-logout",
        title: "Logout",
        to: "/",
      },
    ],
    search: "",
    dialog: false,
    edt: 0,

    /*interncard.company = req.body.company;
    interncard.role = req.body.role;
    interncard.stipend = req.body.stipend;
    interncard.duration = req.body.duration;
    interncard.startDate = req.body.startDate;
    interncard.applyBy = req.body.applyBy; */
    headers: [
      {
        text: "Company",
        align: "left",
        sortable: true,
        value: "company",
      },
      { text: "Stipend", value: "stipend" },
      { text: "Duration", value: "duration" },
      { text: "Start Date", value: "startDate" },
      { text: "Apply By", value: "applyBy" },

      { text: "Actions", value: "edit", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      description: 0,
    },
    defaultItem: {
      company: "",
      stipend: "",
      duration: "",
      startDate: "",
      applyBy: "",
    },
  }),
  computed: {},
  methods: {
    editItem(item) {
      this.edt = 1;
      this.company = this.interncards[this.interncards.indexOf(item)].company;
      this.stipend = this.interncards[this.interncards.indexOf(item)].stipend;
      this.duration = this.interncards[this.interncards.indexOf(item)].duration;

      this.startDate = this.interncards[
        this.interncards.indexOf(item)
      ].startDate;
      this.applyBy = this.interncards[this.interncards.indexOf(item)].applyBy;

      this.ind = this.interncards.indexOf(item);
      this.dialog = true;
    },

    async deleteItem(id, item) {
      const index = this.interncards.indexOf(item);

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/interncards/${id}`
        );
        console.log(response);
        if (response.status) {
          this.interncards.splice(index, 1);
        }
      } catch (err) {}
    },

    async onAddinterncard() {
      if (this.edt == 1) {
        this.ide = this.interncards[this.ind]._id;
        let data = {
          company: this.company,
          stipend: this.stipend,
          duration: this.duration,
          startDate: this.startDate,
          applyBy: this.applyBy,
        };

        console.log(data);
        let result = await this.$axios.$put(
          `http://localhost:3000/api/interncards/${this.ide}`,
          data
        );
        this.dialog = false;

        this.interncards[this.ind].company = this.company;
        this.interncards[this.ind].stipend = this.stipend;
        this.interncards[this.ind].duration = this.duration;
        this.interncards[this.ind].startDate = this.startDate;
        this.interncards[this.ind].applyBy = this.applyBy;

        this.edt = 0;
      } else {
        try {
          console.log(this.company);
          //console.log(this.);

          let data = {
            company: this.company,
            stipend: this.stipend,
            duration: this.duration,
            startDate: this.startDate,
            applyBy: this.applyBy,
          };
          let response = await this.$axios.$post(
            "http://localhost:3000/api/interncards",
            data
          );
          this.interncards.push(data);
          this.company = "";
          this.stipend = "";
          this.duration = "";
          this.startDate = "";
          this.applyBy = "";
        } catch (err) {
          console.log(err);
        }
      }
      //this.dialog=false;
    },
  },
};
</script>

