<template>
  <div class="Students">
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
          <v-col cols="8">
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 rounded-ls" elevation="0">
                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-toolbar-title class="text-h4 green--text"
                      >Student Database</v-toolbar-title
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

                    <v-dialog v-model="dialog" max-width="500px">
                      <v-btn
                        slot="activator"
                        color="green"
                        dark
                        class="mb-2"
                        @click="dialog = true"
                        >New Item
                        <v-icon class="mr-2"> mdi-pencil-plus </v-icon></v-btn
                      >
                      <v-card class="grey darken-3">
                        <v-card-title>
                          <span class="headline">Edits</span>
                        </v-card-title>

                        <v-card-text color="grey darken-3">
                          <v-container grid-list-md class="grey darken-2">
                            <v-layout wrap>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="title"
                                  label="Title"
                                  class="grey darken-2"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="email"
                                  label="Email"
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
                            color="green "
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
                      :items="users"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }">
                        <v-icon large color="blue" @click="expItem(item)">
                          mdi-account-box
                        </v-icon>
                        <v-icon
                          large
                          class="mr-2"
                          color="green"
                          @click="editItem(item)"
                        >
                          mdi-pencil
                        </v-icon>

                        <v-icon
                          large
                          color="red"
                          @click="
                            deleteItem(users[users.indexOf(item)]._id, item)
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
          <v-col cols="4">
            <v-card
              class="grey lighten-2 ma-4"
              height="20px"
              elevation="0"
              light
            >
            </v-card>
            <v-card class="grey lighten-2 ma-4" elevation="2" light>
              <v-card class="transparent" flat>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <p class="green--text text-h4">View Profile</p>
                      <div class="justify-center">
                        <v-card
                          class="rounded-circle"
                          height="150px"
                          width="150px"
                        >
                          <v-img
                            v-bind:src="profile_url1"
                            class="rounded-circle"
                            height="150px"
                          ></v-img>
                        </v-card>
                      </div>
                      <p>Name: {{ name1 }}</p>
                      <p>Email: {{ email1 }}</p>
                      <p>Batch: {{ batch1 }}</p>
                      <p>Semester: {{ sem1 }}</p>

                      <p>Section: {{ section1 }}</p>
                      <p>Phone: {{ phone1 }}</p>
                      <p>Address Line: {{ addressline1 }}</p>
                      <p>City : {{ city1 }}</p>
                      <p>State: {{ state1 }}</p>
                      <p>Country: {{ country1 }}</p>
                      <p>Bio: {{ bio1 }}</p>

                      <p>Password: {{ password1 }}</p>

                      <p></p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-btn large class="green" href="resume_url1">
                        <a
                          v-bind:href="resume_url1"
                          target="_blank"
                          class="white--text"
                          style="text-decoration: none"
                        >
                          Download Resume
                        </a></v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-card>
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
      let response = await $axios.$get("http://localhost:3000/api/users");
      console.log(response.users);
      return {
        users: response.users,
      };
    } catch (err) {}
  },
  data: () => ({
    name1: "N/A",
    email1: "N/A",
    batch1: "N/A",
    section1: "N/A",
    phone1: "N/A",
    addressline1: "N/A",
    city1: "N/A",
    state1: "N/A",
    country1: "N/A",
    bio1: "N/A",
    password1: "",
    name: "",
    ide: "",
    email: "",
    ind: "",
    profile_url1: "",
    resume_url1: "",
    section1: "",

    cards: ["Announcements"],
    drawer: null,

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
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
      },
      { text: "Email", value: "email" },
      { text: "Actions", value: "edit", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      email: 0,
    },
    defaultItem: {
      name: "",
      email: 0,
    },
  }),
  computed: {},

  methods: {
    editItem(item) {
      this.edt = 1;
      this.name = this.users[this.users.indexOf(item)].name;
      this.email = this.users[this.users.indexOf(item)].email;
      this.ind = this.users.indexOf(item);
      this.dialog = true;
    },
    expItem(item) {
      this.name1 = this.users[this.users.indexOf(item)].name;
      this.email1 = this.users[this.users.indexOf(item)].email;
      this.batch1 = this.users[this.users.indexOf(item)].batch;
      this.sem1 = this.users[this.users.indexOf(item)].sem;
      this.section1 = this.users[this.users.indexOf(item)].section;
      this.phone1 = this.users[this.users.indexOf(item)].phone;
      this.addressline1 = this.users[this.users.indexOf(item)].addr_line;
      this.city1 = this.users[this.users.indexOf(item)].city;
      this.state1 = this.users[this.users.indexOf(item)].state;
      this.country1 = this.users[this.users.indexOf(item)].country;
      this.bio1 = this.users[this.users.indexOf(item)].bio;
      this.profile_url1 = this.users[this.users.indexOf(item)].profile;
      this.resume_url1 = this.users[this.users.indexOf(item)].resume;
      this.password1 = this.users[this.users.indexOf(item)].password;
    },

    async deleteItem(id, item) {
      const index = this.users.indexOf(item);

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/users/${id}`
        );
        console.log(response);
        if (response.status) {
          this.users.splice(index, 1);
        }
      } catch (err) {}
    },

    async onAddAnnouncement() {
      if (this.edt == 1) {
        this.ide = this.users[this.ind]._id;
        let data = {
          name: this.name,
          email: this.email,
        };
        let result = await this.$axios.$put(
          `http://localhost:3000/api/users/${this.ide}`,
          data
        );
        this.dialog = false;
        this.users[this.ind].name = this.name;
        this.users[this.ind].email = this.email;
        this.edt = 0;
      } else {
        try {
          console.log(this.name);
          console.log(this.email);

          let data = {
            name: this.name,
            email: this.email,
          };
          let response = await this.$axios.$post(
            "http://localhost:3000/api/users",
            data
          );
          this.users.push(data);
          this.name = "";
          this.email = "";
        } catch (err) {
          console.log(err);
        }
      }
      //this.users.push(data);
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
        };
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/adminverify/`,
          data
        );
        console.log(verify_response.success);
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
