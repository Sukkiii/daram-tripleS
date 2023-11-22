import React, { useState, useEffect } from 'react'
import { Typography, Grid, Box } from '@mui/material'
import RoomComponent from './RoomComponent'
import LeftArrowIcon from '../../assets/svg/LeftArrowIcon'
import RightArrowIcon from '../../assets/svg/RightArrowIcon'

const LodgingComponent = ({ lodgingData }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % lodgingData.image.length)
    }, 3000) // 3초마다 슬라이드 변경

    return () => clearInterval(interval)
  }, [lodgingData.image.length])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? lodgingData.image.length - 1 : prevIndex - 1,
    )
  }

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === lodgingData.image.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <Box className="mt-8 container mx-auto px-4">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-2">
        {lodgingData.name}
      </h1>
      <h2 className="text-2xl text-gray-600 mb-2">
        {lodgingData.theme} - {lodgingData.types}
      </h2>
      <Typography className="text-lg text-gray-500 mb-4">
        {`${lodgingData.address.city}, ${lodgingData.address.district}, ${lodgingData.address.county}, ${lodgingData.address.detail}`}
      </Typography>

      <Box className="relative w-full mb-8" data-carousel="slide">
        {/* Carousel wrapper */}
        <Box className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {lodgingData.image.map((imgSrc, index) => (
            <Box
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
              }`}
              data-carousel-item
            >
              <img
                src={imgSrc}
                className="w-full h-full object-cover"
                alt={`Slide ${index}`}
              />
            </Box>
          ))}
        </Box>
        {/* Slider indicators */}
        <Box className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {lodgingData.image.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-blue-500' : 'bg-white'
              }`}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </Box>

        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <Box className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <LeftArrowIcon />

            <Box className="sr-only">Previous</Box>
          </Box>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <Box className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <RightArrowIcon />

            <Box className="sr-only">Next</Box>
          </Box>
        </button>
      </Box>

      <Typography variant="body1" paragraph>
        {lodgingData.description}
      </Typography>
      <Grid container spacing={2}>
        {lodgingData.rooms.map((room, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RoomComponent room={room} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default LodgingComponent
