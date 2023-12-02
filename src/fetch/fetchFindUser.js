import axios from 'axios'

const fetchLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'http://15.165.25.34:3000/api/findUser',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response
  } catch (error) {
    return {
      error: 'FindUser failed',
    }
  }
}

export default fetchLogin
