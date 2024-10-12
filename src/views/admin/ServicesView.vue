<script setup>
import AdminService from '@/components/admin/AdminService.vue'
import { useServicesStore } from '@/stores/services'

const services = useServicesStore()
</script>

<template>
  <RouterLink
    :to="{ name: 'new-service' }"
    class="mt-5 bg-blue-600 hover:bg-blue-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
    >Crear Servicio</RouterLink
  >

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
    <AdminService v-for="service in services.services" :key="service.id" :service="service" />
  </div>
</template>
