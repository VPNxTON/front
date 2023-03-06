<template>
  <v-row justify="center">
    <v-col cols="4">
      <v-sheet class="pa-4">
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Name"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Description"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Config"></v-textarea>
            </v-col>
            <v-col>
              <v-btn width="150" color="primary">Add</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Add new server'
})
</script>
