/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { Box, Typography } from '@mui/material'

function HotHotelList({ data, selectedLocale }) {
  const filteredTravels = data.filter(
    (travel) => travel.locale === selectedLocale,
  )
  return (
    <Box className="hot-container mt-4 relative text-center flex">
      {filteredTravels.map((travel) => (
        <Box
          key={travel.locationId}
          className="hot-hotel-item mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer bg-slate-50"
        >
          <Box className="rounded-md overflow-hidden">
            <img
              className="hot-hotel-img hover:scale-110 hover:transition"
              src={travel.images[0]?.imagePath}
              alt={`travel ${travel.locationId}`}
            />
          </Box>

          <Box className="hot-hotel-content flex-1 p-4 flex flex-col">
            <Box className="hot-hotel-content-label w-full box-border">
              <Typography className="hot-hotel-name overflow-hidden mr-1 font-bold text-base text-left">
                {travel.location}
              </Typography>
            </Box>
            <Box className="hot-hotel-content-review align-middle my-2 text-left">
              <Box className="hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 inline-block">
                <Typography className="leading-4 flex">
                  {travel.grade}
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
                리뷰 {travel.reviewCount}개
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default HotHotelList
