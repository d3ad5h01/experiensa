<template>
  <div class="login">
    <div id="app" class="index back">
      <v-app app id="inspire">
        <v-app-bar height="100px" app color="semi-transparent">
          <div class="ml-2 mt-4">
            <vuetify-logo />
          </div>
          <v-toolbar-title
            class="text-h5 grey--text text-lighten-1 font-weight-light"
            >eXperiensaa</v-toolbar-title
          >
          <v-spacer></v-spacer>

          <v-btn class="transparent ml-2" elevation="0" href="/"> Home </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/Register">
            Sign Up
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/Login">
            Student Login
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/AdminLogin">
            Admin Login
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/AboutUs">
            About Us
          </v-btn>
        </v-app-bar>
        <v-content>
          <v-container>
            <v-container grid-list-lg text-sm-center md-12>
              <v-layout row wrap>
                <v-flex xs12 md12>
                  <v-card
                    class="mx-auto rounded-b-xl transparent"
                    min-height="100"
                    flat
                  >
                    <v-card-text>
                      <div class="text-h1 black--text text-darken-1">
                        <v-layout align-center justify-center>
                          <v-flex xs12 sm8 md4>
                            <section
                              class="container fill-height justify-center"
                              id="login"
                            >
                              <div class="row justify-center">
                                <div
                                  class="v-card--material pa-3 px-5 py-3 v-card v-sheet theme--light v-card--material--has-heading"
                                  elevation="10"
                                  max-width="100%"
                                  width="400"
                                  style="
                                    max-width: 100%;
                                    width: 400px;
                                    transform-origin: center top 0px;
                                  "
                                >
                                  <div class="d-flex grow flex-wrap">
                                    <div
                                      class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 green pa-7"
                                      style="width: 100%"
                                    >
                                      <div class="text-center">
                                        <h1
                                          class="display-2 font-weight-bold mb-2"
                                        >
                                          Student Login
                                        </h1>
                                      </div>
                                      <!---->
                                    </div>
                                    <!----><!---->
                                  </div>
                                  <div class="v-card__text text-center">
                                    <div
                                      class="v-input theme--light v-text-field v-text-field--is-booted mt-10"
                                    >
                                      <div class="v-input__control">
                                        <v-text-field
                                          v-model="email"
                                          id="input-46"
                                          type="text"
                                          color="green"
                                          light
                                          prepend-icon="mdi-email"
                                        >
                                        </v-text-field>
                                      </div>
                                    </div>
                                    <div
                                      class="v-input mb-0 theme--light v-text-field v-text-field--is-booted"
                                    >
                                      <div class="v-input__control">
                                        <v-text-field
                                          light
                                          color="green"
                                          v-model="password"
                                          prepend-icon="mdi-lock-outline"
                                          :append-icon="
                                            show1 ? 'mdi-eye' : 'mdi-eye-off'
                                          "
                                          :type="show1 ? 'text' : 'password'"
                                          name="input-10-1"
                                          @click:append="show1 = !show1"
                                        ></v-text-field>
                                        <br />
                                      </div>

                                      <div class="red--text text-subtitle-2">
                                        {{ error }}
                                      </div>
                                    </div>
                                    <div class="text-center">
                                      Not Signed Up?
                                      <v-btn
                                        class="transparent ml-0 success--text"
                                        elevation="0"
                                        href="/Register"
                                      >
                                        Register.
                                      </v-btn>
                                    </div>

                                    <button
                                      type="button"
                                      @click="onLogin"
                                      class="v-btn--text success--text v-btn v-btn--depressed v-btn--rounded theme--light v-size--large"
                                    >
                                      Login
                                    </button>
                                  </div>
                                  <!---->
                                </div>
                              </div>
                            </section>
                          </v-flex>
                        </v-layout>
                      </div>
                    </v-card-text>

                    <v-card
                      class="mx-auto rounded-b-xl transparent"
                      min-height="100"
                      flat
                      light
                    >
                    </v-card>
                  </v-card>
                </v-flex>
              </v-layout>

              <v-container grid-list-lg text-sm-center>
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
  background-image: url("https://rasput1n.blob.core.windows.net/internship-portal/website-images/cc3_2.jpg");
  background-position-y: center;
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
  opacity: 0.75;
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
  middleware: "auth",
  auth: "guest",
  layout: "none",
  data() {
    return {
      show1: false,
      show2: false,
      dialog: true,
      error: "",
      clipped: false,
      drawer: true,
      fixed: false,
      email: "",
      password: "",
      items: [
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
      miniVariant: false,
      right: true,
      rightDrawer: false,

      title: "IIIT INTERNSHIP PORTAL",
    };
  },
  methods: {
    async onLogin() {
      try {
        let data = {
          email: this.email,
          password: this.password,
        };
        let response = await this.$axios.$post(
          "http://localhost:3000/api/auth/login",
          data
        );
        if (response.success) {
          this.$cookies.set("jwt", response.token);
          //this.$router.push("/Dashboard");
          this.error = "";
          window.location.replace("/Dashboard");
        }
      } catch (err) {
        this.error = "Wrong Credentials";
        console.log(err);
      }
    },
  },
};
</script>
