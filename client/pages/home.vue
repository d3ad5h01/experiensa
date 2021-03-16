<<<<<<< HEAD


<template>
<div class="Home">
     
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
         class="ma-2"
      
      color="cyan darken-1"
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
         
    
    
    <v-main class="white">
      <v-container >
          <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
         Welcome to IIITA Internship Portal
        </v-card-title>
        <v-card-text>
          <p>This portal is to help students .</p>
          
          
        </v-card-text>
        <v-card-actions>
          <v-spacer />
        
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
      title: 'IIIT INTERNSHIP PORTAL'
    }
   )
  
}
=======
<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          <!-- Sidebar -->
        </div>

        <!-- Main Content -->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <FeaturedProduct />

          <div class="mainResults">
            <ul class="s-result-list">
              <li
                class="s-result-item celwidget"
                v-for="product in products"
                :key="product._id"
              >
                <div class="s-item-container">
                  <!-- Best seller -->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">Best Seller</a>
                    </div>
                  </div>

                  <div>
                    <div class="row">
                      <!-- Image -->
                      <div class="col-sm-3 text-center">
                        <!--<a href="#">
                          <img
                            :src="product.photo"
                            style="width: 150px;"
                            class="img-fluid"
                          />
                        </a>-->
                      </div>

                      <div class="col-sm-9">
                        <div class="a-row a-spacing-small">
                          <!-- Title and Date -->
                          <a href="#" class="a-link-normal">
                            <h2 class="a-size-medium">
                              {{ product.title }}
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-smaill a-color-secondary"
                                >Sep 3, 2019</span
                              >
                            </h2>
                          </a>
                        </div>

                        <!-- Author's Name -->
                        <div class="a-row a-spacing-small">
                          <span class="a-size-small a-color-secondary">by</span>
                          <span class="a-size-small a-color-secondary">
                            <!--<a href="#" class="a-link-normal a-text-normal">
                              {{product.owner.name}}</a>-->
                          </span>
                        </div>

                        <!-- Shipment -->
                        <div class="a-row">
                          <span class="a-size-small">Ships to USA</span>
                        </div>

                        <div class="row">
                          <div class="col-sm-7">
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal"
                                >Hardcover</a
                              >
                            </div>

                            <!-- Price -->
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">
                                <span class="a-offscreen"
                                  >${{ product.price }}</span
                                >
                                <span class="a-color-base sx-zero-spacing">
                                  <span class="sx-price large">
                                    <sup class="sx-price-currency">$</sup>
                                    <span class="sx-price-whole">{{
                                      product.price
                                    }}</span>
                                    <sup class="sx-price-fractional">00</sup>
                                  </span>
                                </span>
                              </a>
                              <span class="a-letter-space"></span>
                              <span
                                class="a-szie-base-plus a-color-secondary a-text-strike"
                                >$28.00</span
                              >
                            </div>

                            <!-- Audible Trial -->
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary"
                                >Free with Audible trial</span
                              >
                            </div>
                            <hr />

                            <!-- Other Formats -->
                            <span class="a-size-small a-color-secondary">
                              Other Formats:
                              <span class="a-letter-space"></span>
                              <a
                                href="#"
                                class="a-size-small a-link-normal a-text-normal"
                                >Audio CD</a
                              >
                            </span>
                          </div>

                          <!-- Ratings -->
                          <div class="col-sm-5">
                            <div class="a-row a-spacing-mini">
                              <!-- Star Ratings -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from "~/components/FeaturedProduct";
export default {
  components: {
    FeaturedProduct
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/products");

      return {
        products: response.products
      };
    } catch (err) {
      console.log(err);
    }
  }
};
>>>>>>> 8e76b7c24fe41e6840702af0635aa75f0fdb9bf8
</script>
