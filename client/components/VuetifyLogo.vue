<template>
  <img class="VuetifyLogo" alt="Vuetify Logo" src="/iiita.png" />
</template>

<style>
.VuetifyLogo {
  height: 70px;
  width: 70px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
