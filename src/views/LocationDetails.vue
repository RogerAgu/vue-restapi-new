<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import usePlaces from '@/composables/useLocations'

const route = useRoute()
const { fetchPlace, currentPlace } = usePlaces()

onMounted(async () => {
  await fetchPlace(route.params.id)
  console.log(route.params.id)
  console.log(currentPlace)
})

onUnmounted(() => {
  currentPlace.value = null
})
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-r from-green-900 to-blue-700 py-8 text-white"
  >
    <div
      v-if="currentPlace"
      class="flex flex-col items-center justify-center gap-6"
    >
      
      <h1 class="text-white-800 text-6xl font-bold">
        Hi, I'm the {{ currentPlace.name }}
      </h1>
      <pre>{{ currentPlace }}</pre>
    </div>
  </main>
</template>
