<template>
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
          v-for="(item,key) in new Array(20)"
          :key="key"
      >
        <td>{{ key }}</td>
        <td>{{ key+1 }}.02.2023</td>
        <td>{{ key }}0m</td>
        <td>{{key}}30 TVPN</td>
      </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script lang="ts" setup>

const table ={
  headers:[
    {
      title: '#',
    },
    {
      title: 'Session',
    },
    {
      title: 'Time',
    },
    {
      title: 'Jettons earns',
    },
  ]
}

definePageMeta({
  title: 'Your history'
})
</script>
