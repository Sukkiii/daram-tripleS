import React, { useState, useEffect } from 'react'
import {
  Typography,
  Grid,
  Box,
  Chip,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import LodgingHeader from '../detail/LodgingHeader'
import GalleryComponent from './GalleryComponent'
import DescriptionComponent from './DescriptionComponent'
import AmenitiesComponent from './AmenitiesComponent'
import HotelRoomComponent from './HotelRoomComponent'

function LodgingComponent({
  lodgingData,
  setSelectedRoom,
  setSelectedRoomType,
}) {
  return (
    <Box className="mt-8 container mx-auto px-4">
      <LodgingHeader lodgingData={lodgingData} />
      <GalleryComponent lodgingData={lodgingData} />
      <DescriptionComponent lodgingData={lodgingData} />
      <AmenitiesComponent lodgingData={lodgingData} />
      {lodgingData.lodging.rooms.map((roomData, index) => {
        const roomType = lodgingData.roomType.find(
          (type) => type._id === roomData.roomType,
        )
        return (
          <HotelRoomComponent
            key={index}
            roomData={roomData}
            roomType={roomType || {}}
            setSelectedRoomType={setSelectedRoomType}
            setSelectedRoom={setSelectedRoom}
          />
        )
      })}
    </Box>
  )
}

export default LodgingComponent
