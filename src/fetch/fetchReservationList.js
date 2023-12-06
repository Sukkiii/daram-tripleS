import axios from 'axios'

const fetchReservationList = async () => {
  function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1)
      }
    }
    return null
  }

  try {
    const accessToken = getCookie('accessToken')
    if (!accessToken) {
      return null
    }
    const accessTokenObject = JSON.parse(accessToken)
    const tokenValue = accessTokenObject.token
    const response = await axios.get('http://15.165.25.34:3000/api/orders', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenValue}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch user data')
  }
}

export default fetchReservationList
