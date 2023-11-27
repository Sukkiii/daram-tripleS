/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

function HotLodgingList({ data }) {
  const lodgings = useMemo(
    () => (data && data.lodging ? data.lodging : []),
    [data],
  )

  return (
    <Box className="hot-container mt-4 relative text-center flex">
      {lodgings.map((lodging) => (
        <Box
          key={lodging.lodgingId}
          className="hot-hotel-item mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer bg-slate-50"
        >
          <Box className="rounded-md overflow-hidden">
            <img
              className="hot-hotel-img hover:scale-110 hover:transition"
              src={lodging.mainImage}
              alt={`Lodging ${lodging.lodgingId}`}
            />
          </Box>
          <Box className="hot-hotel-content flex-1 p-4 flex flex-col">
            <Box className="hot-hotel-content-label w-full box-border">
              <Typography className="hot-hotel-name overflow-hidden mr-1 font-bold text-base text-left">
                {lodging.name}
                <Box className="hot-hotel-grade ml-1 pb-0.5 align-middle inline-block box-content">
                  {[...Array(Math.floor(lodging.avgRating))].map((_, i) => (
                    <StarRateRoundedIcon
                      key={i}
                      className="text-yellow-400 ml-[-5px]"
                    />
                  ))}
                </Box>
              </Typography>
            </Box>
            <Box className="hot-hotel-content-review align-middle my-2 text-left">
              <Box className="hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 inline-block">
                <Typography className="leading-4 flex">
                  {lodging.avgRating}
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
                </Typography>
              </Box>
              <Typography
                style={{
                  display: 'inline-block',
                  color: '#00429b',
                  fontWeight: '600',
                  marginLeft: '0.5rem',
                }}
              >
                이용자 리뷰 {lodging.reviewCount}개
              </Typography>
            </Box>
            <Box className="hot-hotel-content-tag">
              <Typography
                style={{ fontSize: '0.8rem' }}
                className="tag-txt text-left"
              >
                무료 취소
              </Typography>
            </Box>
            <Box className="hot-hotel-content-price text-right mt-auto">
              <Typography
                style={{
                  color: '#8592a6',
                  verticalAlign: 'middle',
                }}
                className="price-from inline-block"
              >
                최저가
              </Typography>
              <Typography
                style={{
                  color: '#of294d',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginLeft: '0.25rem',
                }}
                className="price-content inline-block"
              >
                {lodging.minPrice.toLocaleString()}원
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <Box className="hot-hotel-item mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer bg-[#071718]">
        <img
          className="hot-hotel-img h-80"
          src="src/assets/img/hotelExample.jpeg"
          alt="src/assets/img/hotelExample.jpeg"
        />
        <Box className="world-hot-hotel-content border-[#071718] p-4 text-white relative text-left flex flex-col">
          <Typography
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            전 세계 초특가 호텔
          </Typography>
          <Button
            style={{ width: '80%', margin: 'auto' }}
            variant="contained"
            size="large"
          >
            지금 확인하기
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HotLodgingList
