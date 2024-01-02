import { useState } from 'react'
import WifiIcon from '@mui/icons-material/Wifi'
import CropIcon from '@mui/icons-material/Crop'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import Face3Icon from '@mui/icons-material/Face3'
import { Box, Typography, Button } from '@mui/material'

function AmenitiesComponent({ lodgingData }) {
  const [expanded, setExpanded] = useState(false)

  const getIconComponent = (amenityName) => {
    switch (amenityName) {
      case '와이파이':
        return <WifiIcon className="w-5 h-5 text-blue-500" /> // Blue color
      case '에어컨':
        return <CropIcon className="w-5 h-5 text-red-500" /> // Red color
      case 'TV':
        return <PersonalVideoIcon className="w-5 h-5 text-green-500" />
      default:
        return <Face3Icon className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <Box className="p-6 mt-4 mb-4 bg-white shadow-md">
      <Typography variant="h4" fontWeight="bold" mb={2}>
        숙소 편의시설
      </Typography>
      <ul className={`${expanded ? '' : 'max-h-24 overflow-hidden'}`}>
        {lodgingData.roomType
          .flatMap((room) => room.amenities)
          .map((amenity, index) => (
            <li key={index} className="flex items-center mb-3 space-x-2">
              {getIconComponent(amenity)}
              <span className="text-sm">{amenity}</span>
            </li>
          ))}
      </ul>
      <Button
        className="w-full py-2 mt-4 text-center text-gray-700 bg-gray-100 rounded-md"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '숨기기' : '편의시설 모두 보기'}
      </Button>
    </Box>
  )
}

export default AmenitiesComponent
