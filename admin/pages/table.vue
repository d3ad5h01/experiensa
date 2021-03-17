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
        :items="desserts"
        :search="search"
        class="cyan darken-1"
         active-class="cyan darken-4" 
      >
       
    
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
          text: 'Topics',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Learn More', value: 'val' },
        
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
               activeFilters: {},
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    }),

  computed: {
    headers () {
      return [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: true,
          value: 'name',
          filter: value => {
            return this.activeFilters.name ? this.activeFilters.name.includes(value) : true;
          }
        },
        { text: 'Calories', value: 'calories',
          filter: value => {
            return this.activeFilters.calories ? this.activeFilters.calories.includes(value) : true;
          }
        },
        { text: 'Status', value: 'status',
          filter: value => {
            return this.activeFilters.status ? this.activeFilters.status.includes(value) : true;
          }
        },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ]
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    desserts (val) {
      this.initFilters()
      //this.activeFilters = {} // TODO change this
      //this.activeFilters = Object.assign({}, this.filters)
    }
    /*filters: {
      deep: true,
      handler(val) {
        console.log(val)
      }
    }*/
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          status: 'DIET'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          status: 'NO DIET'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          status: 'DIET'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          status: 'NO DIET'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          status: 'DIET'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          status: 'NO DIET'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          status: 'NO DIET'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          status: 'NO DIET'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          status: 'FAT DIET'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          status: 'FAT DIET'
        },
      ];
      //this.initFilters()
    },
    
    initFilters() {
      for (col in this.filters) {
        this.filters[col] = this.desserts.map((d) => { return d[col] }).filter(
          (value, index, self) => { return self.indexOf(value) === index }
        )
      }
      // TODO restore previous activeFilters before add/remove item
      this.activeFilters = Object.assign({}, this.filters)
      /*if (Object.keys(this.activeFilters).length === 0) this.activeFilters = Object.assign({}, this.filters)
      else {
        setTimeout(() => {
          console.log(this.activeFilters)
          //this.activeFilters = Object.assign({}, this.filters)
        }, 1)
      }*/
    },
    
    toggleAll (col) {
      this.activeFilters[col] = this.desserts.map((d) => { return d[col] }).filter(
        (value, index, self) => { return self.indexOf(value) === index }
      )
    },
    
    clearAll (col) {
      this.activeFilters[col] = []
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    
  },
};
</script>
