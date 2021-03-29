<template>
  <div class="Profile">
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
        <v-container>
          <v-row>
            <v-container height="100px"></v-container>

            <v-container height="100px"></v-container>
            <v-col cols="4">
              <v-row>
                <v-col cols="12">
                  <v-container grid-list-lg text-sm-center md-12>
                    <v-card class="mx-auto pa-1" elevation="12" light>
                      <v-toolbar flat>
                        <v-layout row wrap align-center>
                          <v-flex justify-center>
                            <div class="justify-center">
                              <v-card
                                class="green rounded-circle"
                                height="150px"
                                width="150px"
                                ><v-img
                                  lazy-src="https://picsum.photos/id/11/10/6"
                                  src="https://picsum.photos/id/11/500/300"
                                  class="rounded-circle"
                                  height="150px"
                                ></v-img>
                              </v-card>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-toolbar>

                      <v-card class="transparent" height="50px" flat
                        ><v-file-input
                          hide-input
                          prepend-icon="mdi-camera"
                        ></v-file-input>
                      </v-card>

                      <v-row>
                        <v-col cols="2">
                          <v-subheader
                            ><v-icon large>mdi-account-box</v-icon></v-subheader
                          >
                        </v-col>
                        <v-col cols="9">
                          <v-text-field outlined filled v-model="name" readonly>
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="2">
                          <v-subheader
                            ><v-icon large>mdi-email</v-icon></v-subheader
                          >
                        </v-col>
                        <v-col cols="9">
                          <v-text-field
                            outlined
                            filled
                            v-model="email"
                            readonly
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>

                      <v-divider></v-divider>
                      <v-btn
                        class="text-subtitle-1 green white--text mb-4 mt-4"
                      >
                        <v-icon medium>mdi-pencil</v-icon> Change Password
                      </v-btn>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="8">
              <v-card class="white" light elevation="15">
                <v-card class="transparent" flat>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="2">
                        <v-subheader>Semester</v-subheader>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field value="4" outlined></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>Batch</v-subheader>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field value="2019" outlined></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>Section</v-subheader>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field value="C" outlined></v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-subheader>Phone</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          value="9166207907"
                          outlined
                          color="green"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-subheader>BIO</v-subheader>
                        <v-textarea outlined v-model="bio" color="green">
                        </v-textarea>
                      </v-col>
                    </v-row>
                    <v-subheader class="text-h5">Address</v-subheader>

                    <v-row>
                      <v-col cols="2">
                        <v-subheader>Address Line</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field outlined value="example"></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>City</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field outlined value="example"></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>State</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field outlined value="example"></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>Country</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field outlined value="example"></v-text-field>
                      </v-col>

                      <v-col cols="9">
                        <v-file-input multiple label="File input"></v-file-input
                      ></v-col>
                      <v-col cols="3">
                        <v-btn large class="green">Upload Resume</v-btn>
                      </v-col>
                      <v-col cols="10"> </v-col>
                      <v-col cols="2">
                        <v-btn large class="green">Save</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
.v-list-item--active {
  background-color: green;
}
</style>
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
    } catch (err) {
      console.log(err);
    }
  },
  data: () => ({
    bio: "",
    images: {
      //sample: require("https://media.gettyimages.com/photos/moored-boats-at-the-sacred-prayag-bathing-ghat-picture-id151731894?s=2048x2048"),
    },
    show1: false,
    show2: false,
    show3: false,
    email: "",
    name: "",

    cards: ["Announcements"],
    drawer: null,
    items2: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
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
        title: "Profile",
        to: "/Profile",
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
        to: "/Logout",
      },
    ],
    items3: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
  methods: {
    enableEditing: function () {
      this.tempValue = this.value;
      this.editing = true;
    },
    disableEditing: function () {
      this.tempValue = null;
      this.editing = false;
    },
    saveEdit: function () {
      // However we want to save it to the database
      this.value = this.tempValue;
      this.disableEditing();
    },
    async getUser() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/login");
        }
        let response = await this.$axios.$get(
          `http://localhost:3000/api/profile/${cookie}`
        );
        if (!response.success) {
          this.$router.push("/login");
        }
        this.name = response.user.name;
        this.email = response.user.email;
      } catch (err) {
        console.log(err);
      }
    },
  },
  beforeMount() {
    this.getUser();
  },
};
</script>