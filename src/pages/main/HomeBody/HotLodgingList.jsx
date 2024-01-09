/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import { useMemo } from 'react'
import { Box, Typography, Button, Link } from '@mui/material'
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
          <Box className='flex flex-col gap-2 p-4 hot-hotel-content'>
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
            <Box className='flex my-auto text-left align-middle hot-hotel-content-review'>
              <Box className='hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 flex w-fit'>
                <Typography className='flex leading-4'>
                  {lodging.avgRating}
                </Typography>
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
                이용자 리뷰 {lodging.reviewCount}개
              </Typography>
            </Box>
            <Box className='hot-hotel-content-tag'>
              <Typography
                style={{ fontSize: '0.8rem' }}
                className='text-left tag-txt'
              >
                무료 취소
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
      <Box className='relative w-1/4 overflow-hidden rounded-md shadow-md cursor-pointer'>
        <img
          className='h-80 hot-hotel-img'
          src='src/assets/img/hotelExample.jpeg'
          alt='src/assets/img/hotelExample.jpeg'
        />
        <Box className='bg-[#071718] px-4 py-8 text-white flex flex-col bottom-0 absolute w-full text-left'>
          <Typography
            style={{
              fontWeight: 'bold',
              marginBottom: '1.4rem',
            }}
            variant='h6'
          >
            전 세계 초특가 호텔
          </Typography>
          <Button
            style={{ width: '80%', margin: 'auto' }}
            variant='contained'
            size='large'
            href='/hotel'
          >
            지금 확인하기
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HotLodgingList
