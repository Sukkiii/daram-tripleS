import { useMemo } from 'react'
import { Box, Typography, Link } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

function HotLodgingList({ data }) {
  const lodgings = useMemo(
    () => (data && data.lodging ? data.lodging : []),
    [data],
  )

  return (
    <Box className='relative flex gap-4 mt-4 text-center hot-container'>
      {lodgings.map((lodging) => (
        <Link
          key={lodging.lodgingId}
          color='inherit'
          underline='none'
          className='flex flex-col w-1/4 overflow-hidden rounded-md shadow-md cursor-pointer hot-hotel-item bg-slate-50 h-fit'
          href={`/hotelDetail/${lodging.lodgingId}`}
        >
          <Box className='overflow-hidden rounded-md h-72'>
            <img
              className='hot-hotel-img -w-webkit -h-webkit'
              src={`src/assets/img/hotel/${lodging.mainImage}`}
              alt={`Lodging ${lodging.lodgingId}`}
            />
          </Box>
          <Box className='hot-hotel-content-review align-middle my-auto relative text-left ml-4 top-[-1rem] rounded-2xl w-fit bg-white pr-3 flex border-blue-800 border-2 overflow-hidden'>
            <Box className='bg-blue-800 rounded-br-xl text-white py-0.5 px-1.5 flex'>
              <Typography>{lodging.avgRating}</Typography>
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
                display: 'inline-block',
                color: '#00429b',
                fontWeight: '600',
                marginLeft: '0.5rem',
              }}
              variant='subtitle1'
            >
              리뷰 {lodging.reviewCount}개
            </Typography>
          </Box>
          <Box className='flex flex-col gap-1 p-4 pt-0 hot-hotel-content'>
            <Box className='box-border flex w-full gap-2 hot-hotel-content-label'>
              <Typography
                className='overflow-hidden text-left hot-hotel-name'
                variant='h6'
              >
                {lodging.name}
              </Typography>
              <Box className='hot-hotel-grade ml-1 pb-0.5 align-middle inline-block box-content'>
                {[...Array(Math.floor(lodging.avgRating))].map((_, i) => (
                  <StarRateRoundedIcon
                    key={i}
                    className='text-yellow-400 ml-[-5px]'
                  />
                ))}
              </Box>
            </Box>
            <Box className='hot-hotel-content-tag'>
              <Typography
                style={{ fontSize: '0.8rem' }}
                className='text-left tag-txt'
              >
                {lodging.address}
              </Typography>
            </Box>
            <Box className='mt-auto text-right hot-hotel-content-price'>
              <Typography
                style={{
                  color: '#8592a6',
                  verticalAlign: 'middle',
                }}
                className='inline-block price-from'
              >
                최저가
              </Typography>
              <Typography
                style={{
                  color: '#of294d',
                  fontWeight: '700',
                  marginLeft: '0.25rem',
                }}
                variant='h6'
                className='inline-block price-content'
              >
                {lodging.minPrice.toLocaleString()}원
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default HotLodgingList
