import axios from 'axios'

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

const fetchDeleteLikes = async (attraction) => {
  try {
    const accessToken = getCookie('accessToken')
    if (!accessToken) {
      throw new Error('토큰 정보가 없습니다')
    }
    const accessTokenObject = JSON.parse(accessToken)
    const tokenValue = accessTokenObject.token

    const response = await axios.delete(
      'http://15.165.25.34:3000/api/users/favorites',
      {
        attraction,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenValue}`,
        },
      },
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchDeleteLikes
