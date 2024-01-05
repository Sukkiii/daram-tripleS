/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
import HotelIcon from '@mui/icons-material/Hotel'
import GroupsIcon from '@mui/icons-material/Groups'
import CropFreeIcon from '@mui/icons-material/CropFree'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { Box, Typography, Button } from '@mui/material'

function HotelRoomComponent({
  roomData,
  roomType,
  setSelectedRoom,
  setSelectedRoomType,
}) {
  const handleSelectRoom = () => {
    setSelectedRoom(roomData)
    setSelectedRoomType(roomType)
  }
  return (
    <Box className='w-full p-6 mb-4 bg-white shadow-md rounded-xl'>
      <Typography variant='h4' fontWeight='bold' mb={2}>
        {roomType.types}
      </Typography>
      <Box className='flex mb-4 space-x-4'>
        <Box className='w-1/3'>
          {/* Image container */}
          <Box className='overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1'>
            {roomType.image.map((image) => (
              <Box key={roomType.id} className='relative'>
                {roomType.image ? (
                  <img
                    src={`/src/assets/img/room/${image}`}
                    alt={`Room image of ${image}`}
                    className='object-cover w-full h-full'
                  />
                ) : (
                  <CameraAltIcon className='absolute inset-0 w-12 h-12 mx-auto text-gray-400' />
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className='w-2/3 space-y-2'>
          <Box className='flex items-center mt-2 mb-2'>
            <HotelIcon size='lg' className='mr-2 text-blue-500' />
            <Typography className='text-sm'>
              Bed Type: {roomType.bedType}
            </Typography>
          </Box>
          <Box className='flex items-center mt-2 mb-2'>
            <GroupsIcon size='lg' className='mt-2 mb-2 mr-2 text-green-500' />
            <Typography className='text-sm'>
              Capacity: {roomType.capacity}
            </Typography>
          </Box>
          <Box className='flex items-center mt-2 mb-2'>
            <CropFreeIcon
              size='lg'
              className='mt-2 mb-2 mr-2 text-yellow-500'
            />
            <Typography className='text-sm'>Size: {roomType.size}㎡</Typography>
          </Box>
          <Box className='flex items-center mt-2 mb-2'>
            <LocalAtmIcon size='lg' className='mr-2 text-red-500' />
            <Typography className='text-sm'>
              Price: {roomType.price.toLocaleString()}원
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className='flex justify-end mt-auto'>
        <Button
          onClick={handleSelectRoom}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          객실 선택하기
        </Button>
      </Box>
    </Box>
  )
}

export default HotelRoomComponent
