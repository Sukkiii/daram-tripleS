/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { FiChevronRight } from 'react-icons/fi'
import { Box, Typography } from '@mui/material'
import fetchSearchHotel from '../../fetch/fetchSearchHotel'
import useIntersect from '../../components/search/useIntersect'
import HotelItem from '../../components/search/HotelItem'
import SideBar from '../../components/search/SideBar'
import CommonHeader from '../main/CommonHeader'
import Footer from '../main/Footer/Footer'

function SearchHotelList() {
  const [page, setPage] = useState(1)
  const items = 2
  const [hotels, setHotels] = useState([])
  const { keyword } = useParams()

  useEffect(
    () => () => {
      setHotels([])
    },
    [],
  )

  const hotelRes = useQuery({
    queryKey: {
      type: 'hotels',
      keyword,
      items,
      page,
    },
    queryFn: fetchSearchHotel,
  })

  const hotelData = hotelRes?.data?.lodging

  useEffect(() => {
    if (!hotelRes.isLoading && hotelData && hotelData.length > 0) {
      setHotels((prevHotels) => [...prevHotels, ...hotelData])
    }
  }, [hotelData, hotelRes.isLoading])

  const [intersectRef] = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      if (!hotelRes.isLoading && hotelData?.length === items)
        setPage((prevPage) => prevPage + 1)
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <Box>
      <CommonHeader />
      <Box className='flex flex-col items-start gap-3 mt-5 w-[1220px] h-[1000px] mx-auto'>
        <Typography
          className='text-gray-900'
          style={{
            display: 'inline',
            marginLeft: '1rem',
          }}
          variant='body2'
          component='span'
        >
          홈
          <FiChevronRight className='inline w-10' />
          검색
        </Typography>
        <Box className='ml-2 text-gray-900'>
          <Typography
            style={{
              display: 'inline',
              fontWeight: 600,
              fontSize: '1.7rem',
            }}
            variant='body1'
            component='span'
          >
            검색결과
          </Typography>
          <Typography
            className='text-orange-600'
            style={{
              display: 'inline',
              fontWeight: 600,
              fontSize: '1.7rem',
              marginLeft: '1rem',
            }}
            variant='body1'
            component='span'
          >
            {keyword}
          </Typography>
          <Typography
            style={{
              display: 'inline',
              fontWeight: 600,
              fontSize: '1.7rem',
              marginLeft: '1rem',
            }}
            variant='body1'
            component='span'
          >
            : {hotels.length}개
          </Typography>
        </Box>
        <Box className='max-w-[calc(100vw - 64px)] mb-4 flex w-[1220px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row'>
          <SideBar keyword={keyword} />
          <Box className='flex-auto px-1 tour-container'>
            <Typography
              className='my-5 text-gray-900'
              style={{
                display: 'inline',
                fontWeight: 600,
                fontSize: '1.5rem',
              }}
              variant='body1'
              component='span'
            >
              호텔
            </Typography>
            <Box className='grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3'>
              {hotels.length ? (
                hotels.map((hotel) => (
                  <HotelItem key={hotel.lodgingId} hotel={hotel} />
                ))
              ) : (
                <Typography
                  className='text-gray-900'
                  style={{
                    display: 'inline',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                  }}
                  variant='body1'
                  component='span'
                >
                  호텔 정보가 없습니다
                </Typography>
              )}
            </Box>
            {hotelRes.isLoading && <Box>Loading...</Box>}
            <Box
              ref={intersectRef}
              style={{ height: '20px', background: 'transparent' }}
            />
          </Box>
        </Box>
      </Box>
      <Footer container='true' />
    </Box>
  )
}

export default SearchHotelList
