import axios from 'axios'

const fetchFindUser = async (email, password, name) => {
  try {
    const response = await axios.put(
      'http://15.165.25.34:3000/api/users',
      {
        email,
        password,
        name,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  } catch (error) {
    throw new Error('fetchUpdateUser Error')
  }
}

export default fetchFindUser
