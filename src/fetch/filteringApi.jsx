import axios from 'axios'

async function FilteringApi() {
  // const [data, setData] = useState([])

  try {
    const response = await axios.get(
      'http://15.165.25.34:3000/api/lodgings/search',
      {
        params: {
          city: '서울',
          checkInDate: '2023-11-22',
          checkOutDate: '2023-11-23',
          adults: 1,
          children: 0,
          level: 5,
          page: 1,
          item: 20,
        },
      },
    )

    // 응답이 200인 경우
    if (response.status !== 200) {
      console.log('api호출 실패')
    }
    console.log(response.data)
    return response.data
  } catch (error) {
    // API 호출 중 에러 발생
    console.log('에러발생')
  }
}

export default FilteringApi
