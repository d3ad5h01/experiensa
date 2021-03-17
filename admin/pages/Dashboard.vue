<template>
<div class="Dashboard">
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

    <v-main class="white">
        <v-row>
            <v-col  cols="12">
     <v-container>
       <div>
      <v-toolbar flat color="white">
        <v-toolbar-title>Announcements</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark class="mb-2" @click="dialog=true">New Item</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="title" label="Title"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="description" label="Description"></v-text-field>
                  </v-flex>

                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
              <v-btn color="blue darken-1" flat @click.native="onAddAnnouncement">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>

      <v-data-table
        :headers="headers"
        :items="announcementcards"
        hide-actions
        class="elevation-1"
      >
      <template #item.edit="{ item }">

       <v-icon
              small
              class="mr-2"
              color="success"
              @click="editItem(item)"
            >
            Edit
            </v-icon>
            <v-icon
              small
              color="error"
          @click="deleteItem(announcemntcard._id,item)"
            >
              Delete
            </v-icon>
       <btn>

       </btn>
    </template>

      </v-data-table>
    </div>
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
      title:"",
      description:"",
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
      dialog: false,
    headers: [
      {
        text: 'Title',
        align: 'left',
        sortable: false,
        value: 'title'
      },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'edit', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      description: 0,
    },
    defaultItem: {
     title: '',
    description: 0,
    }
    }),
    computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },





  methods: {

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      //this.editedItem = Object.assign({}, item)
      this.editedItem = {
          title: item.title,
          description: item.description
        };
      this.dialog = true
    },

   async deleteItem (id,item) {
      const index = this.desserts.indexOf(item)

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
     try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/announcementcards/${id}`
        );

        if (response.status) {
          this.announcementcards.splice(index, 1);
        }
      } catch (err) {}


    },

    async onAddAnnouncement() {
      try {
        console.log(this.title);
        console.log(this.description);
        let data = {
          title: this.title,
          description: this.description
        };
        let response = await this.$axios.$post(
          "http://localhost:3000/api/announcementcards",
          data
        );
    this.announcementcards.push(data);

      } catch (err) {
        console.log(err);
      }
       //this.announcementcards.push(data);
          this.dialog=false;
          this.$router.push("/Dashboard");
    },
  },

    close () {
      this.dialog = false

    },

    async save () {
        let data = {
        title: this.title,
        description: this.description
      }
       {
        let result = await this.$axios.$put(
        `http://localhost:3000/api/announcementcards/${this.$route.params.id}`,
        data
      );
        this.desserts.push(this.editedItem)
      }
      //this.close()
    }
  }

</script>

