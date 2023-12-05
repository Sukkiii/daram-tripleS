export const fetchData = async (filters) => {
  try {
    const {
      locationId,
      checkInDate,
      checkOutDate,
      adults,
      children,
      level,
      page,
      item,
      sort,
    } = filters

    const response = await fetch(
      `http://15.165.25.34:3000/api/lodgings/search?locationId=${locationId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&adults=${adults}&children=${children}&level=${level}&page=${page}&item=${item}&sort=${sort}`,
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
