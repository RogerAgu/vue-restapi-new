import { ref } from 'vue'
import useApi from '@/composables/useApi'

const characters = ref([])
const currentPlace = ref(null)
const firstLoad = ref(true)

const api = useApi()

const usePlaces = () => {
  const fetchPlaces = async () => {
    const { data } = await api.instance.get('/locations')

    characters.value.push(...data)
  }

  return {
    characters,
    fetchPlaces,
    currentPlace,
    firstLoad,
  }
}

export default usePlaces
