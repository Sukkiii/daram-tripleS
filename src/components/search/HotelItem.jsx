import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

function HotelItem({ hotel }) {
  return (
    // 클릭시 숙소 디테일 페이지로 이동
    <Link>
      <Box className="h-29 group relative mb-6 flex overflow-hidden border border-solid border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
        <Box className="h-[126px] w-[126px] overflow-hidden">
          <img
            src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
            className="h-[126px] w-[126px] object-cover duration-1000 group-hover:scale-125 "
            alt="Nature"
          />
        </Box>
        <Box className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500">
          <Typography
            variant="body1"
            className=" text-gray-900"
            style={{ fontWeight: 600 }}
          >
            {hotel.name}
          </Typography>
          <Typography variant="body1" className="-mt-1">
            {hotel.city} {hotel.country}
          </Typography>

          <Box className="-mt-1.5">
            <Typography
              variant="body1"
              className=" text-blue-500"
              style={{ display: 'inline' }}
            >
              {hotel.rating}
            </Typography>
            <Typography
              variant="body2"
              className=" text-gray-500"
              style={{ display: 'inline' }}
            >
              /5
            </Typography>
            <Typography
              variant="body1"
              className="ml-2"
              style={{ marginLeft: '8px', display: 'inline' }}
            >
              {hotel.reviewCount}건의 리뷰
            </Typography>
          </Box>
          <Box className="absolute bottom-1 right-3">
            <Typography variant="body2" style={{ display: 'inline' }}>
              최저가
            </Typography>
            <Typography
              className="pl-2 text-xl text-orange-600"
              style={{ display: 'inline', fontWeight: 600, fontSize: '1.3rem' }}
              variant="body1"
              component="span"
            >
              {hotel.price}원
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default HotelItem
