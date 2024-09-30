import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use((config): InternalAxiosRequestConfig => {
  const token = sessionStorage.getItem('access_token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

instance.interceptors.response.use(
  (response): AxiosResponse => {
    // Puc actuar sobre la resposta

    return response
  },
  (error): Promise<AxiosError> => {
    if (error.status === 404) {
      // alert('Recurs no trobat')
    }

    if (error.status === 401) {
      // token caducat! torna a generar token
    }

    return Promise.reject(error)
  }
)

export default instance
