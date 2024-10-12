<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const adminNavegation = [
  { name: 'admin-appointments', text: 'Admin' },
  { name: 'admin-services', text: 'Servicios' }
]
</script>

<template>
  <div class="p-5">
    <h1 class="text-3xl lg:text-5xl font-bold">App Salón</h1>
  </div>

  <div class="space-y-3">
    <p class="mt-10 uppercase font-bold text-sm text-blue-950 text-center">Navegación</p>

    <nav class="flex flex-col">
      <RouterLink
        v-for="link in adminNavegation"
        :to="{ name: link.name }"
        class="font-bold text-lg border-t border-blue-200 p-3 last-of-type:border-b"
        :class="route.name === link.name ? 'bg-blue-800 text-white' : ''"
      >
        {{ link.text }}
      </RouterLink>
    </nav>
  </div>
</template>
