<template>
  <div class="Profile">
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        src="https://rasput1n.blob.core.windows.net/internship-portal/website-images/night.jpg"
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

      <v-main class="grey lighten-2">
        <v-container>
          <v-row>
            <v-container height="100px"></v-container>

            <v-container height="100px"></v-container>
            <v-col cols="4">
              <v-col cols="12">
                <v-row>
                  <v-col cols="12">
                    <v-container grid-list-lg text-sm-center md-12>
                      <v-card class="mx-auto pa-1" elevation="12" light>
                        <v-toolbar flat>
                          <v-layout row wrap align-center>
                            <v-flex justify-center>
                              <div class="justify-center">
                                <v-card
                                  class="rounded-circle"
                                  height="150px"
                                  width="150px"
                                >
                                  <v-img
                                    v-bind:src="profile_url"
                                    class="rounded-circle"
                                    height="150px"
                                  ></v-img>
                                </v-card>
                              </div>
                            </v-flex>
                          </v-layout>
                        </v-toolbar>

                        <v-dialog
                          light
                          v-model="dialog1"
                          persistent
                          max-width="400"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="transparent"
                              flat
                              elevation="0"
                              v-bind="attrs"
                              v-on="on"
                            >
                              <v-icon>mdi-camera</v-icon>
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="headline">
                              Profile Picture
                            </v-card-title>
                            <v-card-text
                              ><input
                                color="green"
                                type="file"
                                @change="onFileChanged"
                              />
                              <v-btn
                                color="green"
                                class="mt-3"
                                @click="onUpload"
                                >Upload!</v-btn
                              ></v-card-text
                            >
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="green darken-1"
                                text
                                @click="dialog1 = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        <v-card class="transparent" height="50px" flat>
                          <!--                        <v-file-input-->
                          <!--                          hide-input-->
                          <!--                          prepend-icon="mdi-camera"-->
                          <!--                          @change="onFileChanged"-->
                          <!--                        ></v-file-input>-->
                        </v-card>
                        <v-row>
                          <v-col cols="2">
                            <v-subheader
                              ><v-icon large
                                >mdi-account-box</v-icon
                              ></v-subheader
                            >
                          </v-col>
                          <v-col cols="9">
                            <v-text-field
                              outlined
                              filled
                              v-model="name"
                              readonly
                            >
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
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="12">
                    <v-container grid-list-lg text-sm-center md-12>
                      <v-card class="mx-auto pa-1" elevation="12" light>
                        <v-card
                          class="transparent text-h6 pa-4 mb-4 green--text"
                          height="50px"
                          flat
                        >
                          Change Password
                        </v-card>
                        <v-row>
                          <v-col cols="4">
                            <v-subheader class="text-subtitle-2 text-left"
                              >Old Password</v-subheader
                            >
                          </v-col>
                          <v-col cols="7">
                            <v-text-field
                              outlined
                              v-model="password_to_check"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              name="input-10-1"
                              @click:append="show1 = !show1"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="4">
                            <v-subheader class="text-subtitle-2 text-left"
                              >New Password</v-subheader
                            >
                          </v-col>
                          <v-col cols="7">
                            <v-text-field
                              outlined
                              v-model="password_new"
                              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show2 ? 'text' : 'password'"
                              name="input-10-1"
                              @click:append="show2 = !show2"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12">
                            <v-btn class="green mb-4" @click="changePassword"
                              >Change Password</v-btn
                            >
                          </v-col>
                        </v-row>

                        <v-divider></v-divider>
                      </v-card>
                    </v-container>
                  </v-col>
                </v-row>
              </v-col>
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
                        <v-text-field outlined v-model="sem"></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>Batch</v-subheader>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field outlined v-model="batch"></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>Section</v-subheader>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field outlined v-model="section"></v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-subheader>Phone</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          v-model="phone"
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
                        <v-text-field
                          outlined
                          v-model="addr_line"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>City</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field outlined v-model="city"></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>State</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field outlined v-model="state"></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-subheader>Country</v-subheader>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field outlined v-model="country"></v-text-field>
                      </v-col>

                      <v-col cols="2"> </v-col>
                      <v-col cols="12"
                        ><v-subheader class="text-h5">Resume</v-subheader>
                      </v-col>
                      <v-row>
                        <v-col class="ml-8" cols="3">
                          <v-btn large class="green">
                            <a
                              v-bind:href="resume_url"
                              target="_blank"
                              class="black--text"
                              style="text-decoration: none"
                            >
                              View Resume<v-icon>mdi-eye</v-icon>
                            </a></v-btn
                          ></v-col
                        >
                        <v-col cols="3">
                          <v-dialog
                            light
                            v-model="dialog2"
                            persistent
                            max-width="400"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                color="green"
                                flat
                                large
                                elevation="0"
                                v-bind="attrs"
                                v-on="on"
                              >
                                Upload Resume
                                <v-icon>mdi-file-document-multiple</v-icon>
                              </v-btn>
                              {{ Uploaded }}
                            </template>
                            <v-card>
                              <v-card-title class="headline">
                                Upload Resume
                              </v-card-title>
                              <v-card-text>
                                <input type="file" @change="onFileChanged" />
                                <v-btn
                                  large
                                  class="mt-4 green"
                                  @click="onUploadResume"
                                  >Upload Resume</v-btn
                                >
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="green darken-1"
                                  text
                                  @click="dialog2 = false"
                                >
                                  Close
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-col>
                        <v-col cols="2"></v-col>
                        <v-col cols="3">
                          {{ Saved }}
                          <v-btn large class="green" @click="onSaveProfile"
                            >Save</v-btn
                          >
                        </v-col>
                      </v-row>
                      <v-col cols="8"> </v-col>
                      <v-col cols="1"></v-col>
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
  data() {
    return {
      view: "password",
      Saved: "",
      Uploaded: "",
      dialog1: "",
      dialog2: "",
      selectedFile: null,
      selectedResume: null,
      images: {
        //sample: require("https://media.gettyimages.com/photos/moored-boats-at-the-sacred-prayag-bathing-ghat-picture-id151731894?s=2048x2048"),
      },
      profile_url: "",
      resume_url: "",
      show1: false,
      show2: false,
      show3: false,
      id: "",
      email: "",
      name: " ",
      sem: " ",
      batch: " ",
      bio: " ",
      section: " ",
      phone: " ",
      addr_line: " ",
      city: " ",
      state: " ",
      country: " ",
      password: "",
      password_to_check: "",
      password_new: "",
      cards: ["Announcements"],
      drawer: null,

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
    };
  },
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
    async changePassword() {
      try {
        //let cookie = this.$cookies.get("jwt");
        if (this.password_to_check === this.password) {
          let data = {
            sem: this.sem,
            batch: this.batch,
            section: this.section,
            phone: this.phone,
            bio: this.bio,
            addr_line: this.addr_line,
            city: this.city,
            state: this.state,
            country: this.country,
            password: this.password_new,
            email: this.email,
            name: this.name,
          };
          let response = await this.$axios.$put(
            `http://localhost:3000/api/userupdatepassword/${this.id}`,
            data
          );
          this.password_to_check = "";
          this.password_new = "";
          console.log("Successfully updated password...:)");
        } else {
          console.log("Wrong old password !!");
        }
      } catch (err) {
        console.log(err);
      }
    },
    onUpload() {
      const formData = new FormData();
      formData.append("profile", this.selectedFile);
      formData.append("cookie", this.$cookies.get("jwt"));
      this.$axios
        .post("http://localhost:3000/api/upload/profile", formData)
        .then((res) => {
          // console.log(res)
        });
      this.getURL();
      this.$router.go();
    },
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    async getURL() {
      try {
        let cookie = this.$cookies.get("jwt");
        let response = await this.$axios.$get(
          `http://localhost:3000/api/profile/${cookie}`
        );
        this.profile_url = response.user.profile;
        this.resume_url = response.user.resume;
        // console.log(this.profile_url);
      } catch (err) {
        console.log(err);
      }
    },
    onUploadResume() {
      const formData = new FormData();
      formData.append("resume", this.selectedFile);
      formData.append("cookie", this.$cookies.get("jwt"));
      this.Uploaded = "Uploaded";
      this.$axios
        .post("http://localhost:3000/api/upload/resume", formData)
        .then((res) => {
          // console.log(res)
        });
      this.getURL();
      // this.$router.go();
    },
    async onSaveProfile() {
      try {
        //let cookie = this.$cookies.get("jwt");
        let data = {
          sem: this.sem,
          batch: this.batch,
          section: this.section,
          phone: this.phone,
          bio: this.bio,
          addr_line: this.addr_line,
          city: this.city,
          state: this.state,
          country: this.country,
          password: this.password,
        };
        let response = await this.$axios.$put(
          `http://localhost:3000/api/users/${this.id}`,
          data
        );
        this.Saved = "Saved";
      } catch (err) {
        console.log(err);
      }
    },
    async getUser() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/login");
        }
        let data = {
          cookie: cookie,
        };
        let response = await this.$axios.$post(
          `http://localhost:3000/api/profile/`,
          data
        );
        if (!response.success) {
          this.$router.push("/login");
        }
        this.id = response.user._id;
        this.name = response.user.name;
        this.email = response.user.email;
        this.sem = response.user.sem;
        this.batch = response.user.batch;
        this.section = response.user.section;
        this.phone = response.user.phone;
        this.bio = response.user.bio;
        this.addr_line = response.user.addr_line;
        this.city = response.user.city;
        this.state = response.user.state;
        this.country = response.user.country;
        this.profile_url = response.user.profile;
        this.password = response.user.password;
        console.log(this.profile_url);
        this.resume_url = response.user.resume;
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
