<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'
import {connector} from "~/utils/ton-connect";
import {userAuth} from "~/api/user/authUser";
import {useUserStore} from "~/stores/user";
const walletList = ref([])
getWalletsList().then((result)=>{
  walletList.value=result
  console.log(result)
})

const showConnectDialog = ref(false)
const qrCodeDialog = ref(false)

const linkToConnect = ref(null)
function connectWallet(wallet){
  linkToConnect.value=connectTonWallet(wallet)
  if(linkToConnect.value){
    qrCodeDialog.value=true
  }
}

const userSession = ref({})
const userStore = useUserStore()
connector.onStatusChange((walletInfo)=>{
      userSession.value=walletInfo
      showConnectDialog.value=false
      qrCodeDialog.value=false
      if (walletInfo==null){
        userStore.removeToken()
        return
      }
      if (walletInfo.account.address && !userStore.userToken){
        userAuth(walletInfo.account.address).then(({data})=>{
          userStore.setUserToken(data.value.token)
        })
      }
    }
);
</script>

<template>
  <v-dialog width="auto" v-model="showConnectDialog">
    <v-sheet color="black" class="overflow-hidden" max-width="400">
      <v-toolbar
          color="surface"
          title="Select wallet"
      ></v-toolbar>
      <v-dialog width="auto" v-model="qrCodeDialog">
        <v-sheet max-width="350" class="pa-4">
          <v-row>
            <v-col class="d-flex justify-center" cols="12">
              <QrcodeVue size="300" v-if="linkToConnect" :value="linkToConnect"></QrcodeVue>
            </v-col>
          </v-row>
        </v-sheet>
      </v-dialog>
      <v-row class="pa-4">
        <v-col cols="12" v-for="(wallet,key) in walletList" :key="key">
          <v-sheet @click="connectWallet(wallet)" class="w-100 pa-4" :style="{
            cursor: 'pointer'
          }" variant="flat" color="surface">
            <v-row align="center">
              <v-col cols="2">
                <v-avatar rounded="lg">
                  <v-img
                      :src="wallet.imageUrl"
                      :alt="wallet.name"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col>
                <h2 class="text-h6 font-weight-bold">
                  {{ wallet.name }}
                </h2>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </v-dialog>
  <v-btn v-if="!userSession?.account || !userStore.userToken" @click="showConnectDialog=true" variant="flat" color="primary">
    connect wallet
  </v-btn>
  <v-btn @click="exitFromWallet()" variant="flat" append-icon="mdi-exit-to-app" v-else color="error">
     {{userSession.account.address.slice(0,7)}} ...
  </v-btn>
</template>
