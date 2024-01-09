import {
  Box,
  Slider,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function HotelSearchCondition() {
  const [priceRange, setPriceRange] = useState([0, 300000])
  const [sortOption, setSortOption] = useState(null)
  const location = useLocation()

  const handleChange = (newPrice) => {
    setPriceRange(newPrice)
  }

  const updateSortInUrl = (newSort) => {
    const url = new URL(window.location.href)
    url.searchParams.set('sort', newSort)

    window.location.href = url.toString()
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const sortFormUrl = searchParams.get('sort')
    setSortOption(sortFormUrl)
  }, [location])

  const defaultSortValue = (option) => {
    switch (option) {
      case 'rating':
        return '트리플에스 추천호텔'
      case 'price':
        return '가격 낮은 순'
      case 'review':
        return '리뷰 많은 순'
      default:
        return '트리플에스 추천호텔'
    }
  }

  return (
    <Box className='flex flex-col w-2/5 p-4 overflow-hidden rounded-md shadow-md bg-slate-50 h-fit'>
      <Box className='flex flex-col p-2 m-2 border-b-2 price-slider'>
        <Typography variant='h6'>가격</Typography>
        <Typography variant='subtitle1' className='text-gray-500'>
          1박 기준 요금
        </Typography>
        <Typography variant='subtitle1' className='py-2'>
          {priceRange[0].toLocaleString()}원 -
          {priceRange[1] === 300000
            ? `${priceRange[1].toLocaleString()}원+`
            : `${priceRange[1].toLocaleString()}원`}
        </Typography>
        <Slider
          min={0}
          max={300000}
          value={priceRange}
          defaultValue={[setPriceRange]}
          onChange={handleChange}
          valueLabelDisplay='auto'
          valueLabelFormat={(value) =>
            value === 300000 ? '300,000+' : value.toLocaleString()
          }
          step='10000'
          disableSwap
        />
        <Box className='flex justify-between mx-[-0.5rem] text-gray-400'>
          <Typography>0원</Typography>
          <Typography>300,000원+</Typography>
        </Box>
      </Box>
      <Box className='flex flex-col p-2 m-2 border-b-2 review-price-sorting'>
        <Typography variant='h6'>정렬</Typography>
        <FormControl>
          <RadioGroup value={defaultSortValue(sortOption)}>
            <FormControlLabel
              value='트리플에스 추천호텔'
              control={<Radio />}
              label='트리플에스 추천호텔'
              onClick={() => updateSortInUrl('rating')}
            />
            <FormControlLabel
              value='가격 낮은 순'
              control={<Radio />}
              label='가격 낮은 순'
              onClick={() => updateSortInUrl('price')}
            />
            <FormControlLabel
              value='리뷰 많은 순'
              control={<Radio />}
              label='리뷰 많은 순'
              onClick={() => updateSortInUrl('review')}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className='p-2 m-2 averageRating-click-floor'>
        <Typography variant='h6'>투숙객 평점</Typography>
        <FormControl>
          <RadioGroup defaultValue='all'>
            <FormControlLabel value='all' control={<Radio />} label='all' />
            <FormControlLabel value='4+' control={<Radio />} label='4+' />
            <FormControlLabel value='3+' control={<Radio />} label='3+' />
            <FormControlLabel value='2+' control={<Radio />} label='2+' />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default HotelSearchCondition
