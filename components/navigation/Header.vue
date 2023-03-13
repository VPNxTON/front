<template>
  <v-app-bar height="100">
    <v-container>
      <div class="d-flex align-center">
        <h1>VPNxTON</h1>
        <v-spacer></v-spacer>
        <v-btn v-for="route in routes" :key="route.path" :to="route.path">{{ route.title }}</v-btn>
        <v-spacer></v-spacer>

        <div v-if="state.status"> 
          <v-btn variant="flat" color="primary" @click="connectUserWallet">
          Connected
           </v-btn>
           <v-btn variant="flat" color="primary" @click="disconnectUser">
          Disconnected
           </v-btn>
        </div>
        <v-btn v-else variant="flat" color="primary" @click="connectUserWallet">
          Connect Wallet
           </v-btn>
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
  {
    path: '/whitepaper',
    title: 'whitepaper'
  },
]
</script>
