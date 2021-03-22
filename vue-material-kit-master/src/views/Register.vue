<template>
<div>
    <main-navbar></main-navbar>
<!--<md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">IIITA INTERNSHIP PORTAL</h3>
      </div>
      <div class="md-toolbar-section-end">
       

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              
            </mobile-menu>
            <md-list>
             

              
              
              <md-list-item
                href="#/"
                
              >
                <i class="fas fa-home"></i>
                <p >Home</p>
               
              </md-list-item>
                
              
               <md-list-item
                href="#/register"
                
              >
                <i class="fas fa-user-plus"></i>
                <p >Sign Up</p>
               
              </md-list-item>
              <md-list-item
                href="#/login"
               
              >
                <i class="fas fa-sign-in-alt"></i>
                <p>Login</p>
               
              </md-list-item>
              <md-list-item
                href="#/landing"
              >
                <i class="fas fa-users"></i>
                <p >About Us</p>
                
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>-->

  <div class="wrapper ">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Register</h4>
              
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg" href="#/login">
                Sign Up
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

.wrapper{
  height: 100vh;
}
</style>
<script>
import { LoginCard } from "@/components";
import MainNavbar from '../layout/MainNavbar.vue';

export default {
  components: {
    LoginCard,
    MainNavbar
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/2.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
