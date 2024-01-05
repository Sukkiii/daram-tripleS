/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import DescriptionComponent from './DescriptionComponent'
import AmenitiesComponent from './AmenitiesComponent'
import HotelRoomComponent from './HotelRoomComponent'

function LodgingComponent({
  lodgingData,
  setSelectedRoom,
  setSelectedRoomType,
}) {
  return (
    <Box className='container px-4 mx-auto mt-8'>
      <DescriptionComponent lodgingData={lodgingData} />
      <AmenitiesComponent lodgingData={lodgingData} />
      {lodgingData.lodging.rooms.map((roomData) => {
        const roomType = lodgingData.roomType.find(
          (type) => type._id === roomData.roomType,
        )
        return (
          <HotelRoomComponent
            key={roomData.id}
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
