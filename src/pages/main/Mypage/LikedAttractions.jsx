import { useEffect, useMemo, useState } from 'react'
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material'
import { TbMinusVertical } from 'react-icons/tb'
import { useStore } from '../../../components/store/store'
import TourItem from '../../../components/search/TourItem'

export default function LikedAttractions() {
  const attractions = useStore((store) => store.likedAttractions) // store에서 내가 찜한 관광지 목록
  const { deleteLikedAttraction } = useStore()
  const [checkItems, setCheckItems] = useState([])

  const handleSingleCheck = (checked, attraction) => {
    if (checked) {
      setCheckItems((prev) => [...prev, attraction])
    } else {
      setCheckItems(
        checkItems.filter((attraction) => attraction._id !== attraction._id),
      )
    }
  }

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckItems(attractions)
    } else {
      setCheckItems([])
    }
  }

  const handelDelete = () => {
    checkItems.map((attraction) => deleteLikedAttraction(attraction))
  }

  return (
    <Box
      className="flex flex-col justify-center w-full"
      style={{ width: '100%' }}
    >
      <Box className="ml-2">
        <FormControlLabel
          control={
            <Checkbox
              checked={checkItems.length === attractions.length}
              onChange={(e) => handleAllCheck(e.target.checked)}
              sx={{
                fontSize: 28,
                marginLeft: '1rem',
                marginBottom: '0.25rem',
              }}
            />
          }
          label={
            <Typography
              variant="body2"
              component="span"
              className="text-gray-900"
              style={{ fontWeight: 600 }}
            >
              전체선택
            </Typography>
          }
        />
        <TbMinusVertical className="text-gray-400 my-5 -ml-2 inline text-[1.5rem]" />
        <Typography
          onClick={() => handelDelete()}
          className="text-gray-900 my-5"
          variant="body2"
          component="span"
          style={{ fontWeight: 600 }}
        >
          선택삭제
        </Typography>
      </Box>
      <Box className="grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-6">
        {attractions.length ? (
          attractions.map((attraction) => (
            <Box key={attraction.attractionId} className="felx">
              <Checkbox
                checked={!!checkItems.includes(attraction)}
                onChange={(e) =>
                  handleSingleCheck(e.target.checked, attraction)
                }
                sx={{
                  fontSize: 28,
                  position: 'absolute',
                  display: 'inline',
                  marginTop: '2rem',
                  marginLeft: '1rem',
                }}
              />
              <Box className="w-full">
                <TourItem
                  key={attraction.attractionId}
                  attraction={attraction}
                  likedPage="true"
                />
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            className="text-gray-900"
            style={{
              display: 'inline',
              fontWeight: 600,
              fontSize: '1.5rem',
            }}
            variant="body1"
            component="span"
          >
            여행지 정보가 없습니다
          </Typography>
        )}
      </Box>
    </Box>
  )
}
