<template>
<div class="Profile">
  <v-app >
    
    <v-navigation-drawer
      v-model="drawer"
      app
      class="cyan lighten-3 "
    >
      <v-sheet
        class="pa-4 cyan lighten-3"
      >
        <v-avatar
          class="mb-4 "
          color="cyan lighten-1"
          size="64"
        ></v-avatar>

        <div class="black--text text-darken-5">john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
            
         v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>{{item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title><div class="black--text  font-weight-regular">{{ item.title }}</div></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <v-container>
<v-row>
            <v-col  cols="12">
      <v-container
        class=" grey lighten-3"
        fluid
       
      >
        <v-row class="grey lighten-3">
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
            class="grey lighten-3"
          >
            <v-card class="cyan lighten-3 ">
                <v-sheet
  color="cyan lighten-3 rounded-lg"
  height="10"
  
></v-sheet>
              <v-layout
          align-center
          justify-center
          
        >

         <v-avatar
          class="mb-4 "
          color="cyan lighten-1"
          size="100"
        ></v-avatar>
              <v-subheader class="black--text text-h5  font-weight-regular"></v-subheader>
              </v-layout>
              <v-container>
                
              <v-list two-line class="cyan lighten-3">
                <v-row>
                  <v-col cols="6">
                <template>
                  <div class="white rounded-lg">
                  <v-list-item
                  >
                    <v-list-item-content>
                      <v-list-item-subtitle class="black--text  text-h5 font-weight-regular">
                       user.name
                      </v-list-item-subtitle>
                      <v-list-item-title class="black--text text-subtitle-2  font-weight-light">Name</v-list-item-title>

                      
                    </v-list-item-content>
                    
                  </v-list-item>
                    
</div>
                  
                </template>
                </v-col>
                <v-col cols="6">
                <template>
                  <div class="white rounded-lg">
                  <v-list-item
                  >
                    <v-list-item-content>
                      <v-list-item-subtitle class="black--text  text-h5 font-weight-regular">
                       user.email
                      </v-list-item-subtitle>
                      <v-list-item-title class="black--text text-subtitle-2  font-weight-light">Email</v-list-item-title>

                      
                    </v-list-item-content>
                    
                  </v-list-item>
                    
</div>
                  
                </template>
                </v-col>
                <v-col cols="12">
                <template>
                  <div class="cyan lighten-3 rounded-lg">
                  <v-list-item
                  >
                    <v-list-item-content>
                       <p class="black--text  text-subtitle-2 font-weight-regular">Wikipedia (/ˌwɪkɪˈpiːdiə/ (About this soundlisten) wik-ih-PEE-dee-ə or /ˌwɪki-/ (About this soundlisten) wik-ee-) is a free, multilingual open-collaborative online encyclopedia created and maintained by a community of volunteer contributors using a wiki-based editing system. Wikipedia is the largest general reference work on the Internet,[3] and one of the 15 most popular websites as ranked by Alexa; in 2021, it was ranked as the 13th most visited.[4][note 3] The project carries no advertisements and is hosted by the Wikimedia Foundation, an American non-profit organization funded mainly through donations, 80% of which are small donations from individual users.[6]

Wikipedia was launched on January 15, 2001, by Jimmy Wales and Larry Sanger; Sanger coined its name as a portmanteau of "wiki" and "encyclopedia".[7][8] Initially available only in English, versions in other languages were quickly developed. The English Wikipedia, with 6.3 million articles as of March 2021, is the largest of the 319 language editions. Combined, Wikipedia's editions comprise more than 56 million articles, and attract more than 17 million edits and more than 1.7 billion unique visitors per month.[9][10]

Wikipedia has been criticized for its uneven.</p> 
                      <v-list-item-title class="black--text text-subtitle-2  font-weight-light">About Me</v-list-item-title>

                      
                    </v-list-item-content>
                    
                  </v-list-item>
           
</div>
                  
                </template>
                </v-col>
 <v-col cols="6">
                <template>
                  <div class="white rounded-lg">
                  <v-list-item
                  >
                    <v-list-item-content>
                      <v-list-item-subtitle class="black--text  text-h5 font-weight-regular">
                       4
                      </v-list-item-subtitle>
                      <v-list-item-title class="black--text text-subtitle-2  font-weight-light">Semester</v-list-item-title>

                      
                    </v-list-item-content>
                    
                  </v-list-item>
                  
</div>
                  
                </template>
                </v-col>
                </v-row>
              </v-list>
              
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </v-col>
</v-row>
</v-container>
    </v-main>
  </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
      cards: ['Announcements'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
        items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/Dashboard'
        },
         {
          icon: 'mdi-account',
          title: 'Profile',
          to: '/Profile'
        },
         {
          icon: 'mdi-bookshelf',
          title: 'Study Material',
          to: '/Material'
        },
         {
          icon: 'mdi-file-document-multiple',
          title: 'Internships',
          to: '/Internships'
        },
        {
          icon: 'mdi-logout',
          title: 'Logout',
          to: '/'
        }
      ],
    }),
  }
</script>