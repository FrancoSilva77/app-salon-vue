<script setup>
import { RouterView, useRoute } from 'vue-router'
import AdminSidebar from './components/admin/AdminSidebar.vue'

const route = useRoute()
</script>

<template>
  <div class="md:flex h-screen">
    <div
      class="h-64 md:h-auto bg-cover bg-center md:w-1/3"
      :class="route.path.startsWith('/admin') ? 'md:w-1/6' : 'bg-app'"
    >
      <div v-if="route.path.startsWith('/admin')" class="md:h-screen bg-gray-200">
        <AdminSidebar />
      </div>
    </div>

    <div class="md:w-2/3 px-10 py-5 min-h-full overflow-y-scroll">
      <RouterView />
    </div>
  </div>
</template>
