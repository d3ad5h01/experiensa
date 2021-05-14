<template>
  <div class="Dashboard">
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
            <v-list-item-group class="text--white" color="white">
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

      <v-main class="grey lighten-2 ml-4">
        <v-row class="mt-0">
          <v-col cols="4"
            ><v-row>
              <v-col cols="12"> </v-col>
              <v-col cols="12">
                <v-btn color="green" dark class="mb-2" @click="putDashboardnums"
                  >Save<v-icon>mdi-content-save</v-icon></v-btn
                >
                <v-card class="mx-auto pa-10" elevation="12" light>
                  <p class="text-h5 text-center">Companies Registered</p>
                  <p class="text-h2 text-center font-weight-bold">
                    <v-text-field outlined filled v-model="cr"> </v-text-field>
                  </p>

                  <p class="text-h5 text-center">Total Internships</p>
                  <p class="text-h2 text-center font-weight-bold">
                    <v-text-field outlined filled v-model="ti"> </v-text-field>
                  </p>
                  <p class="text-h5 text-center">Students Registered</p>
                  <p class="text-h2 text-center font-weight-bold">
                    <v-text-field outlined filled v-model="sr"> </v-text-field>
                  </p>
                  <p class="text-h5 text-center">Students Placed</p>
                  <p class="text-h2 text-center font-weight-bold">
                    <v-text-field outlined filled v-model="sp"> </v-text-field>
                  </p>
                </v-card>
              </v-col> </v-row
          ></v-col>
          <v-col cols="8">
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-3 rounded-ls" elevation="0">
                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-toolbar-title class="text-h4 green--text"
                      >Announcements</v-toolbar-title
                    >
                    <v-divider class="mx-2" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field
                      light
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                      color="green"
                    ></v-text-field>
                    <v-spacer></v-spacer>

                    <v-dialog
                      class="grey lighten-2"
                      v-model="dialog"
                      max-width="500px"
                    >
                      <v-btn
                        slot="activator"
                        color="green"
                        dark
                        class="mb-2"
                        @click="dialog = true"
                        >New Item<v-icon>mdi-pencil-plus</v-icon></v-btn
                      >
                      <v-card light class="grey lighten-2">
                        <v-card-title>
                          <span class="headline">Edits</span>
                        </v-card-title>

                        <v-card-text color="grey lighten-2">
                          <v-container grid-list-md class="grey lighten-2">
                            <v-layout wrap>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="title"
                                  label="Title"
                                  class="grey lighten-2"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-textarea
                                  outlined
                                  v-model="description"
                                  color="green"
                                >
                                </v-textarea>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
                          <v-btn
                            color="cyan darken-1"
                            flat
                            @click.native="onAddAnnouncement"
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
                      :items="announcementcards"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }" min-width="50%">
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
                              announcementcards[announcementcards.indexOf(item)]
                                ._id,
                              item
                            )
                          "
                        >
                          mdi-delete
                        </v-icon>

                        <btn> </btn>
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
      let response = await $axios.$get(
        "http://localhost:3000/api/announcementcards"
      );

      return {
        announcementcards: response.announcementcards,
      };
    } catch (err) {}
  },
  data: () => ({
    cr: "",
    sp: "",
    sr: "",
    ti: "",
    title: "",
    ide: "",
    description: "",
    ind: "",
    cards: ["Announcements"],
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
        to: "/AdminDashboard",
      },
      {
        icon: "mdi-account",
        title: "Students",
        to: "/AdminStudents",
      },
      {
        icon: "mdi-bookshelf",
        title: "Study Material",
        to: "/AdminMaterial",
      },
      {
        icon: "mdi-file-document-multiple",
        title: "Internships",
        to: "/AdminInternships",
      },
      {
        icon: "mdi-logout",
        title: "Logout",
        to: "/Logout",
      },
    ],
    search: "",
    dialog: false,
    edt: 0,
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: true,
        value: "title",
      },
      { text: "Description", value: "description", align: "left" },
      { text: "Actions", value: "edit", sortable: false, align: "left" },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      description: 0,
    },
    defaultItem: {
      title: "",
      description: 0,
    },
  }),
  computed: {},

  methods: {
    async getDashboardnums() {
      try {
        let response = await this.$axios.$get(
          "http://localhost:3000/api/dashboardcards/60670965a42f7954707fcd99"
        );
        //return {
        this.cr = response.dashboardcard.companiesRegistered;
        this.ti = response.dashboardcard.totalInternships;
        this.sr = response.dashboardcard.studentsRegistered;
        this.sp = response.dashboardcard.studentsPlaced;
        // };
      } catch (err) {
        console.log(err);
      }
    },
    async putDashboardnums() {
      try {
        let data = {
          companiesRegistered: this.cr,
          totalInternships: this.ti,
          studentsRegistered: this.sr,
          studentsPlaced: this.sp,
        };
        let response = await this.$axios.$put(
          "http://localhost:3000/api/dashboardcards/60670965a42f7954707fcd99",
          data
        );
      } catch (err) {
        console.log(err);
      }
    },
    editItem(item) {
      this.edt = 1;
      this.title = this.announcementcards[
        this.announcementcards.indexOf(item)
      ].title;
      this.description = this.announcementcards[
        this.announcementcards.indexOf(item)
      ].description;
      this.ind = this.announcementcards.indexOf(item);
      this.dialog = true;
    },

    async deleteItem(id, item) {
      const index = this.announcementcards.indexOf(item);

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/announcementcards/${id}`
        );
        console.log(response);
        if (response.status) {
          this.announcementcards.splice(index, 1);
        }
      } catch (err) {}
    },

    async onAddAnnouncement() {
      if (this.edt === 1) {
        this.ide = this.announcementcards[this.ind]._id;
        let data = {
          title: this.title,
          description: this.description,
        };
        let result = await this.$axios.$put(
          `http://localhost:3000/api/announcementcards/${this.ide}`,
          data
        );
        this.dialog = false;
        this.announcementcards[this.ind].title = this.title;
        this.announcementcards[this.ind].description = this.description;
        this.edt = 0;
      } else {
        try {
          console.log(this.title);
          console.log(this.description);

          let data = {
            title: this.title,
            description: this.description,
          };
          let response = await this.$axios.$post(
            "http://localhost:3000/api/announcementcards",
            data
          );
          this.announcementcards.push(data);
          this.title = "";
          this.description = "";
        } catch (err) {
          console.log(err);
        }
      }
      //this.dialog=false;
    },
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/AdminLogin");
        }
        let data = {
          cookie: cookie,
        };
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/adminverify/`,
          data
        );
        console.log(verify_response);
        if (!verify_response.success) {
          this.$router.push("/AdminLogin");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  beforeMount() {
    this.verify();
    this.getDashboardnums();
  },
};
</script>
