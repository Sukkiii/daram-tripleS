export const fetchData = async (keyword, page, item, type, sort) => {
  try {
    const response = await fetch(
      `http://15.165.25.34:3000/api/search?keyword=${keyword}&page=${page}&item=${item}&type=${type}&{sort}=${sort}`,
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
