import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import fetchSearchTour from '../../fetch/fetchSearchTour'
import fetchTourDetail from '../../fetch/fetchTourDetail'
import TourMap from '../../components/tour/TourMap'
import TourPhoto from '../../components/tour/TourPhoto'
import TourDetailCard from '../../components/tour/tourDetailCard'
import TourDetailHeader from '../../components/tour/TourDetailHeader'

function TourDetail() {
  const { tourId } = useParams()
  let mainAttraction = {}
  let attractions = []

  const items = 10
  const page = 1

  const mainAttractionRes = useQuery({
    queryKey: {
      type: 'mainAttraction',
      id: tourId,
    },
    queryFn: fetchTourDetail,
  })

  mainAttraction = useMemo(() => {
    if (!mainAttractionRes.isLoading) {
      return mainAttractionRes?.data
    }
    return {}
  }, [mainAttractionRes.isLoading, mainAttractionRes?.data])

  const city = useMemo(
    () => (mainAttraction?.address ? mainAttraction.address.split(' ')[0] : ''),
    [mainAttraction],
  )

  const attractionRes = useQuery({
    queryKey: {
      type: 'attractions',
      keyword: city,
      items,
      page,
    },
    queryFn: fetchSearchTour,
  })
  const attractionData = attractionRes?.data?.attraction

  attractions = useMemo(() => {
    if (!attractionRes.isLoading && attractionData) {
      return [...attractions, ...attractionData]
    }
    return [...attractions]
  }, [attractions, attractionData, attractionRes.isLoading])

  return (
    <Box className="container flex flex-col items-center gap-3">
      <Box className="w-[70rem]">
        <TourDetailHeader mainAttraction={mainAttraction} city={city} />
        <Box className="flex w-full p-3 gap-3">
          <TourDetailCard
            attractionName={mainAttraction.name}
            attractionDescription={mainAttraction.description}
            recommendTourTime={mainAttraction.recommendTourTime}
          />
          <TourPhoto images={mainAttraction.image} />
        </Box>
        <TourMap
          mainAttraction={mainAttraction}
          attractions={attractions.filter(
            (attraction) =>
              attraction.attractionId !== mainAttraction.attractionId,
          )}
        />
      </Box>
    </Box>
  )
}

export default TourDetail
