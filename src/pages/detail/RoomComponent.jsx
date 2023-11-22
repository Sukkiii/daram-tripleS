// RoomComponent.js
import React from 'react'
import { Box, Typography } from '@mui/material'

const RoomComponent = ({ room }) => {
  return (
    <Box className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <Box className="px-6 py-4">
        <Box className="font-bold text-xl mb-2">{room.name}</Box>
        <Box className="text-gray-700 text-base">
          <Typography color="text.secondary">
            {room.type} - {room.bedType}
          </Typography>
          <Typography variant="body2">Capacity: {room.capacity}</Typography>
          <Typography variant="body2">
            Size: {room.size} sqft, Floor: {room.floor}
          </Typography>
          <Typography variant="body2">1박 ${room.price}</Typography>
        </Box>
      </Box>
      <Box className="px-6 pt-4 pb-2">
        {room.status ? (
          <Box className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            예약 가능
          </Box>
        ) : (
          <Box className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            예약 불가
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default RoomComponent
