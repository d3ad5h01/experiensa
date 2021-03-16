<template>
  <div class="Login">
    <v-app class="cyan lighten-5">
      <v-app-bar app color="cyan lighten-3">
        <v-container class="py-0 fill-height">
          <div class="text-h5 font-weight-bold cyan--text text-darken-5 mb-2">
            IIITA &nbsp;
          </div>
          <div class="gap"></div>
          <div
            class="text-h5 font-weight-medium white--text text-darken-5 mb-2"
          >
            Internship Portal
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-btn
              class="ma-2"
              color="cyan darken-1"
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
            >
              {{ item.title }}
            </v-btn>
          </div>
        </v-container>
      </v-app-bar>

      <v-main class="cyan lighten-5">
        <div class="registerPage">
    <div class="container">
      <v-card class="cyan lighten-1">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <nuxt-link to="/">
              <img src="/img/logo-black.png" alt class />
            </nuxt-link>
            <form class="mt-4">
              <div class="a-box a-spacing-extra-large">
                <div class="a-box-inner">
                  <h1 class="a-spacing-small">Sign In</h1>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="email"
                    />
                  </div>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table"
                      >Mot de Passe</label
                    >
                    <input
                      type="password"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="password"
                    />
                    <div class="a-alert-container">
                      <div class="a-alert-content">
                        Le mot de passe de contenir au moins 6 caractéres.
                      </div>
                    </div>
                    <div class="a-row a-spacing-extra-large mb-4">
                      <span class="a-button-primary">
                        <span class="a-button-inner">
                          <v-btn @click="onLogin">
                            <span class="a-button-text" 
                            >Continuer sur Amazon</span
                          >
                        </v-btn>
                        </span>
                      

                      </span>
                      <div class="a-row a-spacing-top-medium a-size-small">
                        <b>
                          En créant un compte, vous acceptez
                          <a href="#">les conditions d'utilisations</a> et
                          <a href="#">Notices de confidentialités</a>
                        </b>
                      </div>
                    </div>
                    <hr />
                    <div class="a-row">
                      <b>
                        Vous n'avez pas de compte?
                        <nuxt-link to="/signup" class="a-link-emphasis"
                          >Inscrivez vous</nuxt-link
                        >
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </v-card>
    </div>
  </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data: () => ({
    dialog: true,

    clipped: false,
    drawer: true,
    fixed: false,
    middleware: "auth",
    auth: "guest",
    layout: "none",
    items: [
      {
        icon: "mdi-apps",
        title: "Home",
        to: "/"
      },
      {
        icon: "mdi-chart-bubble",
        title: "ABOUT US",
        to: "/AboutUs"
      },
      {
        icon: "mdi-chart-bubble",
        title: "Login",
        to: "/Login"
      }
    ],
    email: "",
    password: "",
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: "IIIT INTERNSHIP PORTAL"
  }),
  methods: {
    async onLogin() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });
        this.$router.push("/Dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
