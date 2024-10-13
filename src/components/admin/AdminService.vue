<script setup>
import { useServicesStore } from '@/stores/services'
import { formatCurrency } from '@/utils'

const services = useServicesStore()

defineProps({
  service: {
    type: Object
  }
})
</script>

<template>
  <div class="p-5 space-y-5 rounded-lg bg-blue-500 text-white">
    <p class="text-2xl font-normal">{{ service.name }}</p>
    <p class="text-xl">{{ formatCurrency(service.price) }}</p>

    <div class="flex gap-5">
      <RouterLink
        :to="{ name: 'edit-service', params: { id: service._id } }"
        class="bg-orange-500 px-2 py-1 rounded hover:bg-orange-600"
        >Editar</RouterLink
      >
      <button
        @click="services.deleteService(service._id)"
        class="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>
