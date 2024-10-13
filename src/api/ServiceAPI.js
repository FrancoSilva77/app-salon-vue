import api from '@/lib/axios'

export default {
  all() {
    return api.get('/services')
  },
  create(data) {
    return api.post('/services', data)
  },
  getById(id) {
    return api.get(`/services/${id}`)
  },
  update(id, data) {
    return api.put(`/services/${id}`, data)
  },
  delete(id) {
    return api.delete(`/services/${id}`)
  }
}
