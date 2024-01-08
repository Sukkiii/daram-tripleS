/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Box, Button, Typography } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
// import { useState } from 'react'

function Review({ lodgingData }) {
  const hotelInfo = lodgingData.lodging
  const hotelReview = hotelInfo.review
  console.log(hotelInfo)
  console.log(hotelInfo.review)

  const personImg = (name) => {
    const lastName = name.slice(-1)
    // 맨 뒷자리 숫자
    switch (lastName) {
      case '0':
        return '/people1.png'
      case '2':
        return '/people2.png'
      case '1':
        return '/people3.png'
      default:
        return '/people4.png'
    }
  }

  const personName = (name) => {
    const lastName = name.slice(-1)
    // 맨 뒷자리 숫자
    switch (lastName) {
      case '0':
        return 'Robert, Kim'
      case '2':
        return 'Julie, Kang'
      case '1':
        return 'Kate'
      default:
        return 'UnKnown'
    }
  }

  const personLive = (name) => {
    const lastName = name.slice(-1)
    // 맨 뒷자리 숫자
    switch (lastName) {
      case '0':
        return 'Tokyo, Japan'
      case '2':
        return 'Busan, Korea'
      case '1':
        return 'London, England'
      default:
        return 'Seoul, Korea'
    }
  }

  const personDate = (name) => {
    const lastName = name.slice(-1)
    // 맨 뒷자리 숫자
    switch (lastName) {
      case '0':
        return '2023.12.24.'
      case '2':
        return '2023.11.29.'
      case '1':
        return '2023.12.13'
      default:
        return '2024.01.07.'
    }
  }

  return (
    <Box className='container flex flex-col mx-auto mt-4 border-t-2 border-gray-300'>
      <Box className='flex items-center justify-center gap-2 mt-8 reviewPoint'>
        <img className='w-20' src='/src/assets/img/roseLeft.png' alt='' />
        <Typography fontSize='5rem' fontWeight='700'>
          {hotelInfo.avgRating}
        </Typography>
        <img className='w-20' src='/src/assets/img/roseRight.png' alt='' />
      </Box>
      <Box className='flex flex-col items-center justify-center pb-12 border-b-2 border-gray-300'>
        <Typography fontWeight='600'>게스트 선호</Typography>
        <Typography color='gray'>평점, 후기, 신뢰도 기준</Typography>
        <Typography color='gray'>TripleS에서 가장 사랑받는 숙소</Typography>
      </Box>
      <Box className='grid grid-cols-2 gap-12 p-8 reviews'>
        {hotelReview.map((review) => (
          <Box key={review._id} className='flex flex-col w-full gap-2'>
            <Box className='flex gap-3'>
              <img
                className='w-20 border-2 border-blue-700 rounded-full'
                src={`/src/assets/img${personImg(review._id)}`}
                alt={`User ${review.user}`}
              />
              <Box className='flex flex-col justify-center'>
                <Typography fontWeight='600'>
                  {personName(review._id)}
                </Typography>
                <Typography color='darkgray'>
                  {personLive(review._id)}
                </Typography>
                <Box>
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <StarRateRoundedIcon
                      key={i}
                      className='text-blue-700 ml-[-5px]'
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <Typography fontSize='0.8rem' color='darkgray'>
              {personDate(review._id)}
            </Typography>
            <Typography fontWeight='500'>{review.content}</Typography>
          </Box>
        ))}
      </Box>
      <Box className='flex items-center justify-center w-24 mx-auto align-middle'>
        <Button variant='outlined'>더보기</Button>
      </Box>
    </Box>
  )
}

export default Review
