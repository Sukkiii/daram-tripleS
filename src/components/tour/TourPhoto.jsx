import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/system'
import styles from './TourPhoto.module.css'

function TourPhoto({ images }) {
  const [mainSlider, setMainSlider] = useState(null)
  const [thumbnaulSlider, setThumbnailSlider] = useState(null)

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    dots: true,
  }

  const settingsThumbs = {
    // 추후 아래 코드로 변경 예정(지금은 이미지가 3개씩만 들어가있어 임시로 5개 보여줌)
    // slidesToShow: images.length > 5 ? 5 : images.length,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
  }

  // 이미지가 적용이 안되서 나중에 일단 임시 이미지 사용
  // const slidesImage = images.slice(0, 6)
  // const slidesData = slidesImage.map((img, idx) => ({
  //   id: idx,
  //   url: `src/assets/img/attraction/${img}`,
  // }))

  const slidesData = [
    {
      id: 1,
      url: 'https://adventure.lotteworld.com/common/images/icon/introCon_img0.jpg',
    },
    {
      id: 2,
      url: 'https://adventure.lotteworld.com/common/images/icon/introCon_img7.jpg',
    },
    {
      id: 3,
      url: 'https://korean.visitseoul.net/comm/getImage?srvcId=POST&parentSn=2193&fileTy=POSTTHUMB&fileNo=4',
    },
    {
      id: 4,
      url: 'https://adventure.lotteworld.com/common/images/icon/introCon_img4.jpg',
    },
    {
      id: 6,
      url: 'https://adventure.lotteworld.com/common/images/icon/introCon_img0.jpg',
    },
  ]

  return (
    <Box className="w-[43rem]">
      <Box className="slider-wrapper">
        <Slider
          {...settingsMain}
          asNavFor={thumbnaulSlider}
          ref={(slider) => setMainSlider(slider)}
        >
          {slidesData.map((slide) => (
            <Box className="slick-slide" key={slide.id}>
              <img
                className="slick-slide-image"
                src={slide.url}
                alt={`Attraction ${slide.url}`}
              />
            </Box>
          ))}
        </Slider>
        <Box className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={mainSlider}
            ref={(slider) => setThumbnailSlider(slider)}
          >
            {slidesData.map((slide) => (
              <Box className="slick-slide" key={slide.id}>
                <img
                  className="slick-slide-image"
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
