
import { axiosApi } from "../../../../interceptor"

export function getUser(id) {
  return axiosApi.get(`/api/user/${id}`)
}

export function getUsers() {
    return axiosApi.get(`/api/user`)
  }

export function createUser(data) {
  return axiosApi.post(`/api/user`,{...data,createdBy:currentUser()})
}

export function updateUser(id,data) {
  return axiosApi.patch(`/api/user/${id}`,data)
}
export function currentUser(){
    return localStorage.getItem('username');
}