<template>
<div class="Dashboard">
  <v-app >
    <v-system-bar app class="cyan darken-3">
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

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

    <v-main class="white">
        <v-row>
            <v-col  cols="12">
      <v-container
        class=" white"
        fluid
       
      >
        <v-row class="white">
          <v-col
            cols="12"
            class="white"
          >
            <v-card class="cyan lighten-3 ">
              <v-subheader class="black--text text-h5  font-weight-regular">Announcements</v-subheader>
              
              <v-container>
                
              <v-list two-line class="cyan lighten-3">
                
                <template v-for="announcementcard in announcementcards" >
                  <div :key="announcementcard._id"
                    class="white rounded-lg">
                  <v-list-item

                    
                   
                  >
                    <v-list-item-avatar color="cyan darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="black--text  font-weight-regular">{{announcementcard.title}}</v-list-item-title>

                      <v-list-item-subtitle class="black--text  font-weight-regular">
                        {{announcementcard.description}}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    
                  </v-list-item>
                    <v-sheet
  color="cyan lighten-3 rounded-lg"
  height="10"
  
></v-sheet>
</div>
                  
                </template>
              </v-list>
              
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </v-col>
      
      
      </v-row>
    </v-main>
  </v-app>
</div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/announcementcards");

      return {
        announcementcards: response.announcementcards
      };
    } catch (err) {}
  },
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