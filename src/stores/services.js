import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import ServiceAPI from '@/api/ServiceAPI'

export const useServicesStore = defineStore('services', () => {

  const services = ref([])
  
  onMounted(async () => {
    
    try {
      const { data } = await ServiceAPI.all()
      services.value = data
      
    } catch (error) {
      console.log(error)
    }
    
  })

  return {
    services
  }
})
