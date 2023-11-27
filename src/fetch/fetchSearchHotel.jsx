import axios from 'axios'

const fetchSearchHotel = async ({ queryKey }) => {
  const keyword = queryKey[1]
  const items = queryKey[2]
  // 한 페이지에 보여줄 아이템 수
  const page = queryKey[3] ?? 1

  const apiRes = await axios.get(
    `http://15.165.25.34:3000/api/search?keyword=%EC%84%9C%EC%9A%B8&type=lodging&page=1&item=${items}&sort=review`,
  )

  if (!apiRes.statusText) {
    throw new Error(`${keyword} 에 관한 호텔 검색결과가 없습니다.`)
  }

  return apiRes.data
}

export default fetchSearchHotel
