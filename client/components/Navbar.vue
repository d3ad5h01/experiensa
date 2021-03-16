<template>
    <nav>
       
        <v-app-bar color="blue darken-1" dark >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
        </v-app-bar>
  
      <v-navigation-drawer  v-model="drawer" absolute bottom temporary>
         
       <v-list-item class="mb-10 mt-10 d-flex justify-center">
         <v-icon x-large>mdi-account-box-multiple</v-icon>
      </v-list-item>
      <v-list-item-title class="title" align="center">
           TEZ
          </v-list-item-title>
          <v-list-item-subtitle align="center">
           IIT2019220@iiita.ac.in
          </v-list-item-subtitle>
      <v-list>
        <v-list-item-group
        v-model="selectedItem"
        color="blue">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          active-class="border"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-list>
        <!--<v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-green--text text--accent-4">
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>-->
      </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
           items: [
        { title: 'Profile', icon: 'mdi-account-circle' },
        { title: 'Internships', icon: 'mdi-account-search' },
        { title: 'Updates', icon: 'mdi-message' },
        { title: 'My Tasks', icon: 'mdi-format-list-bulleted' },  
        { title: 'Contact Us', icon: 'mdi-help-box' },
        { title: 'Log Out', icon: 'mdi-logout' },
        
      ],
      right: null,
        }
    }
}
</script>