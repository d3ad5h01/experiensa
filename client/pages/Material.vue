<template>
  <div class="Material">
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
        <v-container height="100px"></v-container>
        <div class="ml-6">
          <v-row>
            <v-col cols="8">
              <!--<v-row>
                <v-col cols="3"
                  ><v-card class="mx-auto pa-1" elevation="0" light>
                    <v-card-subtitle
                      ><p class="text-h2 text-center">120</p>
                    </v-card-subtitle>
                  </v-card></v-col
                >
                <v-col cols="3"
                  ><v-card class="mx-auto pa-1" elevation="0" light>
                    <v-card-subtitle
                      ><p class="text-h2 text-center">120</p>
                    </v-card-subtitle>
                  </v-card></v-col
                >
                <v-col cols="3"
                  ><v-card class="mx-auto pa-1" elevation="0" light>
                    <v-card-subtitle
                      ><p class="text-h2 text-center">120</p>
                    </v-card-subtitle>
                  </v-card></v-col
                >
                <v-col cols="3"
                  ><v-card class="mx-auto pa-1" elevation="0" light>
                    <v-card-subtitle
                      ><p class="text-h2 text-center">120</p>
                    </v-card-subtitle>
                  </v-card></v-col
                >
              </v-row>-->
              <!-- <v-col cols="12">
                <v-card class="rounded-ls" elevation="0">
                  <div>
                    <v-toolbar flat color="grey lighten-2">
                      <v-toolbar-title class="text-h4 grey--text lighten-1"
                        >Blogs</v-toolbar-title
                      >
                      <v-divider class="mx-2" inset vertical></v-divider>
                      <v-spacer></v-spacer>
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        light
                        color="green"
                      ></v-text-field>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card class="white">
                      <v-container class="white" elevation="10">
                        <v-data-table
                          :headers="headers"
                          :items="studycards"
                          :search="search"
                          hide-actions
                          light
                          class="white"
                        >
                          <template #item.link="{ item }">
                            <a a target="_blank" :href="item.link">
                              Learn More
                            </a>
                          </template>
                        </v-data-table>
                      </v-container>
                    </v-card>
                  </div>
                </v-card>
              </v-col>-->
              <v-col cols="12">
                <v-card class="grey lighten-2" light elevation="0">
                  <v-card class="grey lighten-2" elevation="0">
                    <v-toolbar flat color="grey lighten-2">
                      <v-toolbar-title class="text-h4 green--text lighten-1"
                        >Blogs</v-toolbar-title
                      >

                      <v-spacer></v-spacer>
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        light
                        color="green"
                      ></v-text-field>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                  </v-card>
                  <div class="grey lighten-2">
                    <v-card
                      class="ma-2 grey lighten-2"
                      elevation="0"
                      v-for="(studycard, i) in filteredList"
                      :key="i"
                    >
                      <div
                        class="text-h5 black--text pa-4"
                        href="studycard.link"
                      >
                        {{ studycard.title }}
                      </div>
                      <div
                        class="text-subtitle-2 black--text pa-4 font-weight-light"
                      >
                        {{ studycard.text }}

                        <a
                          v-bind:href="studycard.link"
                          target="_blank"
                          class="green--text"
                          style="text-decoration: none"
                        >
                          Learn More
                        </a>
                      </div>
                      <v-divider class="mt-4"></v-divider>
                    </v-card>
                  </div>
                </v-card>
              </v-col>
            </v-col>

            <v-col cols="4">
              <v-row>
                <v-col cols="12">
                  <v-col cols="12">
                    <v-card
                      class="rounded-ls grey lighten-2"
                      elevation="0"
                      height="1000px"
                    >
                      <v-card elevation="0">
                        <v-row class="grey lighten-2">
                          <v-col
                            cols="12"
                            class="green--text text-h4 grey lighten-2"
                            elevation="0"
                          >
                            Recommended
                          </v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >01
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/100-days-of-code-a-complete-guide-for-beginners-and-experienced/"
                            >
                              100 Days of Code – A Complete Guide For Beginners
                              and Experienced</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider
                          ></v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >02
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/how-much-python-should-you-know-to-learn-django/"
                            >
                              How Much Python Should You know To Learn
                              Django?</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider>
                          </v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >03
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/10-best-tools-for-front-end-web-development/"
                            >
                              10 Best Tools For Front-End Web
                              Development</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider>
                          </v-col>

                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >04
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/10-best-chrome-extension-to-boost-the-productivity-for-developers/"
                            >
                              10 Best Chrome Extension To Boost the Productivity
                              For Developers</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider>
                          </v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >05
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
                            >
                              Graph Data Structure And Algorithms</v-card
                            >
                          </v-col>
                        </v-row>
                      </v-card></v-card
                    >
                  </v-col></v-col
                >
                <v-col cols="12">
                  <v-col cols="12">
                    <v-card class="rounded-ls grey lighten-2" elevation="0">
                      <v-card elevation="0">
                        <v-row class="grey lighten-2">
                          <v-col
                            cols="12"
                            class="green--text text-h4 grey lighten-2"
                            elevation="0"
                          >
                            What's New
                          </v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >01
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/binary-tree-data-structure/"
                            >
                              Binary Tree Data Structure</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider
                          ></v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >02
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/how-much-python-should-you-know-to-learn-django/"
                            >
                              Backtracking Algorithms</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider>
                          </v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >03
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/10-best-tools-for-front-end-web-development/"
                            >
                              Dynamic Programing</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider>
                          </v-col>

                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >04
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/10-best-chrome-extension-to-boost-the-productivity-for-developers/"
                            >
                              Array Traversal</v-card
                            >
                            <v-divider class="grey mt-10"></v-divider>
                          </v-col>
                          <v-col cols="3" class="mt-4 text-h2 grey lighten-2"
                            >05
                          </v-col>
                          <v-col cols="9" class="mt-4 text-h2 grey lighten-2"
                            ><v-card
                              light
                              elevation="0"
                              class="text-h5 grey lighten-2 pa-1"
                              href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
                            >
                              Graph Data Structure And Algorithms</v-card
                            >
                          </v-col>
                        </v-row>
                      </v-card></v-card
                    >
                  </v-col></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </div>
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
      let response = await $axios.$get("http://localhost:3000/api/studycards");

      return {
        studycards: response.studycards,
      };
    } catch (err) {}
  },
  data: () => ({
    search: "",
    async asyncData({ $axios }) {
      try {
        let response = await $axios.$get(
          "http://localhost:3000/api/studycards"
        );

        return {
          studycards: response.studycards,
        };
      } catch (err) {}
    },
    title: "",
    ide: "",
    link: "",
    ind: "",
    bio: "",
    images: {
      //sample: require("https://media.gettyimages.com/photos/moored-boats-at-the-sacred-prayag-bathing-ghat-picture-id151731894?s=2048x2048"),
    },
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: true,
        value: "title",
      },
      { text: "Learn More", value: "link" },
    ],
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
  computed: {
    filteredList() {
      return this.studycards.filter((studycard) => {
        return studycard.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
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
    async getUser() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/login");
        }
        let data = {
          cookie: cookie,
        }
        let response = await this.$axios.$post(
          `http://localhost:3000/api/profile/`, data
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
