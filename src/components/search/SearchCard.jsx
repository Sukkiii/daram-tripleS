import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import SideBar from './SideBar'
import HotelItem from './HotelItem'
import TourItem from './TourItem'
import fetchSearchHotel from '../../fetch/fetchSearchHotel'
import fetchSearchTour from '../../fetch/fetchSearchTour'

function SearchCard() {
  // 검색어 useParams로 가져오기 e.g. 서울, 종로, 일본
  const { keyword } = useParams()
  // 한 페이지에 불러 올 아이템 수
  const items = 1
  const [attractions, setAttractions] = useState([])
  const [hotels, setHotels] = useState([])

  const hotelRes = useQuery({
    queryKey: ['hotels', keyword, items],
    queryFn: fetchSearchHotel,
  })
  const attractionRes = useQuery({
    queryKey: ['attractions', keyword, items],
    queryFn: fetchSearchTour,
  })

  // 위의 데이터에서 필요한 값 가져옴
  const hotelData = hotelRes?.data?.lodging
  const attractionData = attractionRes?.data?.attraction

  useEffect(() => {
    if (!hotelRes.isLoading && hotelData) {
      setHotels(() => [...hotelData])
    }
  }, [hotelData, hotelRes.isLoading])

  useEffect(() => {
    if (!attractionRes.isLoading && attractionData) {
      setAttractions(() => [...attractionData])
    }
  }, [attractionData, attractionRes.isLoading])

  return (
    <Box className="flex justify-center w-full" style={{ width: '100%' }}>
      <Box className="max-w-[calc(100vw - 64px)] flex w-[1350px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row">
        <SideBar keyword={keyword} />
        <Box className="flex flex-auto flex-col px-4">
          <Box className="flex-auto px-4">
            <Typography
              className="text-gray-900 my-5"
              style={{
                display: 'inline',
                fontWeight: 600,
                fontSize: '1.5rem',
              }}
              variant="body1"
              component="span"
            >
              호텔
            </Typography>

            <Box className="grid w-full max-w-6xl  sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              {hotels.length ? (
                hotels.map((hotel) => (
                  <HotelItem key={hotel.id} hotel={hotel} />
                ))
              ) : (
                <Typography
                  className="text-gray-900"
                  style={{
                    display: 'inline',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                  }}
                  variant="body1"
                  component="span"
                >
                  호텔 정보가 없습니다
                </Typography>
              )}
            </Box>
            <Box className="flex items-end justify-end">
              <Link to={`/searchHotelList/${keyword}`}>
                <Typography variant="body1" className="text-lg text-gray-500">
                  더보기
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className="tour-container flex-auto px-4">
            <Typography
              className="text-gray-900 my-5"
              style={{
                display: 'inline',
                fontWeight: 600,
                fontSize: '1.5rem',
              }}
              variant="body1"
              component="span"
            >
              여행지
            </Typography>

            <Box className="grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {attractions.length ? (
                attractions.map((attraction) => (
                  <TourItem key={attraction.id} attraction={attraction} />
                ))
              ) : (
                <Typography
                  className="text-gray-900"
                  style={{
                    display: 'inline',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                  }}
                  variant="body1"
                  component="span"
                >
                  여행지 정보가 없습니다
                </Typography>
              )}
            </Box>
            <Box className="flex items-end justify-end">
              <Link to={`/searchTourList/${keyword}`}>
                <Typography variant="body1" className="text-lg text-gray-500">
                  더보기
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchCard
