<template>
<div class="Internships">
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
       <v-container >
          
        
       <v-card class="cyan lighten-3">
      <v-container>
      <v-card-title>
       Internships
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        class="cyan darken-1"
         active-class="cyan darken-4" 
      >
       
     <template #item.val="{ item }">
        
       
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="cyan lighten-3"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card class="cyan darken-3">
        <v-card-title>
          <span class="headline">{{item.name}}</span>
        </v-card-title>
        <v-card-text>
           wisi et, sollicitudin nunc vestibulum, 
           cursus accumsan nunc pede tempus mi ipsum, 
           ligula sed. Non condimentum ac dolor sit. 
           Mollis eu aliquam, vel mattis mollis massa 
           ut dolor ante, tempus lacinia arcu. Urna vestibulum
            lorem, nulla fermentum, iaculis ut congue ac vivamus.
             Nam libero orci, pulvinar nulla, enim pellentesque 
             consectetuer leo, feugiat rhoncus rhoncus vel. Magna 
             sociosqu donec, dictum cursus ullamcorper viverra. 
             Ultricies quis orci lorem, suspendisse ut vestibulum 
             integer, purus sed lorem pulvinar habitasse turpis.
          +
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        
        </v-card-actions>
      </v-card>
    </v-dialog>
  
    </template>
      </v-data-table>
      </v-container>
    </v-card>
   
  
      </v-container>
    </v-main>
  </v-app>
</div>
</template>

<style>
a:link {
  color: white;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: white;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color:yellow;
  background-color: transparent;
  text-decoration: underline;
}


</style>

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
       search: '',
      headers: [
        {
          text: 'Companies',
          align: 'start',
          sortable: false,
          value: 'name',
        },

        { text: 'Start Date', value: 'StartDate' },
        { text: 'Last Date', value: 'EndDate' },
        { text: 'CTC', value: 'CTC' },
        { text: 'Apply', value: 'Apply' },
        { text: 'Learn More', value: 'val' },
        
      ],
      desserts: [
        {
          name: 'Airtel',
          val:'Learn More',
          StartDate: "12/02/2021",
          EndDate: "15/03/2021",
          CTC:"10LPA",
          Apply:"Apply",
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
        {
           name: 'Bugatti',
          val:'Learn More',
          StartDate: "14/02/2021",
          EndDate: "15/05/2021",
          CTC:"14LPA",
          Apply:"Apply",
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
        {
           name: 'HelloWorld',
          val:'Learn More',
          StartDate: "19/02/2021",
          EndDate: "15/03/2021",
          CTC:"11LPA",
          Apply:"Done",
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
        {
           name: 'Netflix',
          val:'Learn More',
          StartDate: "13/02/2021",
          EndDate: "17/03/2021",
          CTC:"18LPA",
          Apply:"Done",
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
              ],
    }),
  }
</script>