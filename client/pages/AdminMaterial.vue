<template>
  <div class="Material">
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
<!--            <v-list-item-group-->
<!--              v-model="selectedItem"-->
<!--              class="text&#45;&#45;white"-->
<!--              color="white"-->
<!--            >-->
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
                      >Study Material</v-toolbar-title
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

                    <v-dialog light v-model="dialog" max-width="700px">
                      <v-btn
                        slot="activator"
                        color="green"
                        light
                        class="mb-2"
                        @click="dialog = true"
                        >New Item</v-btn
                      >
                      <v-card class="grey lighten-2" elevation="0">
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
                                <v-text-field
                                  v-model="link"
                                  label="link"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-textarea
                                  outlined
                                  v-model="text"
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
                            color="green"
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
                      :items="studycards"
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
                              studycards[studycards.indexOf(item)]._id,
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
      let response = await $axios.$get("http://localhost:3000/api/studycards");

      return {
        studycards: response.studycards,
      };
    } catch (err) {}
  },
  data: () => ({
    title: "",
    ide: "",
    link: "",
    text: "",
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
      { text: "Links", value: "link" },
      { text: "Text", value: "text" },
      { text: "Actions", value: "edit", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      link: 0,
    },
    defaultItem: {
      title: "",
      link: 0,
    },
  }),
  computed: {},

  methods: {
    editItem(item) {
      this.edt = 1;
      this.title = this.studycards[this.studycards.indexOf(item)].title;
      this.link = this.studycards[this.studycards.indexOf(item)].link;
      this.text = this.studycards[this.studycards.indexOf(item)].text;

      this.ind = this.studycards.indexOf(item);
      this.dialog = true;
    },

    async deleteItem(id, item) {
      const index = this.studycards.indexOf(item);

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/studycards/${id}`
        );
        console.log(response);
        if (response.status) {
          this.studycards.splice(index, 1);
        }
      } catch (err) {}
    },

    async onAddAnnouncement() {
      if (this.edt == 1) {
        this.ide = this.studycards[this.ind]._id;
        let data = {
          title: this.title,
          link: this.link,
        };
        let result = await this.$axios.$put(
          `http://localhost:3000/api/studycards/${this.ide}`,
          data
        );
        this.dialog = false;
        this.studycards[this.ind].title = this.title;
        this.studycards[this.ind].link = this.link;
        this.edt = 0;
      } else {
        try {
          console.log(this.title);
          console.log(this.link);

          let data = {
            title: this.title,
            link: this.link,
          };
          let response = await this.$axios.$post(
            "http://localhost:3000/api/studycards",
            data
          );
          this.studycards.push(data);
          this.title = "";
          this.link = "";
        } catch (err) {
          console.log(err);
        }
      }
      //this.studycards.push(data);
      //this.dialog=false;
      //this.$router.push("/Dashboard");
    },

    async save2(id, item) {
      //this.dialog2=false;
      onAddAnnouncement();
      // deleteItem (id,item);
      //this.$router.push("/Dashboard");
    },

    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/AdminLogin");
        }
        let data = {
          cookie: cookie,
        }
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/adminverify/`, data
        );
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
  },
};
</script>

