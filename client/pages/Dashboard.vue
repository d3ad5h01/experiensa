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
            <v-col cols="3">
              <p class="text-h5 green--text text-center">
                Companies Registered
              </p>
              <p class="text-h2 text-center font-weight-bold">120</p>
              <v-divider color="green"></v-divider>
            </v-col>
            <v-col cols="3">
              <p class="text-h5 green--text text-center">Total Internships</p>
              <p class="text-h2 text-center font-weight-bold">400</p>
              <v-divider color="green"></v-divider>
            </v-col>
            <v-col cols="3">
              <p class="text-h5 green--text text-center">Students Registered</p>
              <p class="text-h2 text-center font-weight-bold">200</p>
              <v-divider color="green"></v-divider>
            </v-col>
            <v-col cols="3">
              <p class="text-h5 green--text text-center">Students Placed</p>
              <p class="text-h2 text-center font-weight-bold">100</p>
              <v-divider color="green"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-carousel
                cycle
                height="60"
                hide-delimiters
                show-arrows-on-hover
              >
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet class="green" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="text-subtitle-1">{{ slide }}</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-card class="transparent pa-0 ml-4 mr-4" elevation="0">
                <p class="text-h2 font-weight-medium green--text text-center">
                  Announcements
                </p>
              </v-card>
              <v-spacer></v-spacer>

              <v-card
                :style="'border: 5px solid red;'"
                class="grey lighten-2"
                light
                elevation="0"
                style="overflow-y: scroll"
                height="500px"
                width="100%"
                outlined
              >
                <v-list three-line class="grey lighten-2">
                  <template v-for="announcementcard in announcementcards">
                    <v-list-item class="grey lighten-2">
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
            <v-divider class="green" vertical></v-divider>
            <v-col cols="6">
              <v-row
                ><v-col cols="12 mb-4"
                  ><v-carousel height="200px" hide-delimiters>
                    <v-carousel-item
                      v-for="(item, i) in items44"
                      :key="i"
                      :src="item.src"
                    ></v-carousel-item> </v-carousel></v-col
              ></v-row>
              <v-divider color="green"></v-divider>
              <v-row
                ><v-col cols="12"
                  ><v-card class="grey lighten-2 mt-2" light elevation="0"
                    ><p class="font-weight-bold">Messege from Director</p>
                    <p>
                      Indian Institute of Information Technology, Allahabad is
                      our sacred place of learning, where we learn and remain
                      committed to lifelong learning with a focused objective
                      that the outcome of learning is to accomplish notch class
                      performance all through, and everyone who is associated
                      thus should create a niche for him/herself. We stand to
                      ensure Quality in Excellence. We pledge that there shall
                      be ‘Quality in the Show but certainly not Show in the
                      Quality’.
                    </p>
                    <p class="font-weight-bold text-right">
                      Prof. P. Nagabhushan <br />
                      Director IIIT - Allahabad
                    </p></v-card
                  ></v-col
                ></v-row
              >
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.v-list-item--active {
  background-color: green;
}
.out {
  border-color: rgba(192, 0, 250, 0.986);
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
    slides: [
      "IIITA boasts about its fantastic placements.",
      "Brunch this weekend?Brunch this weekend?Brunch this weekend?Brunch this weekend?",
      "Brunch this weekend? weekendweekendweekendweekendweekend ",
      "Fourth weekendweekendweekendweekendweekend",
      "Fifth weekendweekendweekendweekend",
    ],
    items44: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
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
        let data = {
          cookie: cookie,
        };
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/verify/`,
          data
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
