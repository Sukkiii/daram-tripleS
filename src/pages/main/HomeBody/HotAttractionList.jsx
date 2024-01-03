/* eslint-disable react/prop-types */
import { useMemo } from 'react'
import { Box, Typography, Button, Link } from '@mui/material'

function HotAttractionList({ data }) {
  const attractions = useMemo(
    () => (data && data.attraction ? data.attraction : []),
    [data],
  )

  return (
    <Box className="relative flex gap-4 mt-4 text-center hot-container">
      {attractions.map((attraction) => (
        <Link
          key={attraction.attractionId}
          color="inherit"
          underline="none"
          className="flex flex-col w-1/4 overflow-hidden rounded-md shadow-md cursor-pointer hot-hotel-item bg-slate-50 h-fit"
          href={`/tourDetail/${attraction.attractionId}`}
        >
          <Box className="overflow-hidden rounded-md h-80">
            <img
              className="hot-hotel-img -w-webkit -h-webkit"
              src={`src/assets/img/attraction/${attraction.mainImage}`}
              alt={`Attraction ${attraction.attractionId}`}
            />
          </Box>
          <Box className="flex flex-col gap-2 p-4 hot-hotel-content">
            <Box className="box-border w-full hot-hotel-content-label">
              <Typography
                className="overflow-hidden text-left hot-hotel-name"
                variant="h6"
              >
                {attraction.name}
              </Typography>
            </Box>
            <Box className="text-left align-middle hot-hotel-content-review flex">
              <Box className="hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 flex w-fit">
                <Typography className="flex leading-4">
                  {attraction.avgRating}
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
                variant="subtitle1"
              >
                리뷰 {attraction.reviewCount}개
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
      <Box className="relative w-1/4 overflow-hidden rounded-md shadow-md cursor-pointer hot-hotel-item-hi">
        <img
          className="object-cover w-full hot-attraction-img h-80"
          src="src/assets/img/jejuExample.jpeg"
          alt="src/assets/img/jejuExample.jpeg"
        />
        <Box className="bg-[#07080B] p-4 text-white text-left flex flex-col bottom-0 rounded-md absolute h-max w-full">
          <Typography
            style={{
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
            variant="h6"
          >
            인기 여행지
          </Typography>
          <Button
            style={{ width: '80%', margin: 'auto' }}
            variant="contained"
            size="large"
            href="/tour-and-tickets"
          >
            지금 확인하기
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HotAttractionList
