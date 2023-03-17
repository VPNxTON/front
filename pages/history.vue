<template>
  <user-history-table></user-history-table>
</template>

<script lang="ts" setup>

import UserHistoryTable from "~/components/widgets/UserHistoryTable.vue";
import {useUserStore} from "~/stores/user";
const router = useRouter()
const mainStore = useUserStore()
const {userToken}=toRefs(mainStore)

if (!userToken.value){
  router.push('/')
}

watch(userToken,()=>{
  if(!userToken.value){
    router.push('/')
  }
})

definePageMeta({
  title: 'Your history'
})
</script>
