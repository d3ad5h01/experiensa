<template>
<div class="Material">
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
        Study Material
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
        :items="studycards"
        :search="search"
        class="cyan darken-1"
         active-class="cyan darken-4" 
      >
       
     <template #item.val="{ item }">
        
        <a a target="_blank" :href="item.link">
          Learn More
        </a>
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
      async asyncData ({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/studycards");

      return {
        studycards: response.studycards
      };
    } catch (err) {}
  },
      cards: ['Materials'],
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
          text: 'Topics',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Learn More', value: 'link' },
        
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          val:'Learn More',
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
        {
          name: 'Bkjhkfdl',
          val:'Learn More',
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
        {
          name: 'ndlal',
          val:'Learn More',
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
        {
          name: 'Fldkv;d',
          val:'Learn More',
          website: "https://www.geeksforgeeks.org/count-ways-to-select-n-pairs-of-candies-of-distinct-colors-dynamic-programming-bitmasking/",
        },
              ],
    }),
  }
</script>