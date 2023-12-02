import axios from 'axios'

const fetchMypage = async () => {
  const access = localStorage.getItem('access')
  const result = await axios.get('http://15.165.25.34:3000/api/users', {
    headers: {
      Authorization: access,
    },
  })
  return result.data
}

export default fetchMypage
