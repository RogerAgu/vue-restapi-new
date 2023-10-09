/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mhw-db.com/locations',
})

const useApi = () => {
  return { instance }
}

export default useApi
