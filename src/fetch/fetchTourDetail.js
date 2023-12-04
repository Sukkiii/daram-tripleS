import axios from 'axios'

const fetchTourDetail = async ({ queryKey }) => {
  const { id } = queryKey

  const apiRes = await axios.get(
    `http://15.165.25.34:3000/api/attractions/${id}`,
  )

  if (!apiRes.statusText) {
    throw new Error(`${id} 에 관한 여행지 상세정보가 없습니다.`)
  }

  return apiRes.data
}

export default fetchTourDetail
