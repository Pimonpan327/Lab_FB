<script setup>
import { RouterLink, RouterView } from "vue-router";

import LoginPage from "./components/LoginPage.vue";
</script>

<template>
  <v-app>
    <v-app-bar :elevation="11" color="#2A3B4D" theme="dark" density="compact">
      <div class="wrapper">
        <v-app-bar-title>PetShop</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text"><RouterLink to="/">Home</RouterLink></v-btn>
        <v-btn variant="text"
          ><RouterLink to="/data">infopet</RouterLink></v-btn
        >
        <v-btn variant="text"><RouterLink to="/buy">Buy</RouterLink></v-btn>
        <v-btn variant="text"
          ><RouterLink to="/order">Myorder</RouterLink></v-btn
        >
        <v-btn variant="text"><RouterLink to="/login">Login</RouterLink></v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <LoginPage />
        <RouterView
      /></v-container>
    </v-main>
  </v-app>
</template>
