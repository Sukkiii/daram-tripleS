import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUsers, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Box, Typography } from '@mui/material'

const HotelRoomComponent = ({
  roomData,
  roomType,
  setSelectedRoom,
  setSelectedRoomType,
}) => {
  useEffect(() => {
    handleSelectRoom()
  }, [roomData, roomType])

  const handleSelectRoom = () => {
    setSelectedRoom(roomData)
    setSelectedRoomType(roomType)
  }
  return (
    <Box className="bg-white p-6 shadow-md mb-4">
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {roomType.types}
      </Typography>
      <Box className="flex space-x-4 mb-4">
        <Box className="w-1/3">
          {/* Image container */}
          <Box className="bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden">
            {roomType.image.map((image) => (
              <Box key={roomType.id} className="relative">
                {roomType.image ? (
                  <img
                    src={`/src/assets/img/room/${image}`}
                    alt={`Room image of ${image}`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="text-gray-400 h-12 w-12 mx-auto absolute inset-0"
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="w-2/3 space-y-2">
          <Box className="flex items-center mt-2 mb-2">
            <FontAwesomeIcon
              icon={faBed}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <Typography className="text-sm">
              Bed Type: {roomType.bedType}
            </Typography>
          </Box>
          <Box className="flex items-center mt-2 mb-2">
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="text-green-500 mr-2 mt-2 mb-2"
            />
            <Typography className="text-sm">
              Capacity: {roomType.capacity}
            </Typography>
          </Box>
          <Box className="flex items-center mt-2 mb-2">
            <FontAwesomeIcon
              icon={faExpand}
              size="lg"
              className="text-yellow-500 mr-2 mt-2 mb-2"
            />
            <Typography className="text-sm">Size: {roomType.size}㎡</Typography>
          </Box>
          <Box className="flex items-center mt-2 mb-2">
            <FontAwesomeIcon
              icon={faMoneyBill}
              size="lg"
              className="text-red-500 mr-2"
            />
            <Typography className="text-sm">
              Price: {roomType.price.toLocaleString()}원
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-end mt-auto">
        <button
          onClick={handleSelectRoom}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          객실 선택하기
        </button>
      </Box>
    </Box>
  )
}

export default HotelRoomComponent
