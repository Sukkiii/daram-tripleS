import { useMemo } from 'react'
import { Box, Typography, Button, Link } from '@mui/material'

function HotAttractionList({ data }) {
  const attractions = useMemo(
    () => (data && data.attraction ? data.attraction : []),
    [data],
  )

  return (
    <Box className="hot-container mt-4 relative text-center flex gap-4">
      {attractions.map((attraction) => (
        <Link
          key={attraction.attractionId}
          color="inherit"
          underline="none"
          className="hot-hotel-item w-1/4 rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer bg-slate-50 h-fit"
          href={`/tourDetail/${attraction.attractionId}`}
        >
          <Box className="rounded-md overflow-hidden h-80">
            <img
              className="hot-hotel-img -w-webkit -h-webkit"
              src={`src/assets/img/attraction/${attraction.mainImage}`}
              alt={`Attraction ${attraction.attractionId}`}
            />
          </Box>
          <Box className="hot-hotel-content p-4 flex flex-col gap-2">
            <Box className="hot-hotel-content-label w-full box-border">
              <Typography
                className="hot-hotel-name overflow-hidden text-left"
                variant="h6"
              >
                {attraction.name}
              </Typography>
            </Box>
            <Box className="hot-hotel-content-review align-middle text-left">
              <Box className="hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 inline-block">
                <Typography className="leading-4 flex">
                  {attraction.avgRating}
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
                variant="subtitle1"
              >
                리뷰 {attraction.reviewCount}개
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
      <Box className="hot-hotel-item-hi w-1/4 rounded-md shadow-md overflow-hidden cursor-pointer relative">
        <img
          className="hot-attraction-img h-80 object-cover w-full"
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
