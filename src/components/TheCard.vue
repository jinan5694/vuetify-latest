<script setup lang="ts">
// script here

const props = defineProps<{ name: string}>()
const emit = defineEmits<{
  pick: [name: string]
}>()
function handleClick() {
  emit('pick', props.name)
}
</script>

<template>
  <div class="the-card" @click="handleClick">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
