<script lang="ts" setup>
import {getUserHistory} from "~/api/user/getUserHistory";
import {useUserStore} from "~/stores/user";

const serverList = ref([])
const historyList = ref([])
const mainStore = useUserStore()
const {userHistoryList} = toRefs(mainStore)
const loading = ref(userHistoryList.value.length==0)
getUserHistory(mainStore.userToken).then((response)=>{
  loading.value=false
  const {data} = response
  historyList.value=data.value
  mainStore.setUserHistoryList(data.value)
})
const table ={
  headers:[
    {
      title: 'address',
      key: 'address'
    },
    {
      title: 'Started at',
      key: 'name'
    },
    {
      title: 'State',
      key: 'description'
    },
    {
      title: 'Uuid',
      key: 'countryISO'
    }
  ]
}
</script>

<template>
  <v-row>
    <v-col cols="12">

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
              v-if="!loading"
              v-for="(item,key) in userHistoryList"
              :key="key"
          >
            <td>{{ item.address }}</td>
            <td>{{new Date(item.started_at).toLocaleString('us')}}</td>
            <td>{{item.state }}</td>
            <td>{{item.uuid}}</td>
          </tr>
          <tr v-if="loading">
            <td colspan="4">
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

