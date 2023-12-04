import axios from 'axios'

async function FilteringApi() {
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

    return response.data
  } catch (error) {
    return {
      error: 'filteringApi failed',
    }
  }
}

export default FilteringApi
