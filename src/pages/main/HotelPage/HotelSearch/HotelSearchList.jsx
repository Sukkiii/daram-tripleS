import { useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import BedIcon from '@mui/icons-material/Bed'
import PersonIcon from '@mui/icons-material/Person'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import ArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded'

function HotelSearchList({ searchResults }) {
  const lodgings = useMemo(() => searchResults || [], [searchResults])

  const averageRatingText = (averageRating) => {
    switch (true) {
      case averageRating >= 4:
        return '훌륭함'
      case averageRating >= 3:
        return '아주좋음'
      case averageRating >= 2:
        return '좋음'
      default:
        return '적당함'
    }
  }

  return (
    <Box className='relative flex flex-col w-full gap-5 text-center hot-container'>
      {lodgings.map((lodging) => (
        <Link
          key={lodging.lodgingId}
          color='inherit'
          underline='none'
          to={`/hotelDetail/${lodging.lodgingId}`}
        >
          <Box className='flex gap-4 p-4 overflow-hidden rounded-md shadow-md cursor-pointer hot-hotel-item bg-slate-50'>
            <Box className='overflow-hidden rounded-md h-72 w-80'>
              <img
                className='hot-hotel-img -w-webkit -h-webkit'
                src={`/src/assets/img/hotel/${lodging.mainImage}`}
                alt={`Lodging ${lodging.lodgingId}`}
              />
            </Box>
            <Box className='relative flex flex-col w-3/4 gap-4 ml-3 overflow-hidden text-left align-middle border-2 border-none hot-hotel-content-review'>
              <Box className='flex'>
                <Typography variant='h5'> {lodging.hotelName} </Typography>
                <Box className='ml-3'>
                  {[...Array(Math.floor(lodging.averageRating))].map((_, i) => (
                    <StarRateRoundedIcon
                      key={i}
                      className='text-yellow-400 ml-[-5px]'
                    />
                  ))}
                </Box>
              </Box>
              <Box className='flex gap-2'>
                <Box className='bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 flex'>
                  <Typography>{lodging.averageRating}</Typography>
                  <Typography
                    style={{
                      fontSize: '0.9rem',
                      opacity: '50%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignContent: 'flex-end',
                    }}
                  >
                    /5
                  </Typography>
                </Box>
                <Typography
                  style={{
                    fontWeight: '600',
                  }}
                  variant='subtitle1'
                  className='text-blue-800'
                >
                  {averageRatingText(lodging.averageRating)}
                </Typography>
                <Typography variant='subtitle1'>
                  리뷰 {lodging.reviewCount}개
                </Typography>
                {lodging.theme.map((theme, i) => (
                  <Typography
                    key={i}
                    variant='subtitle1'
                    className='text-blue-800'
                  >
                    "{theme}"
                  </Typography>
                ))}
              </Box>
              <Box className='flex gap-1'>
                <BedIcon />
                <PersonIcon />
                <ChildCareIcon />
              </Box>
              <Box className='flex flex-col items-end justify-end gap-1 mt-auto text-right hot-hotel-content'>
                <Typography
                  variant='subtitle1'
                  className='inline-block text-gray-500'
                >
                  최저가
                </Typography>
                <Typography
                  style={{
                    fontWeight: '700',
                  }}
                  variant='h5'
                  className='inline-block price-content'
                >
                  {lodging.minPrice.toLocaleString()}원
                </Typography>
                <Link to={`/hotelDetail/${lodging.lodgingId}`}>
                  <Button variant='contained'>
                    최저가 예약하러 가기 <ArrowRightIcon />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default HotelSearchList
