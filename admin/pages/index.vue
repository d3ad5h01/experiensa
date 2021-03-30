
<template>
  <div class="index">
    <div id="app" class="index back">
      <v-app app id="inspire">
        <v-app-bar height="100px" app color="semi-transparent">
          <div class="ml-2 mt-4">
            <vuetify-logo />
          </div>
          <v-toolbar-title
            class="text-h4 white--text text-lighten-1 font-weight-light"
            >eXperiensaa</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn class="transparent ml-2" elevation="0" href="/"> Home </v-btn>

          <v-btn class="transparent ml-2" elevation="0" href="/Login">
            Login
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/AboutUs">
            About Us
          </v-btn>
        </v-app-bar>
        <v-content>
          <v-container grid-list-lg text-sm-center>
            <v-layout row wrap>
              <v-flex xs12 md12>
                <v-card class="mx-auto transparent" min-height="100" flat>
                  <v-card-text
                    class="text-h1 white--text text-lighten-5 font-weight-black pa-5"
                  >
                    eXperiensaa
                  </v-card-text>
                  <v-card-text class="text-h5 font-weight-light pa-5">
                    the internship portal
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container>
            <v-container grid-list-lg text-sm-center md-12>
              <v-layout row wrap>
                <v-flex xs12 md12>
                  <v-card
                    class="mx-auto rounded-b-xl grey lighten-5"
                    elevation="4"
                  >
                    <v-card-text>
                      <span class="display-1 pa-5"> </span><br />
                      <div
                        class="text-h1 grey--text text-darken-1 font-weight-black"
                      >
                        Admin
                      </div>
                    </v-card-text>

                    <v-card
                      class="mx-auto rounded-b-xl transparent"
                      min-height="50"
                      flat
                      light
                    >
                    </v-card>
                  </v-card>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md12>
                  <v-card
                    class="mx-auto transparent"
                    dark
                    min-height="100"
                    flat
                  >
                    <v-card-text class="text-h4 font-weight-light pa-5">
                      IIITA INTERNSHIP PORTAL
                    </v-card-text>
                    <v-card-text class="text-h5 font-weight-light pa-5">
                      <v-btn
                        class="transparent ml-2"
                        elevation="0"
                        v-for="(item, i) in itemsss"
                        :key="i"
                        :href="item.to"
                        item.to
                      >
                        {{ item.title }}
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>


<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.index {
  background: black;
  background-size: cover;
}
#container {
  width: 300px;
  background-color: red;
  display: flex;
  justify-content: center;
}

#child {
  background-color: green;
  width: 250px;
  height: 150px;
  position: relative;
  top: 75px;
}
.back {
  background-image: url("https://placement.iiita.ac.in/images/iiita/iiitacover.jpg");

  background-attachment: fixed;
  height: 100%;
  width: 100%;
}
.brand {
  position: fixed;
}

#inspire {
  background: none !important;
}

.semi-transparent {
  opacity: 0.5;
}
.semi-transparent-white {
  background-color: #eeeeee;
  opacity: 0.85;
  color: black;
}
</style>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },

  data: () => ({
    articles: [
      {
        src:
          "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        title: "Mobile first & Responsive",
        text:
          "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
      },
      {
        src:
          "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        title: "Think outside the box",
        text:
          "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
      },
      {
        src:
          "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
        title: "Small changes, big difference",
        text:
          "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
      },
    ],
    features: [
      {
        icon: "mdi-account-group-outline",
        title: "Vibrant Community",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
      },
      {
        icon: "mdi-update",
        title: "Frequent Updates",
        text:
          "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.",
      },
      {
        icon: "mdi-shield-outline",
        title: "Long-term Support",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
      },
    ],
    stats: [
      ["24k", "Github Stars"],
      ["330+", "Releases"],
      ["1m", "Downloads/mo"],
      ["5m", "Total Downloads"],
    ],

    dialog: true,

    clipped: false,
    drawer: true,
    fixed: false,
    items: [
      {
        src: "https://www.iiita.ac.in/uploads/carousel/MBA146.jpg",
      },
      {
        src: "https://www.iiita.ac.in/uploads/carousel/b218.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    itemss: [
      {
        icon: "mdi-apps",
        title: "Home",
        to: "/",
      },
      {
        icon: "mdi-apps",
        title: "Sign Up",
        to: "/Register",
      },
      {
        icon: "mdi-chart-bubble",
        title: "ABOUT US",
        to: "/AboutUs",
      },

      {
        icon: "mdi-chart-bubble",
        title: "Login",
        to: "/Login",
      },
    ],
    itemsss: [
      {
        icon: "mdi-apps",
        title: "Placement Portal",
        to: "https://placement.iiita.ac.in/",
      },
      {
        icon: "mdi-apps",
        title: "IIIT A",
        to: "https://www.iiita.ac.in/",
      },
      {
        icon: "mdi-chart-bubble",
        title: "Past Data",
        to: "https://placement.iiita.ac.in/statistics.php",
      },

      {
        icon: "mdi-chart-bubble",
        title: "Login",
        to: "/Login",
      },
    ],
    colors: [
      "green",
      "secondary",
      "yellow darken-4",
      "red lighten-2",
      "orange darken-1",
    ],
    cycle: false,
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: "IIIT INTERNSHIP PORTAL",
  }),
  methods: {
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        let verify_response = await this.$axios.$get(
          `http://localhost:3000/api/verify/${cookie}`
        );
        if (verify_response.success) {
          this.$router.push("/Dashboard");
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
