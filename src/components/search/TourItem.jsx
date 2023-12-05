import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

function TourItem({ attraction, smallCard }) {
  const city = useMemo(
    () => (attraction?.address ? attraction.address.split(' ')[0] : ''),
    [attraction],
  )

  return (
    <Link to={`/tourDetail/${attraction.attractionId}`}>
      <Box
        className={`group relative flex overflow-hidden border border-solid border-gray-200 bg-white ${
          smallCard
            ? 'h-23 mb-2'
            : 'h-29 mb-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100'
        }`}
      >
        <Box
          className={` overflow-hidden
            ${smallCard ? 'h-[6rem] w-[6rem]' : 'h-[8rem] w-[8rem]'}
          `}
        >
          <img
            src={`/src/assets/img/attraction/${attraction.mainImage}`}
            className={`object-cover 
              ${
                smallCard
                  ? 'h-[6rem] w-[6rem]'
                  : 'h-[8rem] w-[8rem] overflow-hidden duration-1000 group-hover:scale-125'
              }`}
            alt={`attraction ${attraction.attractionId}`}
          />
        </Box>
        <Box className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500">
          <Typography
            variant="body1"
            className=" text-gray-900"
            style={{ fontWeight: 600 }}
          >
            {attraction.name}
          </Typography>
          <Typography variant="body1" className="-mt-1">
            {city}
          </Typography>

          <Box className="-mt-1.5">
            <Typography
              variant="body1"
              className=" text-blue-500"
              style={smallCard ? { display: 'inline' } : { display: 'inline' }}
            >
              {attraction.avgRating}
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
              style={{ marginLeft: '0.5rem', display: 'inline' }}
            >
              {attraction.reviewCount}건의 리뷰
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default TourItem
