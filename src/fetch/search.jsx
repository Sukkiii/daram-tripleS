/* eslint-disable import/prefer-default-export */

export const fetchData = async (keyword, type, page, item) => {
  try {
    const response = await fetch(
      `http://15.165.25.34:3000/api/search?keyword=${keyword}&type=${type}&page=${page}&item=${item}`,
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
