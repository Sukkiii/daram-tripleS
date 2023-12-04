import axios from 'axios'

const fetchGetUserInfo = async () => {
  try {
    const response = await axios.get('http://15.165.25.34:3000/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw new Error('fetchGetUserInfo Error')
  }
}

export default fetchGetUserInfo
