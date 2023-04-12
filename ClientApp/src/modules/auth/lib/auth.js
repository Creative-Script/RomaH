
import { axiosApi } from "../../../interceptor";

export function getUser(id) {
  return axiosApi.get(`/api/auth/${id}`)
}

export function loginUser(data) {

  return axiosApi.post(`/api/auth/`,{}, {
  auth: data
})
}