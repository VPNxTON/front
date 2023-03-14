<template>
  <v-app-bar height="100">
    <v-container>
      <div class="d-flex align-center">
        <h1>VPNxTON</h1>
        <v-spacer></v-spacer>
        <v-btn v-for="route in routes" :key="route.path" :to="route.path">{{ route.title }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="primary">
          Connect wallet
        </v-btn>
        <h1>{{ TonConnectButton }}</h1>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>

import { TonConnectButton } from '@tonconnect/ui-react';


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
