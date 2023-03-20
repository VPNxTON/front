<template>
  <v-app-bar height="100">
    <v-container>
      <div class="d-flex align-center">
        <h1>VPNxTON</h1>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon v-if="isMobile" @click="showMenu=true"></v-app-bar-nav-icon>
        <template v-if="!isMobile">
          <v-btn v-for="route in routes" :key="route.path" :to="route.path">{{ route.title }}</v-btn>
          <v-btn @click="openWhitepapperPdf">
            whitepaper
          </v-btn>
          <v-btn v-if="userToken" to="/history">
            history
          </v-btn>
          <v-spacer></v-spacer>
          <ton-connect-wallet></ton-connect-wallet>
        </template>
      </div>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer  temporary v-model="showMenu">
    <v-list density="compact">
      <v-list-item v-for="route in routes" :key="route.path">
        <v-btn :to="route.path">{{ route.title }}</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn @click="openWhitepapperPdf">
          whitepaper
        </v-btn>
      </v-list-item>
      <v-list-item>
        <ton-connect-wallet></ton-connect-wallet>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {useUserStore} from "~/stores/user";
import {useDisplay} from "vuetify";
const viewport = ref(useDisplay().mobile)
const showMenu = ref(false)

const isMobile = computed(()=>{
  return viewport.value
})

const mainStore = useUserStore()
const {userToken} = toRefs(mainStore)

const routes = [
  {
    path: '/',
    title: 'connect'
  },
  {
    path: '/about',
    title: 'how it works'
  },
]

function openWhitepapperPdf(){
  window.open('https://vpnxton.def.team/VPNxTON.pdf', '_blank');
}
</script>
