import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box } from '@mui/material'
import SearchCard from '../../components/search/SearchCard'
import fetchSearchTour from '../../fetch/fetchSearchTour'
import fetchSearchHotel from '../../fetch/fetchSearchHotel'
import CommonHeader from '../main/CommonHeader'
import HomeSideBar from '../main/HomeBody/HomeSideBar'
import Footer from '../main/Footer/Footer'

function SearchPage() {
  const { keyword } = useParams()
  const items = 10
  const page = 1
  let hotels = []
  let attractions = []

  const hotelRes = useQuery({
    queryKey: {
      type: 'hotels',
      keyword,
      items,
      page,
    },
    queryFn: fetchSearchHotel,
  })
  const attractionRes = useQuery({
    queryKey: {
      type: 'attractions',
      keyword,
      items,
      page,
    },
    queryFn: fetchSearchTour,
  })

  const hotelData = hotelRes?.data?.lodging
  const attractionData = attractionRes?.data?.attraction

  hotels = useMemo(() => {
    if (!hotelRes.isLoading && hotelData) {
      return [...hotels, ...hotelData]
    }
    return [...hotels]
  }, [hotels, hotelData, hotelRes.isLoading])

  attractions = useMemo(() => {
    if (!attractionRes.isLoading && attractionData) {
      return [...attractions, ...attractionData]
    }
    return [...attractions]
  }, [attractions, attractionData, attractionRes.isLoading])

  return (
    <Box>
      <CommonHeader />
      <HomeSideBar />
      <Box className='w-[1220px] mx-auto'>
        <SearchCard
          hotels={hotels}
          attractions={attractions}
          keyword={keyword}
        />
      </Box>
      <Footer container='true' />
    </Box>
  )
}

export default SearchPage
