<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useServicesStore } from '@/stores/services'
import ServiceAPI from '@/api/ServiceAPI'

const route = useRoute()
const router = useRouter()
const services = useServicesStore()

const formData = reactive({
  name: '',
  price: ''
})

const { id } = route.params

onMounted(async () => {
  try {
    const { data } = await ServiceAPI.getById(id)
    Object.assign(formData, data)
  } catch (error) {
    router.push({ name: 'admin-appointments' })
  }
})

const handleSubmit = async () => {
  await services.updateService(id, formData)
}
</script>

<template>
  <RouterLink
    :to="{ name: 'view-services' }"
    class="mt-5 bg-blue-600 hover:bg-blue-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
    >Regresar</RouterLink
  >
  <h2 class="text-3xl text-white font-black text-center">Editar Servicio</h2>
  <p class="text-xl text-white text-center my-5">Actualiza tu servicio en AppSalón</p>

  <div class="md:w-2/5 mx-auto">
    <FormKit
      id="editService"
      type="form"
      :actions="false"
      incomplete-message="No se pudo guardar, revisa las notificaciones"
      :value="formData"
      @submit="handleSubmit"
    >
      <FormKit
        type="text"
        label="Nombre"
        name="name"
        placeholder="Nombre del servicio"
        validation="required"
        v-model="formData.name"
        :validation-messages="{
          required: 'El nombre es obligatorio'
        }"
      />

      <FormKit
        type="number"
        label="Precio"
        name="price"
        placeholder="Precio del servicio"
        validation="required"
        v-model="formData.price"
        :validation-messages="{
          required: 'El precio es obligatorio'
        }"
      />

      <FormKit type="submit">Guardar cambios</FormKit>
    </FormKit>
  </div>
</template>
