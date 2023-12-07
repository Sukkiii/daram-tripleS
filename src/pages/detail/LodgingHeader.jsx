import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder' // HeartIcon 대체
import ShareIcon from '@mui/icons-material/Share'

const LodgingHeader = ({ lodgingData }) => {
  return (
    <Box className="flex items-center justify-between">
      <Box className="flex items-center space-x-2">
        <Typography
          variant="h6"
          component="h1"
          className="text-lg font-semibold"
        >
          {lodgingData.lodging.name}
        </Typography>
        <Box className="flex items-center text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5" />
          ))}
          <span className="text-gray-600 ml-1">
            {lodgingData.lodging.avgRating}
          </span>
        </Box>
        <Typography className="text-sm text-gray-500">
          후기 {lodgingData.lodging.review.length}
        </Typography>
        <Typography className="text-sm text-gray-500">
          주소 {lodgingData.lodging.address}
        </Typography>
      </Box>
      <Box className="flex items-center space-x-4">
        <IconButton
          aria-label="Save"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <FavoriteBorderIcon className="h-6 w-6" />
        </IconButton>
        <IconButton
          aria-label="Share"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ShareIcon className="h-6 w-6" />
        </IconButton>
      </Box>
    </Box>
  )
}

export default LodgingHeader
