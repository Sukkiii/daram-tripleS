/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import LodgingHeader from './LodgingHeader'
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
    <Box className="container px-4 mx-auto mt-8">
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
