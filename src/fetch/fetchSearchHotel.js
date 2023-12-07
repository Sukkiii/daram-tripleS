import axios from 'axios'

const fetchSearchHotel = async ({ queryKey }) => {
  const { keyword, items, page } = queryKey

  const apiRes = await axios.get(
    `http://15.165.25.34:3000/api/search?keyword=${keyword}&type=lodging&page=${page}&item=${items}&sort=review`,
  )

  if (!apiRes.statusText) {
    throw new Error(`${keyword} 에 관한 호텔 검색결과가 없습니다.`)
  }

  return apiRes.data
}

export default fetchSearchHotel
