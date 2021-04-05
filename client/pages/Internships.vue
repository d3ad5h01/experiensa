<template>
  <div class="Internships">
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
            <v-list-item-group
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
          <v-card class="grey lighten-2" elevation="0">
            <v-container>
              <v-card-title class="green--text text-h5 font-weight-bold">
                Internships
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
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="interncards"
                :search="search"
                class="grey lighten-2"
                light
                active-class="cyan darken-4"
              >
                <template #item.Apply="{ item }">
                  <v-btn
                    color="green"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="apply(item)"
                  >
                    Apply
                  </v-btn>
                </template>
                <template #item.val="{ item }">
                  <v-dialog v-model="dialog" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="green" dark v-bind="attrs" v-on="on">
                        Learn More
                      </v-btn>
                    </template>
                    <v-card light class="white">
                      <v-card-title>
                        <span class="headline"></span>
                      </v-card-title>
                      <v-card-text>
                        {{item.learnMore}}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>
              </v-data-table>
            </v-container>
          </v-card>

          <v-card class="grey lighten-2" elevation="0">
            <v-container>
              <v-card-title class="green--text text-h5 font-weight-bold">
                My Internships
                <v-spacer></v-spacer>
                <v-text-field
                  light
                  v-model="search1"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  color="green"
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers1"
                :items="my_internships"
                :search="search1"
                class="grey lighten-2"
                light
                active-class="cyan darken-4"
              >
                <template #item.val="{ item }">
                  <v-dialog v-model="dialog" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="green" dark v-bind="attrs" v-on="on">
                        Learn More
                      </v-btn>
                    </template>
                    <v-card light class="white">
                      <v-card-title>
                        <span class="headline"></span>
                      </v-card-title>
                      <v-card-text>
                        {{item.learnMore}}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>
                <template #item.Updates="{ item }">
                  <v-dialog v-model="dialog" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="green" dark v-bind="attrs" v-on="on">
                        Updates
                      </v-btn>
                    </template>
                    <v-card light class="white">
                      <v-card-title>
                        <span class="headline"></span>
                      </v-card-title>
                      <v-card-text>
                        {{item.updates}}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>
              </v-data-table>
            </v-container>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style>
a:link {
  color: white;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: white;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>

<script>
export default {
  data: () => ({
    ifA: "Apply",
    interncards: [],
    cards: ["Announcements"],
    drawer: null,
    cookie: "",
    internship_id: "",
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
    search: "",
    search1: "",
    my_internships: [],
    headers: [
      {
        text: "Companies",
        align: "start",
        sortable: false,
        value: "company",
      },

      { text: "Role", value: "role" },
      { text: "Apply Deadline", value: "applyBy" },
      { text: "Stipend", value: "stipend" },
      { text: "Apply", value: "Apply" },
      { text: "Learn More", value: "val" },
    ],
    headers1: [
      {
        text: "Companies",
        align: "start",
        sortable: false,
        value: "company",
      },

      { text: "Role", value: "role" },
      { text: "Apply Deadline", value: "applyBy" },
      { text: "Stipend", value: "stipend" },
      { text: "Learn More", value: "val" },
      { text: "Updates", value: "Updates" },
    ],
  }),
  methods: {
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/login");
        }
        let data = {
          cookie: cookie,
        };
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/profile/`,
          data
        );
        // console.log(verify_response.success);
        this.my_internships = verify_response.user.internships;
        if (!verify_response.success) {
          this.$router.push("/login");
        }
        let response = await this.$axios.$get(
          "http://localhost:3000/api/interncards"
        );
        this.interncards = response.interncards;
        let ids = [];
        // console.log(this.my_internships);
        for (let i = 0; i < this.my_internships.length; i++)
          ids.push(this.my_internships[i]._id);
        let list = [];
        for (let i = 0; i < this.interncards.length; i++) {
          if (!ids.includes(this.interncards[i]._id)) {
            list.push(this.interncards[i]);
          }
        }
        this.interncards = list;
        // console.log(ids);
      } catch (err) {
        console.log(err);
      }
    },
    async apply(item) {
      //this.item.ifA="Applied";
      this.cookie = this.$cookies.get("jwt");
      this.internship_id = this.interncards[this.interncards.indexOf(item)]._id;
      let data = {
        cookie: this.cookie,
        internship_id: this.internship_id,
      };
      let apply_response = await this.$axios.$put(
        `http://localhost:3000/api/apply/`,
        data
      );
      if (!apply_response.success) {
        console.log(apply_response);
      }
      this.$router.go();
    },
  },
  beforeMount() {
    this.verify();
  },
};
</script>


