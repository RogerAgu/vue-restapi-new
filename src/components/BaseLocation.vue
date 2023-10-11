<script setup>
const camp = defineProps({
  place: {
    type: Object,
    default: () => ({
      id: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
    }),
  },
})
</script>
<template>
  <RouterLink
    v-if="$attrs.character.id"
    :to="`/locations/${$attrs.character.id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img class="w-full rounded-t-lg object-cover" :src="camp.place.imageUrl" />
    <div class="p-4">
      <h2 class="text-1xl font-semibold text-gray-800">
        {{ $attrs.character.name }}
      </h2>
    </div>
  </RouterLink>
</template>
