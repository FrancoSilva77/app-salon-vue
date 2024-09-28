import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import ServiceAPI from '@/api/ServiceAPI'

export const useServicesStore = defineStore('services', () => {

  onMounted(async () => {
    
    try {
      const { data } = await ServiceAPI.all()
      console.log(data);
      console.log(data);
      
    } catch (error) {
      console.log(error)
    }
    
  })

  return {}
})
