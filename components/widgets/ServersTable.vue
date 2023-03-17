<script lang="ts" setup>
import {getServersList} from "~/api/servers/getServersList";
import {useUserStore} from "~/stores/user";
import {addNewServer} from "~/api/user/addNewServer";
import {connectToServer} from "~/api/servers/connectToServer";

const serverList = ref([])
const mainStore = useUserStore()
const {userToken,activeServersList} = toRefs(mainStore)
const loading = ref(activeServersList.value.length==0)
getServersList().then(({data})=>{
  mainStore.setServerList(  serverList.value=data.value)
  loading.value=false
  serverList.value=data.value
})
const showDialog = ref(false)
const form = ref(null)
const formData=ref({
  email:'',
  raw_config:''
})
const table ={
  headers:[
    {
      title: 'Id',
      key: 'uuid'
    },
    {
      title: 'VPN server',
      key: 'name'
    },
    {
      title: 'Nft',
      key: 'description'
    },
    {
      title: 'Country',
      key: 'countryISO'
    },
    {
      title: 'Type',
      key: 'type'
    },
    {
      title: '',
    },
  ]
}
const showAlert = ref(false)
async function addServer(){
  const { valid } = await form.value.validate()
  if (valid){
    addNewServer(userToken,formData).then((response)=>{
      if (response){
        showAlert.value=true
        formData.value={...formData,     email:'',
          raw_config:''}
        setTimeout(()=>{
          showAlert.value=false
        },2000)
      }
    })
  }
}

function connectServer(item){
  console.log(item)
  connectToServer(item.nft,userToken).then((response)=>{
    const {data} = response
    downloadConfig(data.value,item.nft)
  })
}

function downloadConfig(data,name:string='raw_config'){
  let a = document.createElement("a");
  let file = new Blob([data], {type: 'text/xml'});
  a.href = URL.createObjectURL(file);
  a.download = `${name}.ovpn`;
  a.click();
}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-btn v-if="userToken" @click="showDialog=true" variant="tonal">Add your VPN server</v-btn>
      <v-dialog max-width="500" v-model="showDialog">
        <v-sheet class="pa-4 rounded-lg">
          <v-form ref="form">
            <h2 class="text-h5 font-weight-bold mb-5">Add new server</h2>
            <v-sheet class="pa-2 mb-7 pl-5 pr-5" v-if="showAlert" color="success">
              <div class="font-weight-bold">Success</div>
              <div>Request has been sent</div>
            </v-sheet>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="formData.email" :rules="[v => !!v || 'Email is required']" :hide-details="false" required label="Email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea  v-model="formData.raw_config" :rules="[v => !!v || 'Field is required']"  :hide-details="false" requiredlabel="raw_config"></v-textarea>
              </v-col>
              <v-col>
                <v-btn @click="addServer" width="150" color="primary">Add</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-sheet>
      </v-dialog>
    </v-col>
    <v-col cols="12">
      <v-sheet class="pa-4 rounded-lg">
        <v-table fixed-header height="60vh">
          <thead>
          <tr>
            <th v-for="(header,key) in table.headers" :key="key" class="text-left">
              {{header.title}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(item,key) in activeServersList"
              :key="item.uuid"
          >
            <td>{{ item.uuid }}</td>
            <td>{{item.name}}</td>
            <td><a target="_blank" :href="`https://testnet.tonscan.org/nft/${item.nft}`">{{item.nft ? item.nft: '-' }}</a></td>
            <td><div class="text-h3" v-html="item.countryISO"></div></td>
            <td>{{item.type}}</td>
            <td>
              <v-btn  @click="connectServer(item)" :disabled="!userToken" color="primary">
                connect
              </v-btn>
            </td>
          </tr>
          <tr v-if="loading">
            <td colspan="5">
              <div class="d-flex justify-center">
                <v-btn size="140" :loading="true">
                </v-btn>
              </div>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-sheet>
    </v-col>
  </v-row>
</template>

