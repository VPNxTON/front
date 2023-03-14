<template>
  <v-app-bar height="100">
    <v-container>
      <div class="d-flex align-center">
        <h1>VPNxTON</h1>
        <v-spacer></v-spacer>
        <v-btn v-for="route in routes" :key="route.path" :to="route.path">{{ route.title }}</v-btn>
        <v-btn @click="openWhitepapperPdf">
          whitepaper
        </v-btn>
        <v-spacer></v-spacer>
        <ton-connect-wallet></ton-connect-wallet>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
const routes = [
  {
    path: '/',
    title: 'connect'
  },
  {
    path: '/history',
    title: 'history'
  },
  {
    path: '/about',
    title: 'how it works'
  },
]

function openWhitepapperPdf(){
  window.open('https://static.def.team/vpnxton/VPNxTON.pdf', '_blank');
}
</script>
