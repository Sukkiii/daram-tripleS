/* eslint-disable react/prop-types */
import { useState } from 'react'
import WifiIcon from '@mui/icons-material/Wifi'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import KitchenIcon from '@mui/icons-material/Kitchen'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import MicrowaveIcon from '@mui/icons-material/Microwave'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Box, Typography, Button } from '@mui/material'

function AmenitiesComponent({ lodgingData }) {
  const [expanded, setExpanded] = useState(false)

  const getIconComponent = (amenityName) => {
    switch (amenityName) {
      case '와이파이':
        return <WifiIcon className='w-5 h-5 text-blue-500' /> // Blue color
      case '에어컨':
        return <AcUnitIcon className='w-5 h-5 text-red-500' /> // Red color
      case 'TV':
        return <PersonalVideoIcon className='w-5 h-5 text-green-700' />
      case '냉장고':
        return <KitchenIcon className='w-5 h-5 text-purple-500' />
      case '세탁기':
        return <LocalLaundryServiceIcon className='w-5 h-5 text-sky-500' />
      case '전자레인지':
        return <MicrowaveIcon className='w-5 h-5 text-gray-500' />
      default:
        return <MoreHorizIcon className='w-5 h-5 text-black' />
    }
  }

  const allAmenities = lodgingData.roomType.flatMap((room) => room.amenities)

  const uniqueAmenities = [...new Set(allAmenities)]

  return (
    <Box className='flex flex-col w-full gap-4 p-6 mt-4 mb-4 bg-white shadow-md rounded-xl'>
      <Typography variant='h4' fontWeight='bold'>
        숙소 편의시설
      </Typography>
      <ul className={`${expanded ? '' : 'max-h-24 overflow-hidden'}`}>
        {uniqueAmenities.map((amenity) => (
          <li key={amenity} className='flex items-center mb-3 space-x-2'>
            {getIconComponent(amenity)}
            <span className='text-sm'>{amenity}</span>
          </li>
        ))}
      </ul>
      <Button
        className='w-full py-2 mt-4 text-center text-gray-700 bg-gray-100 rounded-md'
        onClick={() => setExpanded(!expanded)}
        variant='contained'
      >
        {expanded ? '숨기기' : '편의시설 모두 보기'}
      </Button>
    </Box>
  )
}

export default AmenitiesComponent
