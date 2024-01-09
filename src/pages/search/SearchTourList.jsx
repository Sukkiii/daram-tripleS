import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { FiChevronRight } from 'react-icons/fi'
import { Box, Typography } from '@mui/material'
import fetchSearchTour from '../../fetch/fetchSearchTour'
import useIntersect from '../../components/search/useIntersect'
import TourItem from '../../components/search/TourItem'
import SideBar from '../../components/search/SideBar'
import CommonHeader from '../main/CommonHeader'
import HomeSideBar from '../main/HomeBody/HomeSideBar'
import Footer from '../main/Footer/Footer'

function SearchTourList() {
  const [page, setPage] = useState(1)
  const items = 2
  const [attractions, setAttractions] = useState([])
  const { keyword } = useParams()

  useEffect(
    () => () => {
      setAttractions([])
    },
    [],
  )
  const attractionRes = useQuery({
    queryKey: {
      type: 'attractions',
      keyword,
      items,
      page,
    },
    queryFn: fetchSearchTour,
  })

  const attractionData = attractionRes?.data?.attraction

  useEffect(() => {
    if (!attractionRes.isLoading && attractionData) {
      setAttractions((prevAttractions) => [
        ...prevAttractions,
        ...attractionData,
      ])
    }
  }, [attractionData, attractionRes.isLoading])

  const [intersectRef] = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      if (!attractionRes.isLoading && attractionData?.length === items)
        setPage((prevPage) => prevPage + 1)
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <Box>
      <CommonHeader />
      <HomeSideBar />
      <Box className='flex flex-col items-start gap-3 mt-5 w-[1220px] h-[1000px] mx-auto'>
        <Typography
          className='text-gray-900 cursor-pointer'
          style={{
            display: 'inline',
            marginLeft: '1rem',
          }}
          variant='body2'
          component='span'
        >
          홈
          <FiChevronRight className='inline w-10' />
          트립 가이드
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
            : {attractions.length}개
          </Typography>
        </Box>
        <Box className='max-w-[calc(100vw - 64px)] flex w-[1220px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row'>
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
              여행지
            </Typography>
            <Box className='grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-3 md:grid-cols-2 lg:grid-cols-3'>
              {attractions.length ? (
                attractions.map((attraction) => (
                  <TourItem
                    key={attraction.attractionId}
                    attraction={attraction}
                  />
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
                  여행지 정보가 없습니다
                </Typography>
              )}
            </Box>
            {attractionRes.isLoading && <Box>Loading...</Box>}
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

export default SearchTourList
