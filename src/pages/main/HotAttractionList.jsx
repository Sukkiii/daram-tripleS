/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { Box, Typography, Button } from '@mui/material'

function HotAttractionList({ data }) {
  const attractions = data && data.attractions ? data.attractions : []

  return (
    <Box className="hot-container mt-4 relative text-center flex">
      {attractions.map((attraction) => (
        <Box
          key={attraction.name}
          className="hot-hotel-item mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer bg-slate-50"
        >
          <Box className="rounded-md overflow-hidden">
            <img
              className="hot-hotel-img hover:scale-110 hover:transition"
              src={attraction.mainImage}
              alt={`Attractions ${attraction.name}`}
            />
          </Box>
          <Box className="hot-hotel-content flex-1 p-4 flex flex-col">
            <Box className="hot-hotel-content-label w-full box-border">
              <Typography className="hot-hotel-name overflow-hidden mr-1 font-bold text-base text-left">
                {attraction.name}
              </Typography>
            </Box>
            <Box className="hot-hotel-content-review align-middle my-2 text-left">
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
              >
                리뷰 {attraction.reviewCount}개
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <Box className="hot-hotel-item-hi mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer">
        <img
          className="hot-attraction-img h-80"
          src="src/assets/img/jejuExample.jpeg"
          alt="src/assets/img/jejuExample.jpeg"
        />
        <Box className="world-hot-hotel-content bg-[#07080B] p-4 text-white relative text-left flex flex-col">
          <Typography
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            인기 여행지
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

export default HotAttractionList
