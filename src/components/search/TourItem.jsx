import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import Checkbox from '@mui/material/Checkbox'
import { useStore } from '../store/store'

function TourItem({ attraction, smallCard, likedPage }) {
  const city = useMemo(
    () => (attraction?.address ? attraction.address.split(' ')[0] : ''),
    [attraction],
  )

  const [isAttractionLiked, setIsAttractionLiked] = useState(false)
  const { likedAttractions, deleteLikedAttraction, addLikedAttraction } =
    useStore()

  const handleLikedAttraction = () => {
    if (isAttractionLiked) {
      deleteLikedAttraction(attraction)
    } else {
      addLikedAttraction(attraction)
    }
  }

  useEffect(() => {
    setIsAttractionLiked(
      likedAttractions?.some((attr) => attr._id === attraction._id),
    )
  }, [attraction, likedAttractions])

  return (
    <Box className={`relative ${likedPage ? 'pl-20' : ''}`}>
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
                style={
                  smallCard ? { display: 'inline' } : { display: 'inline' }
                }
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
      <Button
        style={{
          position: 'absolute',
          top: '0',
          right: '-0.5rem',
          borderRadius: '50%',
        }}
      >
        {isAttractionLiked ? (
          <FaHeart
            onClick={() => {
              handleLikedAttraction()
            }}
            className="w-7 h-7 mt-1 text-blue-700"
          />
        ) : (
          <CiHeart
            onClick={() => {
              handleLikedAttraction()
            }}
            className="w-9 h-9"
          />
        )}
      </Button>
    </Box>
  )
}

export default TourItem
