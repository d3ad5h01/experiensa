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
                  <v-btn color="green" dark v-bind="attrs" v-on="on">
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
                    <v-card class="cyan darken-3">
                      <v-card-title>
                        <span class="headline"></span>
                      </v-card-title>
                      <v-card-text>
                        wisi et, sollicitudin nunc vestibulum, cursus accumsan
                        nunc pede tempus mi ipsum, ligula sed. Non condimentum
                        ac dolor sit. Mollis eu aliquam, vel mattis mollis massa
                        ut dolor ante, tempus lacinia arcu. Urna vestibulum
                        lorem, nulla fermentum, iaculis ut congue ac vivamus.
                        Nam libero orci, pulvinar nulla, enim pellentesque
                        consectetuer leo, feugiat rhoncus rhoncus vel. Magna
                        sociosqu donec, dictum cursus ullamcorper viverra.
                        Ultricies quis orci lorem, suspendisse ut vestibulum
                        integer, purus sed lorem pulvinar habitasse turpis. +
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
                :items="interncards"
                :search="search"
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
                    <v-card class="cyan darken-3">
                      <v-card-title>
                        <span class="headline"></span>
                      </v-card-title>
                      <v-card-text>
                        wisi et, sollicitudin nunc vestibulum, cursus accumsan
                        nunc pede tempus mi ipsum, ligula sed. Non condimentum
                        ac dolor sit. Mollis eu aliquam, vel mattis mollis massa
                        ut dolor ante, tempus lacinia arcu. Urna vestibulum
                        lorem, nulla fermentum, iaculis ut congue ac vivamus.
                        Nam libero orci, pulvinar nulla, enim pellentesque
                        consectetuer leo, feugiat rhoncus rhoncus vel. Magna
                        sociosqu donec, dictum cursus ullamcorper viverra.
                        Ultricies quis orci lorem, suspendisse ut vestibulum
                        integer, purus sed lorem pulvinar habitasse turpis. +
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
                <template #item.Updates="{ item }">
                  <v-dialog v-model="dialog" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="green" dark v-bind="attrs" v-on="on">
                        Updates
                      </v-btn>
                    </template>
                    <v-card class="cyan darken-3">
                      <v-card-title>
                        <span class="headline"></span>
                      </v-card-title>
                      <v-card-text>
                        wisi et, sollicitudin nunc vestibulum, cursus accumsan
                        nunc pede tempus mi ipsum, ligula sed. Non condimentum
                        ac dolor sit. Mollis eu aliquam, vel mattis mollis massa
                        ut dolor ante, tempus lacinia arcu. Urna vestibulum
                        lorem, nulla fermentum, iaculis ut congue ac vivamus.
                        Nam libero orci, pulvinar nulla, enim pellentesque
                        consectetuer leo, feugiat rhoncus rhoncus vel. Magna
                        sociosqu donec, dictum cursus ullamcorper viverra.
                        Ultricies quis orci lorem, suspendisse ut vestibulum
                        integer, purus sed lorem pulvinar habitasse turpis. +
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
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/interncards");

      return {
        interncards: response.interncards,
      };
    } catch (err) {}
  },
  data: () => ({
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
        to: "/",
      },
    ],
    search: "",
    search1: "",
    headers: [
      {
        text: "Companies",
        align: "start",
        sortable: false,
        value: "company",
      },

      { text: "Start Date", value: "startDate" },
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

      { text: "Start Date", value: "startDate" },
      { text: "Apply Deadline", value: "applyBy" },
      { text: "Stipend", value: "stipend" },

      { text: "Learn More", value: "val" },
      { text: "Updates", value: "Updates" },
    ] /*
      desserts: [
        {
          name: 'Airtel',
          val:'Learn More',
          StartDate: "12/02/2021",
          EndDate: "15/03/2021",
          CTC:"10LPA",
          Apply:"Apply",
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
        {
          console.log(err);
        }
      }
    },
    async apply(index) {
        try
        {
          this.cookie = this.$cookies.get("jwt");
          this.internship_id = this.Announcements[index]._id;
          let data = {
            cookie: this.cookie,
            internship_id: this.internship_id,
          }

        }
        catch(err)
        {
           name: 'Netflix',
          val:'Learn More',
          StartDate: "13/02/2021",
          EndDate: "17/03/2021",
          CTC:"18LPA",
          Apply:"Done",
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
              ],*/,
  }),
  methods: {
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/login");
        }
        let verify_response = await this.$axios.$get(
          `http://localhost:3000/api/verify/${cookie}`
        );
        if (!verify_response.success) {
          this.$router.push("/login");
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
/*
      company: String,
    role: String,
    stipend: String,
    duration: String,
    startDate: String,
    applyBy: String,

  */
</script>


