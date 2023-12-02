import axios from 'axios'

const fetchLogin = async (email, name, password, address) => {
  try {
    const result = axios.post(
      'http://15.165.25.34:3000/api/signup',
      {
        email,
        name,
        password,
        address,
        userId: 125,
        isAdmin: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return result.data
  } catch (error) {
    console.log('Signup failed:', error)
    throw error
  }
}

export default fetchLogin
