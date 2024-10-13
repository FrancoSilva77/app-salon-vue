<script setup>
import { useServicesStore } from '@/stores/services'

const services = useServicesStore()

const handleSubmit = async (formData) => {
  await services.saveService(formData)
}
</script>

<template>
  <RouterLink
    :to="{ name: 'view-services' }"
    class="mt-5 bg-blue-600 hover:bg-blue-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
    >Regresar</RouterLink
  >
  <h2 class="text-3xl text-white font-black text-center">Agregar Servicio</h2>
  <p class="text-xl text-white text-center my-5">Agrega un nuevo servicio en AppSalón</p>

  <div class="md:w-2/5 mx-auto">
    <FormKit
      id="addService"
      type="form"
      :actions="false"
      incomplete-message="No se pudo guardar, revisa las notificaciones"
      @submit="handleSubmit"
    >
      <FormKit
        type="text"
        label="Nombre"
        name="name"
        placeholder="Nombre del servicio"
        validation="required"
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
        :validation-messages="{
          required: 'El precio es obligatorio'
        }"
      />

      <FormKit type="submit">Guardar servicio</FormKit>
    </FormKit>
  </div>
</template>
