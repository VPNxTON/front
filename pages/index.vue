<script lang="ts" setup>
import ServersTable from "~/components/widgets/ServersTable.vue";

definePageMeta({
  title: 'Active VPN servers'
})
</script>

<template>
  <v-row>
    <v-col cols="12">
      <servers-table></servers-table>
    </v-col>
  </v-row>
</template>

