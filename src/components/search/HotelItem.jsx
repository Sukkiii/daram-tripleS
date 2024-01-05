/* eslint-disable react/prop-types */
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

function HotelItem({ hotel }) {
  const city = useMemo(
    () => (hotel?.address ? hotel.address.split(' ')[0] : ''),
    [hotel],
  )

  return (
    <Link to={`/hotelDetail/${hotel.lodgingId}`}>
      <Box className='relative flex mb-6 overflow-hidden bg-white border border-gray-200 border-solid h-29 group hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100'>
        <Box className='h-[8rem] w-[8rem] overflow-hidden'>
          <img
            src={`/src/assets/img/hotel/${hotel.mainImage}`}
            className='h-[8rem] w-[8rem] object-cover duration-1000 group-hover:scale-125 '
            alt={`Lodging ${hotel.lodgingId}`}
          />
        </Box>
        <Box className=' flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500'>
          <Typography
            variant='body1'
            className='text-gray-900 '
            style={{ fontWeight: 600 }}
          >
            {hotel.name}
          </Typography>
          <Typography variant='body1' className='-mt-1'>
            {city}
          </Typography>

          <Box className='-mt-1.5'>
            <Typography
              variant='body1'
              className='text-blue-500 '
              style={{ display: 'inline' }}
            >
              {hotel.avgRating}
            </Typography>
            <Typography
              variant='body2'
              className='text-gray-500 '
              style={{ display: 'inline' }}
            >
              /5
            </Typography>
            <Typography
              variant='body1'
              className='ml-2'
              style={{ marginLeft: '0.5rem', display: 'inline' }}
            >
              {hotel.reviewCount}건의 리뷰
            </Typography>
          </Box>
          <Box className='absolute bottom-1 right-3'>
            <Typography variant='body2' style={{ display: 'inline' }}>
              최저가
            </Typography>
            <Typography
              className='pl-2 text-xl text-orange-600'
              style={{ display: 'inline', fontWeight: 600, fontSize: '1.3rem' }}
              variant='body1'
              component='span'
            >
              {hotel.minPrice}원
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default HotelItem
