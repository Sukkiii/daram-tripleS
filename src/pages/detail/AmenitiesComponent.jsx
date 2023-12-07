import React, { useState } from 'react'
import {
  WifiIcon,
  AdjustmentsIcon,
  DesktopComputerIcon,
  CogIcon,
} from '@heroicons/react/outline'
import { Box, Typography } from '@mui/material'

const AmenitiesComponent = ({ lodgingData }) => {
  const [expanded, setExpanded] = useState(false)

  const getIconComponent = (amenityName) => {
    switch (amenityName) {
      case '와이파이':
        return <WifiIcon className="h-5 w-5 text-blue-500" /> // Blue color
      case '에어컨':
        return <AdjustmentsIcon className="h-5 w-5 text-red-500" /> // Red color
      case 'TV':
        return <DesktopComputerIcon className="h-5 w-5 text-green-500" />
      default:
        return <CogIcon className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <Box className="bg-white p-6 shadow-md mt-4 mb-4">
      <Typography variant="h4" fontWeight="bold" mb={2}>
        숙소 편의시설
      </Typography>
      <ul className={`${expanded ? '' : 'max-h-24 overflow-hidden'}`}>
        {lodgingData.roomType
          .flatMap((room) => room.amenities)
          .map((amenity, index) => (
            <li key={index} className="flex items-center space-x-2 mb-3">
              {getIconComponent(amenity)}
              <span className="text-sm">{amenity}</span>
            </li>
          ))}
      </ul>
      <button
        className="w-full text-center py-2 mt-4 bg-gray-100 text-gray-700 rounded-md"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '숨기기' : '편의시설 모두 보기'}
      </button>
    </Box>
  )
}

export default AmenitiesComponent
