import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { FaCircle, FaCircleHalfStroke, FaRegCircle } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { Box, fontWeight } from '@mui/system'
import { Typography } from '@mui/material'
import { Button } from '@mui/base'
import moment from 'moment/moment'

export default function TourDetailHeader({ mainAttraction, city }) {
  const maxRating = 5
  const fullStar = Math.floor(mainAttraction.avgRating)
  const halfStar = mainAttraction.avgRating % 1 > 0.5

  const starRating = Array.from({ length: maxRating }, (_, idx) => {
    if (fullStar > idx) return <FaCircle key={idx} />
    if (fullStar === idx && halfStar) return <FaCircleHalfStroke key={idx} />
    return <FaRegCircle key={idx} />
  })

  const formattedHour = (time) => {
    if (!time) return

    const parsedTime = moment(time, 'HH:mm')
    const formattedTime = parsedTime.format('A h:mm')

    return formattedTime
  }

  const isOpen = ({ open, close }) => {
    if (!open || !close) return
    const [openHour, openMinutes] = open.split(':')
    const [closeHour, closeMinutes] = close.split(':')
    const openToMinutes = openHour * 60 + Number(openMinutes)
    const closeToMinutes = closeHour * 60 + Number(closeMinutes)

    const now = new Date()
    const currentHour = now.getHours()
    const currentMinutes = now.getMinutes()
    const currentToMinutes = currentHour * 60 + currentMinutes

    if (
      currentToMinutes >= openToMinutes &&
      currentToMinutes <= closeToMinutes
    ) {
      return '영업중'
    }

    return '영업종료'
  }

  return (
    <Box className="flex flex-col gap-2 p-3">
      <Typography className="text-gray-900" variant="body2" component="span">
        {mainAttraction.location}
        <FiChevronRight className="w-10 inline" />
        <Link to={`/searchList/${city}`}>{city}</Link>
        <FiChevronRight className="w-10 inline" />
        {mainAttraction.name}
      </Typography>
      <Box className="flex mt-10">
        <Typography
          className="text-gray-900 w-full ml-2"
          style={{
            display: 'inline',
            fontWeight: 600,
            fontSize: '2rem',
          }}
          variant="body1"
          component="span"
        >
          {mainAttraction.name}
        </Typography>
        {/* 추후 버튼 클릭하면 찜하기 리스트에 담기 */}
        <Button>
          <CiHeart className="w-9 h-9" />
        </Button>
      </Box>

      <Box className="text-gray-900 flex gap-2">
        <Typography
          variant="body2"
          component="span"
          className="flex gap-[0.1rem] text-blue-600"
          style={{ fontSize: '1rem' }}
        >
          {starRating}
        </Typography>
        <Typography variant="body2" component="span">
          {mainAttraction.review?.length} 개의 리뷰
        </Typography>
        <Box component="span">•</Box>
        <Typography variant="body2" component="span">
          {mainAttraction.theme?.join(' & ')}
        </Typography>
      </Box>

      <Box className="text-gray-900 flex gap-2">
        <Typography
          className="text-blue-500"
          variant="body2"
          component="span"
          style={{ fontWeight: '600' }}
        >
          {isOpen({
            open: mainAttraction.operatingTime?.open,
            close: mainAttraction.operatingTime?.close,
          })}
        </Typography>
        <Box component="span">•</Box>
        <Typography
          variant="body2"
          component="span"
          style={{ fontWeight: '600' }}
        >
          {formattedHour(mainAttraction.operatingTime?.open)} ~
          {formattedHour(mainAttraction.operatingTime?.close)}
        </Typography>
      </Box>
    </Box>
  )
}
