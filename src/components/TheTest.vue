<script setup lang="ts" generic="T extends { id: string }">
// script here
defineProps<{
  items: T[]
}>()
</script>

<template>
  <div v-for="item in items" :key="item.id">
    {{ item.id }}
  </div>
</template>

<style scoped></style>
