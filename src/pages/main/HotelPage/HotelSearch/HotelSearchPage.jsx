import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HotelSearchHeader from './HotelSearchHeader'
import HomeSideBar from '../../HomeBody/HomeSideBar'
import HotelSearchBody from './HotelSearchBody'
import Footer from '../../Footer/Footer'
import { fetchData } from '../../../../fetch/lodgingSearch'

function HotelSearchPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const [searchResults, setSearchResults] = useState([])

  const handleFiltering = useCallback(
    async (filters) => {
      try {
        const response = await fetchData(filters)
        setSearchResults(response)
        const newUrl = `/hotel/search?${new URLSearchParams(
          filters,
        ).toString()}`
        navigate(newUrl)
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error)
      }
    },
    [navigate],
  )

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const filters = {
      locationId: searchParams.get('locationId'),
      checkInDate: searchParams.get('checkInDate'),
      checkOutDate: searchParams.get('checkOutDate'),
      adults: searchParams.get('adults'),
      children: searchParams.get('children'),
      level: searchParams.get('level'),
      page: searchParams.get('page'),
      item: searchParams.get('item'),
      sort: searchParams.get('sort'),
    }

    handleFiltering(filters)
  }, [handleFiltering, location.search])

  return (
    <>
      <HotelSearchHeader />
      <HomeSideBar />
      <HotelSearchBody searchResults={searchResults} />
      <Footer />
    </>
  )
}

export default HotelSearchPage
