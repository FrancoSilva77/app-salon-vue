<script setup>
import { onMounted } from 'vue'
import AdminService from '@/components/admin/AdminService.vue'
import { useServicesStore } from '@/stores/services'

const services = useServicesStore()

onMounted(async () => {
  await services.getServicesPaginated()
})
</script>

<template>
  <RouterLink
    :to="{ name: 'new-service' }"
    class="mt-5 bg-blue-600 hover:bg-blue-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
    >Crear Servicio</RouterLink
  >

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
    <AdminService v-for="service in services.services" :key="service._id" :service="service" />
  </div>

  <div class="flex justify-end items-center gap-3">
    <button
      @click="services.prevServices"
      :disabled="services.currentPage <= 1"
      class="text-lg text-white bg-blue-500 px-2 py-1 rounded-lg"
      :class="services.currentPage <= 1 ? 'opacity-50' : ''"
    >
      Anterior
    </button>
    <span class="text-base text-white"
      >Página {{ services.currentPage }} de {{ services.totalPages }}</span
    >
    <button
      @click="services.nextServices"
      :disabled="services.currentPage >= services.totalPages"
      class="text-lg text-white bg-blue-500 px-2 py-1 rounded-lg"
      :class="services.currentPage >= services.totalPages ? 'opacity-50' : ''"
    >
      Siguiente
    </button>
  </div>
</template>
