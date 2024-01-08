/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material'
// import { useState } from 'react'

function Review({ lodgingData }) {
  const hotelInfo = lodgingData.lodging
  console.log(hotelInfo)
  console.log(hotelInfo.review)

  // const [showModal, setShowModal] = useState(false)

  return (
    <Box className='container flex flex-col gap-8 mx-auto mt-4 border-t-2 border-gray-300'>
      <Box className='reviewPoint'>{hotelInfo.avgRating}</Box>
      <Box className='reviews'>{/* <Box>{hotelInfo.review[0]}</Box> */}</Box>
      <Button>???</Button>
    </Box>
  )
}

export default Review
