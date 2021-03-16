
<template>
<div class="AboutUs">
     
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
        
      <v-container color="black">
        <v-row>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
          >
            <v-card height="500" class="cyan lighten-3"></v-card>
          </v-col>
        </v-row>
      </v-container>
   
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
</script>
