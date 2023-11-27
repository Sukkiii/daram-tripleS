import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Typography } from '@mui/material'
import fetchSearchTour from '../../fetch/fetchSearchTour'
import useIntersect from '../../components/search/useIntersect'
import TourItem from '../../components/search/TourItem'
import SideBar from '../../components/search/SideBar'

function SearchTourList() {
  const [page, setPage] = useState(1)
  const items = 10
  const [attractions, setAttractions] = useState([])
  const { keyword } = useParams()

  useEffect(
    () => () => {
      setAttractions([])
    },
    [],
  )
  const attractionRes = useQuery({
    queryKey: ['attractions', keyword, items, page],
    queryFn: fetchSearchTour,
  })

  const attractionData = attractionRes?.data?.attractions

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
      if (!attractionRes.isLoading && attractionData.length === items)
        setPage((prevPage) => prevPage + 1)
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <Box className="flex justify-center w-full" style={{ width: '100%' }}>
      <Box className="max-w-[calc(100vw - 64px)] flex w-[1350px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row">
        <SideBar keyword={keyword} />
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
          {attractionRes.isLoading && <Box>Loading...</Box>}
          <Box
            ref={intersectRef}
            style={{ height: '20px', background: 'transparent' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchTourList
