import axios from 'axios'

function getCookie(name) {
  const cookieString = document.cookie
  const cookies = cookieString.split('; ')
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=')
    if (cookieName === name) {
      return decodeURIComponent(cookieValue)
    }
  }
  return null
}

function getAccessToken() {
  const accessTokenCookie = getCookie('accessToken')
  if (accessTokenCookie) {
    try {
      const accessTokenObject = JSON.parse(accessTokenCookie)
      if (accessTokenObject.token) {
        return accessTokenObject.token
      }
    } catch (error) {
      console.error('토큰 파싱 오류:', error)
    }
  }
  return null
}

const accessTokenValue = getAccessToken()

export const getLodgingData = (lodgingId) => {
  return axios
    .get(`http://15.165.25.34:3000/api/lodgings/${lodgingId}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('호텔 상세 데이터를 불러오는 중 오류 발생:', error)
      throw new Error('호텔 상세 데이터를 불러오는 과정에서 에러 발생')
    })
}

export const makeReservation = async (reservationData) => {
  try {
    const response = await axios.post(
      'http://15.165.25.34:3000/api/orders',
      reservationData,
      {
        headers: {
          Authorization: `Bearer ${accessTokenValue}`,
        },
      },
    )
    return response.data
  } catch (error) {
    console.error('예약을 만드는 중 오류 발생:', error)
    throw new Error('예약을 만드는 과정에서 에러 발생')
  }
}

export const getUser = async () => {
  try {
    const response = await axios.get('http://15.165.25.34:3000/api/users', {
      headers: {
        Authorization: `Bearer ${accessTokenValue}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('사용자 데이터를 불러오는 중 오류 발생:', error)
    throw new Error('사용자 데이터를 불러오는 과정에서 에러 발생')
  }
}
