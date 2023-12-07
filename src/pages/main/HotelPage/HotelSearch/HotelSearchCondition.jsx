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
    <Box className="w-2/5 bg-slate-50 rounded-md shadow-md overflow-hidden flex flex-col p-4 h-fit">
      <Box className="price-slider m-2 p-2 flex flex-col border-b-2">
        <Typography variant="h6">가격</Typography>
        <Typography variant="subtitle1" className="text-gray-500">
          1박 기준 요금
        </Typography>
        <Typography variant="h6" className="py-2">
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
          valueLabelDisplay="auto"
          valueLabelFormat={(value) =>
            value === 300000 ? '300,000+' : value.toLocaleString()
          }
          step="10000"
          disableSwap
        />
        <Box className="flex justify-between mx-[-0.5rem] text-gray-400">
          <Typography>0원</Typography>
          <Typography>300,000원+</Typography>
        </Box>
      </Box>
      <Box className="review-price-sorting m-2 p-2 border-b-2 flex flex-col">
        <Typography variant="h6">정렬</Typography>
        <FormControl>
          <RadioGroup value={defaultSortValue(sortOption)}>
            <FormControlLabel
              value="트리플에스 추천호텔"
              control={<Radio />}
              label="트리플에스 추천호텔"
              onClick={() => updateSortInUrl('rating')}
            />
            <FormControlLabel
              value="가격 낮은 순"
              control={<Radio />}
              label="가격 낮은 순"
              onClick={() => updateSortInUrl('price')}
            />
            <FormControlLabel
              value="리뷰 많은 순"
              control={<Radio />}
              label="리뷰 많은 순"
              onClick={() => updateSortInUrl('review')}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className="averageRating-click-floor m-2 p-2">
        <Typography variant="h6">투숙객 평점</Typography>
        <FormControl>
          <RadioGroup defaultValue="all">
            <FormControlLabel value="all" control={<Radio />} label="all" />
            <FormControlLabel value="4+" control={<Radio />} label="4+" />
            <FormControlLabel value="3+" control={<Radio />} label="3+" />
            <FormControlLabel value="2+" control={<Radio />} label="2+" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default HotelSearchCondition
