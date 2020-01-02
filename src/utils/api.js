import axios from 'axios'
import { BASE_URI } from 'react-native-dotenv'

export const api = async (uri, id) => {
  try {
    const { data } = await axios.get(`${BASE_URI}/${uri}?${id}`)

    return data
  } catch (e) { return e }
}
