<template>
<div class="Material ">
  <v-app >

    <v-navigation-drawer
      v-model="drawer"
      app
      class="cyan lighten-3 elevation-3 rounded-r-xl"
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

    <v-main class="cyan lighten-5">
        <v-row>
            <v-col  cols="12">
     <v-container class="cyan lighten-5">
       <v-card class="cyan lighten-3 rounded-ls">
       <div>
      <v-toolbar flat color="cyan lighten-3">
        <v-toolbar-title class="text-h4 cyan--text darken-5">Study Material</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        
        
        <v-dialog v-model="dialog" max-width="500px" >
          <v-btn slot="activator" color="cyan darken-1" dark class="mb-2" @click="dialog=true">New Item</v-btn>
          <v-card  class="cyan darken-3">
            <v-card-title>
              <span class="headline">Edits...</span>
            </v-card-title>

            <v-card-text color="cyan darken-3" >
              <v-container grid-list-md class="cyan darken-3">
                <v-layout wrap >
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="title" label="Title" class="cyan darken-3" color="black" ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="link" label="link" color="black"></v-text-field>
                  </v-flex>

                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
              <v-btn color="cyan darken-1" flat @click.native="onAddAnnouncement">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
       
      <v-container class="cyan lighten-3">
      <v-data-table
        :headers="headers"
        :items="studycards"
         :search="search"
        hide-actions
        class="elevation-1 cyan darken-1"

      >

      
      <template #item.link="{ item }">
        
        <a a target="_blank" :href="item.link">
          Learn More
        </a>
    </template>

      </v-data-table>
      </v-container>
    </div>
      </v-card>
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
      let response = await $axios.$get("http://localhost:3000/api/studycards");

      return {
        studycards: response.studycards
      };
    } catch (err) {}
  },
    data: () => ({
      title:"",
      ide:"",
      link:"",
      ind:"",
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
          title: 'Students',
          to: '/Students'
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
      dialog: false,
      edt: 0,
    headers: [
      {
        text: 'Title',
        align: 'left',
        sortable: true,
        value: 'title'
      },
      { text: 'Learn More', value: 'link' },
     
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      link: 0,
    },
    defaultItem: {
     title: '',
    link: 0,
    }
    }),
    computed: {
   
  },





  }
  /*<template #item.val="{ item }">
        
        <a a target="_blank" :href="item.link">
          Learn More
        </a>
    </template> */

</script>



