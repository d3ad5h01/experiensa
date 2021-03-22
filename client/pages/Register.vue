<template>
<div class="Register">

    <v-app class="cyan lighten-5">
    <v-app-bar
      app
      color="cyan lighten-3"

    >

      <v-container class="py-0 fill-height">
        <div class="text-h5 font-weight-bold cyan--text text-darken-5 mb-2"> IIITA &nbsp; </div>
        <div class='gap'> </div>
        <div class="text-h5 font-weight-medium white--text text-darken-5 mb-2">  Internship Portal</div>
        <v-spacer></v-spacer>
        <div>
        <v-btn
          class="ma-2

      cyan darken-1"
       active-class="grey lighten--5 cyan--text"
           v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
                >
          {{item.title}}
        </v-btn>
</div>



      </v-container>
    </v-app-bar>



    <v-main class="cyan lighten-5">
      <v-container >
        <div class="Home ">

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12 cyan lighten-1 ">
              <v-toolbar
                class="cyan darken-1"
              >

              <v-layout
          align-center
          justify-center

        >
                <v-toolbar-title >Register</v-toolbar-title>
              </v-layout>

                <v-tooltip bottom>

                </v-tooltip>
                <v-tooltip right>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form >
                  <v-text-field
                    label="Name"
                    v-model="name"
                    name="login"
                    type="text"
                    prepend-icon="mdi-name"
                    color="cyan darken-2"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    v-model="email"
                    name="login"
                    type="text"
                     prepend-icon="mdi-email"
                     color="cyan darken-2"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                     color="cyan darken-2"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="cyan darken-1" @click="onRegister">Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>







     </div>
      </v-container>
    </v-main>


  </v-app>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
   data: () => ({
      dialog: true,

      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Sign Up',
          to: '/Register'
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'ABOUT US',
          to: '/AboutUs'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Login',
          to: '/Login'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
       email: "",
       password: "",
       name: "",
      title: 'IIIT INTERNSHIP PORTAL'
    }
   ),
  methods: {
    async onRegister() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        let response = await this.$axios.$post(
          "http://localhost:3000/api/auth/signup",
          data
        );
        if(response) {
          this.name="";
          this.email = "";
          this.password = "";
          this.$router.push("/Login");
        }
      } catch (err) {
        console.log(err);
      }}

  },
};
</script>
