import { ref, onMounted, inject } from 'vue'
import { defineStore } from 'pinia'
import ServiceAPI from '@/api/ServiceAPI'
import router from '@/router'

export const useServicesStore = defineStore('services', () => {
  const toast = inject('toast')
  const services = ref([])
  const currentPage = ref(1)
  const totalPages = ref(1)
  const totalServices = ref(0)
  const limit = ref(6)

  async function getServices() {
    const { data } = await ServiceAPI.all()
    services.value = data.services
  }

  async function getServicesPaginated() {
    const { data } = await ServiceAPI.allPaginate(currentPage.value, limit.value)

    services.value = data.services
    currentPage.value = data.currentPage
    totalPages.value = data.totalPages
    totalServices.value = data.totalServices
  }

  async function prevServices() {
    if (currentPage.value > 1) {
      currentPage.value = currentPage.value - 1
      await getServicesPaginated()
    }
  }

  async function nextServices() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
      await getServicesPaginated()
    }
  }

  async function saveService(formData) {
    try {
      const { data } = await ServiceAPI.create(formData)
      toast.open({
        message: data.msg,
        type: 'success'
      })
      await getServices()
      router.push({ name: 'view-services' })
    } catch (error) {
      toast.open({
        message: error.response.data.msg,
        type: 'success'
      })
    }
  }

  async function updateService(id, formData) {
    try {
      const { data } = await ServiceAPI.update(id, formData)
      toast.open({
        message: data.msg,
        type: 'success'
      })
      await getServices()
      router.push({ name: 'view-services' })
    } catch (error) {
      toast.open({
        message: error.response.data.msg,
        type: 'error'
      })
    }
  }

  async function deleteService(id) {
    console.log(id)

    try {
      const { data } = await ServiceAPI.delete(id)
      console.log(data, id)
      toast.open({
        message: data.msg,
        type: 'success'
      })
      services.value = services.value.filter((service) => service._id !== id)
    } catch (error) {
      toast.open({
        message: 'El Servicio no se ha podido eliminar, intente mas tarde',
        type: 'error'
      })
    }
  }

  return {
    services,
    currentPage,
    totalPages,
    getServicesPaginated,
    getServices,
    prevServices,
    nextServices,
    saveService,
    updateService,
    deleteService
  }
})
