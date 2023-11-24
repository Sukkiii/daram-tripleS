/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import HotTravel from './HotTravel'
import HotHotel from './HotHotel'
import dummyData from '../../assets/dummyData/dummyData'

function HomeBody() {
  const [hotelData, setHotelData] = useState([])
  const [travelData, setTravelData] = useState([])

  useEffect(() => {
    setHotelData(dummyData.recommendHotel)
    setTravelData(dummyData.recommendTravel)
  }, [])

  return (
    <Box className="home-body-container w-full m-0 bg-white inline-block min-h-max relative pt-20 top-[-4rem] rounded-t-lg overflow-visible">
      <Box className="recommend-modules-wrapper relative m-auto flex flex-col w-4/5 ">
        <HotHotel hotelData={hotelData} />
        <HotTravel travelData={travelData} />
      </Box>
    </Box>
  )
}

export default HomeBody
