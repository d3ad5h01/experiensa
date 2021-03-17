<template>
<div class="Internships ">
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
        <v-toolbar-title class="text-h4 cyan--text darken-5">Internships</v-toolbar-title>
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
                    <v-text-field v-model="company" label="company" class="cyan darken-3" color="black" ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="stipend" label="stipend" color="black"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="duration" label="Duration" color="black"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>

                    <v-text-field v-model="startDate" label="Start date" color="black"></v-text-field>
                  </v-flex>
                  
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="applyBy" label="Apply By" color="black"></v-text-field>
                  </v-flex>

                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
              <v-btn color="cyan darken-1" flat @click.native="onAddinterncard">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
       
      <v-container class="cyan lighten-3">
      <v-data-table
        :headers="headers"
        :items="interncards"
         :search="search"
        hide-actions
        class="elevation-1 cyan darken-1"

      >

      
      <template #item.edit="{ item }">
       <v-btn class="green darken-4 ">
       <v-icon
              small
              class="mr-2"
              color="success"
              @click="editItem(item)"
            >
            Edit
            </v-icon>
            </v-btn>
            <v-btn>
            <v-icon
              small
              color="error"
          @click="deleteItem(interncards[interncards.indexOf(item)]._id,item)"
            >
              Delete
            </v-icon>
            </v-btn>
       <btn>

       </btn>
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
      let response = await $axios.$get("http://localhost:3000/api/interncards");

      return {
        interncards: response.interncards
      };
    } catch (err) {}
  },
    data: () => ({
      title:"",
      ide:"",
      description:"",
      ind:"",
      cards: ['interncards'],
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

      /*interncard.company = req.body.company;
    interncard.role = req.body.role;
    interncard.stipend = req.body.stipend;
    interncard.duration = req.body.duration;
    interncard.startDate = req.body.startDate;
    interncard.applyBy = req.body.applyBy; */
    headers: [
      {
        text: 'Company',
        align: 'left',
        sortable: true,
        value: 'company'
      },
      { text: 'Stipend', value: 'stipend' },
      { text: 'Duration', value: 'duration' },
      { text: 'Start Date', value: 'startDate' },
      { text: 'Apply By', value: 'applyBy' },
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
    company:'',
    stipend:'',
    duration:'',
    startDate: '',
    applyBy: '',
    }
    }),
    computed: {
   
  },
  methods: {

    editItem (item) {
      this.edt=1;
      this.company=this.interncards[this.interncards.indexOf(item)].company;
      this.stipend=this.interncards[this.interncards.indexOf(item)].stipend;
      //this.stipend=this.interncards[this.interncards.indexOf(item)].stipend;
      this.duration=this.interncards[this.interncards.indexOf(item)].duration;
      this.startDate=this.interncards[this.interncards.indexOf(item)].startDate;
      this.applyBy=this.interncards[this.interncards.indexOf(item)].applyBy;
      
      this.ind=this.interncards.indexOf(item);
      this.dialog=true;
    },

   async deleteItem (id,item) {
      const index = this.interncards.indexOf(item)

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
     try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/interncards/${id}`
        );
      console.log(response);
        if (response.status) {
          this.interncards.splice(index, 1);
        }
      } catch (err) {}


    },

    async onAddinterncard() {
      
      if(this.edt==1)
      {
        this.ide = this.interncards[this.ind]._id;
        let data = {
        company: this.company,
        stipend: this.stipend,
        duration: this.duration,
        startDate: this.startDate,
        applyBy: this.applyBy,
        };
          let result = await this.$axios.$put(
        `http://localhost:3000/api/interncards/${this.ide}`,
        data
      );
      this.dialog=false;
     
      this.company=this.interncards[this.ind].company;
      this.stipend=this.interncards[this.ind].stipend;
      this.duration=this.interncards[this.ind].duration;
      this.startDate=this.interncards[this.ind].startDate;
      this.applyBy=this.interncards[this.ind].applyBy;
      this.edt=0;
      }
      else
      {
      try {
        console.log(this.company);
        //console.log(this.);
        
        
        let data = {
        company: this.company,
        stipend: this.stipend,
        
        duration: this.duration,
        startDate: this.startDate,
        applyBy: this.applyBy,
        };
        let response = await this.$axios.$post(
          "http://localhost:3000/api/interncards",
          data
        );
      this.interncards.push(data);
       this.company="";
      this.stipend="";
      this.duration="";
      this.startDate="";
      this.applyBy="";
      } catch (err) {
        console.log(err);
      }}
          //this.dialog=false;
      
    },


    
    
  }
  }

</script>

