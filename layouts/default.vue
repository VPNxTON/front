<template>
  <v-layout>
    <navigation-header></navigation-header>
    <v-main>
      <v-container>
        <h2 class="text-h4 mt-15 mb-10 font-weight-bold text-center" v-if="route?.meta?.title">{{route?.meta?.title}}</h2>
        <slot></slot>
      </v-container>
    </v-main>
    <navigation-footer></navigation-footer>
  </v-layout>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

