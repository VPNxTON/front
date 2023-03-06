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
       <td>VPN server {{ key }}</td>
       <td>{{ key }}0</td>
       <td>{{Math.random().toFixed(3)}}</td>
       <td width="100">
         <v-btn color="primary">
           connect
         </v-btn>
       </td>
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
      title: 'VPN server',
    },
    {
      title: 'Active connections',
    },
    {
      title: 'Price',
    },
    {
      title: '',
    },
  ]
}

definePageMeta({
  title: 'Active VPN servers'
})
</script>
