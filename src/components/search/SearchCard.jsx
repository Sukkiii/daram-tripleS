import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { FiChevronRight } from 'react-icons/fi'
import SideBar from './SideBar'
import HotelItem from './HotelItem'
import TourItem from './TourItem'

function SearchCard({ hotels, attractions, keyword }) {
  return (
    <Box className="flex flex-col items-center gap-3 mt-5">
      <Typography
        className="text-gray-900 w-[84rem]"
        style={{
          display: 'inline',
          marginLeft: '1rem',
        }}
        variant="body2"
        component="span"
      >
        홈
        <FiChevronRight className="w-10 inline" />
        검색
      </Typography>
      <Box className="text-gray-900  w-[84rem] ml-2">
        <Typography
          style={{
            display: 'inline',
            fontWeight: 600,
            fontSize: '1.7rem',
          }}
          variant="body1"
          component="span"
        >
          검색결과
        </Typography>
        <Typography
          className="text-orange-500"
          style={{
            display: 'inline',
            fontWeight: 600,
            fontSize: '1.7rem',
            marginLeft: '1rem',
          }}
          variant="body1"
          component="span"
        >
          "{keyword}"
        </Typography>
        <Typography
          style={{
            display: 'inline',
            fontWeight: 600,
            fontSize: '1.7rem',
            marginLeft: '1rem',
          }}
          variant="body1"
          component="span"
        >
          : {hotels.length + attractions.length}개
        </Typography>
      </Box>
      <Box className="flex justify-center w-full" style={{ width: '100%' }}>
        <Box className="max-w-[calc(100vw - 64px)] flex  w-[84rem] overflow-x-auto sm:flex-col md:flex-col lg:flex-row">
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
                    <HotelItem key={hotel.lodgingId} hotel={hotel} />
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

              <Box className="grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                {attractions.length ? (
                  attractions.map((attraction) => (
                    <TourItem
                      key={attraction.attractionId}
                      attraction={attraction}
                    />
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
    </Box>
  )
}

export default SearchCard
