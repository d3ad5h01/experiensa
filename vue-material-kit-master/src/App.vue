<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <div>
        <router-view />
      </div>
      
    </div>
  </div>
</template>
