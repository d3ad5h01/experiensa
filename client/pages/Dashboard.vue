<template>
  <div class="Dashboard">
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
        <v-container>
          <v-row>
            <v-col cols="4"
              ><v-row>
                <v-col cols="12">
                  <v-card class="mx-auto pa-1" elevation="12" light>
                    <v-card-subtitle
                      ><p class="text-h5 text-center">Companies Registered</p>
                      <p class="text-h2 text-center font-weight-bold">120</p>
                    </v-card-subtitle>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card class="mx-auto pa-1" elevation="12" light>
                    <v-card-subtitle
                      ><p class="text-h5 text-center">Total Internships</p>
                      <p class="text-h2 text-center font-weight-bold">400</p>
                    </v-card-subtitle>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card class="mx-auto pa-1" elevation="12" light>
                    <v-card-subtitle
                      ><p class="text-h5 text-center">Students Registered</p>
                      <p class="text-h2 text-center font-weight-bold">200</p>
                    </v-card-subtitle>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card class="mx-auto pa-1" elevation="12" light>
                    <v-card-subtitle
                      ><p class="text-h5 text-center">Students Placed</p>
                      <p class="text-h2 text-center font-weight-bold">100</p>
                    </v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row></v-col
            >
            <v-col cols="8">
              <v-card class="green pa-4 ma-4" elevation="15">
                <p class="text-h5 font-weight-medium white--text text-center">
                  Announcements
                </p>
              </v-card>
              <v-spacer></v-spacer>

              <v-card
                class="white"
                light
                elevation="15"
                style="overflow-y: scroll"
                height="600px"
                width="100%"
              >
                <v-card class="transparent" height="20px" flat> </v-card>
                <v-list three-line>
                  <template v-for="announcementcard in announcementcards">
                    <v-list-item>
                      <v-list-item-avatar x-large class="">
                        <v-icon x-large>mdi-arrow-right-bold</v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title
                          ><p class="text-h5">
                            {{ announcementcard.title }}
                          </p></v-list-item-title
                        >

                        <p class="text-subtitle-2">
                          {{ announcementcard.description }}
                        </p>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                  </template>
                </v-list>
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
    images: {
      //sample: require("https://media.gettyimages.com/photos/moored-boats-at-the-sacred-prayag-bathing-ghat-picture-id151731894?s=2048x2048"),
    },
    show1: false,
    show2: false,
    show3: false,

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
</script>
