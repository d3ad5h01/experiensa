<template>
  <div class="wrapper">
    <main-navbar></main-navbar>
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
       
            <div class="brand">
              
              <h1>eXperiensa </h1>
              <h2></h2>
              <h3>the IIITA Internship Portal.</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <!--<div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Basic Elements</h2>
          </div>
          <basic-elements></basic-elements>
        </div>
      </div>-->
      <!--<div class="section section-navbars">
        <div class="container">
          <small-navigation></small-navigation>
        </div>
        <navigation></navigation>
      </div>-->
     <!-- <div class="section section-tabs">
        <div class="container">
          <tabs></tabs>
        </div>
      </div>-->
      <!--<div class="section section-white">
        <div class="container">
          <nav-pills></nav-pills>
        </div>
      </div>-->
      <!--<div class="section section-notifications">
        <div class="container">
          <div class="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <notifications></notifications>
      </div>-->
      <!--<div class="section">
        <div class="container">
          <typography-images></typography-images>
        </div>
      </div>-->
      <div class="section section-download" id="downloadSection">
        <div class="container">
          <div class="md-layout ">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Welcome to eXperiensa</h2>
               
              <h4>
                This is IIIT Internship Portal to help students.The Indian Institute of Information Technology Allahabad (IIIT-A) was established in 1999. The institute was conferred as a "Deemed University" in 2000. In 2014 the IIIT Act was passed, under which IIITA and four other Institutes of Information Technology funded by the Ministry of Human Resource Development were classed as Institutes of National Importance.
              </h4>
            </div>
           <javascript-components></javascript-components>
          </div>

          <div class="md-layout text-center justify-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Lets Get Started...</h2>
            </div>
            <div class="md-layout-item md-size-35 md-small-size-50 mx-auto">
               <center>
              <div class="btn-container text-center">
               
                <md-button
                   href="#/register"
                  class="md-button md-success md-lg md-upgrade"
                  ><md-icon>unarchive</md-icon>Sign Up to register</md-button
                >
                <md-button
                   href="#/login"
                  class="md-button md-success md-lg md-upgrade"
                  ><md-icon>unarchive</md-icon>Login</md-button
                >
                
              </div>
              </center>
            </div>
          </div>
        </div>
      </div>
     
     <!-- <div class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>Completed with examples</h2>
              <h4>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </h4>
            </div>
          </div>
        </div>
      </div>-->
     <!-- <div class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"
            >
              <login-card header-color="green">
                <h4 slot="title" class="card-title">Login</h4>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">Or Be Classical</p>
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
                <md-button slot="footer" class="md-simple md-success md-lg">
                  Get Started
                </md-button>
              </login-card>
            </div>
          </div>
        </div>
      </div>-->
      <!--<div class="md-layout">
        <div class="md-layout-item text-center">
          <md-button href="#/login" class="md-simple md-success md-lg"
            >View Login Page</md-button
          >
        </div>
      </div>-->
      <!--<div class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">
            <div class="md-layout-item">
              <a href="#/landing" target="_blank">
                <img
                  :src="landing"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/landing" class="md-simple md-success md-lg"
                >View Landing Page</md-button
              >
            </div>
            <div class="md-layout-item">
              <a href="#/profile" target="_blank">
                <img
                  :src="profile"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/profile" class="md-simple md-success md-lg"
                >View Profile Page</md-button
              >
            </div>
          </div>
        </div>
      </div>-->
      
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '../layout/MainFooter.vue';
import MainNavbar from '../layout/MainNavbar.vue';
import BasicElements from "./components/BasicElementsSection";
/*import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";*/
//import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";

//import { LoginCard } from "@/components";

export default {
  components: {
    /*BasicElements,
   /* Navigation,
    SmallNavigation,
    Tabs,
    NavPills,
    Notifications,
    TypographyImages,*/
    JavascriptComponents,
    MainNavbar,
    MainFooter,
    //LoginCard
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/2.jpg")
    },

    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
