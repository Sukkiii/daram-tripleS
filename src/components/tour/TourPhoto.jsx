/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/system'
// eslint-disable-next-line no-unused-vars
import styles from './TourPhoto.module.css'

function TourPhoto({ images }) {
  const [mainSlider, setMainSlider] = useState(null)
  const [thumbnailSlider, setThumbnailSlider] = useState(null)

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    dots: true,
  }

  const settingsThumbs = {
    slidesToShow: images.length > 5 ? 5 : images.length,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
  }

  const slidesImage = images.slice(0, 6)
  const slidesData = slidesImage.map((img, idx) => ({
    id: idx,
    url: `/src/assets/img/attraction/${img}`,
  }))

  return (
    <Box className='w-[43rem]'>
      <Box className='slider-wrapper'>
        <Slider
          {...settingsMain}
          asNavFor={thumbnailSlider}
          ref={(slider) => setMainSlider(slider)}
        >
          {slidesData.map((slide) => (
            <Box className='slick-slide' key={slide.id}>
              <img
                className='slick-slide-image'
                src={slide.url}
                alt={`Attraction ${slide.url}`}
              />
            </Box>
          ))}
        </Slider>
        <Box className='thumbnail-slider-wrap'>
          <Slider
            {...settingsThumbs}
            asNavFor={mainSlider}
            ref={(slider) => setThumbnailSlider(slider)}
          >
            {slidesData.map((slide) => (
              <Box className='slick-slide' key={slide.id}>
                <img
                  className='slick-slide-image'
                  src={slide.url}
                  alt={`Attraction ${slide.url}`}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default TourPhoto
