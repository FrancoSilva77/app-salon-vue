import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import AuthAPI from '@/api/AuthAPI'
import AppointmentApi from '@/api/AppointmentAPI'

export const useUserStore = defineStore('users', () => {
  const router = useRouter()
  const user = ref({})
  const userAppointments = ref([])
  const loading = ref(true)

  onMounted(async () => {
    try {
      const { data } = await AuthAPI.auth()
      user.value = data
      await getUserAppointments()
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  })

  async function getUserAppointments() {
    if (user.value && user.value._id) {
      const { data } = await AppointmentApi.getUserAppointments(user.value._id)
      userAppointments.value = data
    }
  }

  function logout() {
    localStorage.removeItem('AUTH_TOKEN')
    user.value = {}
    userAppointments.value = []
    router.push({ name: 'login' })
  }

  const getUserName = computed(() => (user.value?.name ? user.value?.name : ''))

  const noAppointments = computed(() => userAppointments.value.length === 0)

  return {
    user,
    userAppointments,
    loading,
    getUserAppointments,
    logout,
    getUserName,
    noAppointments
  }
})
