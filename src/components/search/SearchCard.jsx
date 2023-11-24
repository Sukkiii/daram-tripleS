import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Typography } from '@mui/material'
import SideBar from './SideBar'
import HotelItem from './HotelItem'
import TourItem from './TourItem'
// import fetchHotel from '../../fetch/search/fetchHotel'
// import fetchTour from '../../fetch/search/fetchTour'

const hotels = [
  {
    id: '1',
    name: '그랜드워커힐',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '2',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '3',
    name: '그랜드워커힐',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '4',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '5',
    name: '그랜드워커힐',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '6',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '7',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
]

const tours = [
  {
    id: '1',
    name: '롯데월드',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '2',
    name: '에버랜드',
    city: '용인',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '3',
    name: '에버랜드',
    city: '용인',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '4',
    name: '에버랜드',
    city: '용인',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '5',
    name: '롯데월드',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
]

function SearchCard() {
  // 검색어 useParams로 가져오기 e.g. 서울, 종로, 일본
  const { keyword } = useParams()

  // useQuery로 데이터 fetch comments는 테스트용
  // 종합 결과 페이지에서는 페이지 데이터 x로 1페이지만 불러옴
  // const hotelList = useQuery(['hotels', keyword], fetchHotel)
  // const tourList = useQuery(['tours', keyword], fetchTour)

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
              <Link to={`/hotelSearchList/${keyword}`}>
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
              {tours.length ? (
                tours.map((tour) => <TourItem key={tour.id} tour={tour} />)
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
              <Link to={`/tourSearchList/${keyword}`}>
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
