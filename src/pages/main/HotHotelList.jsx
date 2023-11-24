/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { Box, Typography } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

function HotHotelList({ data, selectedLocale }) {
  const filteredHotels = data.filter((hotel) => hotel.locale === selectedLocale)
  return (
    <Box className="hot-container mt-4 relative text-center flex">
      {filteredHotels.map((hotel) => (
        <Box
          key={hotel.hotelId}
          className="hot-hotel-item mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer bg-slate-50"
        >
          <Box className="rounded-md overflow-hidden">
            <img
              className="hot-hotel-img hover:scale-110 hover:transition"
              src={hotel.images[0]?.imagePath}
              alt={`Hotel ${hotel.hotelId}`}
            />
          </Box>
          <Box className="hot-hotel-content flex-1 p-4 flex flex-col">
            <Box className="hot-hotel-content-label w-full box-border">
              <Typography className="hot-hotel-name overflow-hidden mr-1 font-bold text-base text-left">
                {hotel.hotelName}
                <Box className="hot-hotel-grade ml-1 pb-0.5 align-middle inline-block box-content">
                  {[...Array(hotel.star)].map((_, i) => (
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
                  {hotel.grade}
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
                이용자 리뷰 {hotel.reviewCount}개
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
                {hotel.salePrice.toLocaleString()}원
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default HotHotelList