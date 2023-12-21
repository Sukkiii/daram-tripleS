import { Box, Typography, Chip } from '@mui/material'

function RoomComponent({ room }) {
  const colorPalette = ['#6495ED', '#6A5ACD', '#6B8E23', '#C0C0C0', '#BDB76B'] // 색상 팔레트

  return (
    <Box className="max-w-sm mb-6 overflow-hidden rounded shadow-lg">
      <Box className="px-6 py-4">
        <Typography variant="h6" className="mb-2 font-bold">
          {room.roomTypeData.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {room.roomTypeData.types} - {room.roomTypeData.bedType}
        </Typography>
        <Typography variant="body2">
          Capacity: {room.roomTypeData.capacity}
        </Typography>
        <Typography variant="body2">
          Size: {room.roomTypeData.size}, Floor: {room.roomDummyData.floor}
        </Typography>
        <Typography variant="body2">1박 ${room.roomTypeData.price}</Typography>
        <Chip
          label={
            room.roomDummyData.roomBooking.status ? '예약 가능' : '예약 불가'
          }
          color={room.roomDummyData.roomBooking.status ? 'success' : 'error'}
          variant="outlined"
        />
        <Box className="mt-2">
          {room.roomTypeData.amenities.map((amenity, index) => (
            <Chip
              key={index}
              label={amenity}
              className="mb-2 mr-2"
              style={{
                backgroundColor: colorPalette[index % colorPalette.length],
                color: 'white', // 흰색 글자
              }}
            />
          ))}
        </Box>
      </Box>
      <img src={room.roomTypeData.image[0]} alt="Room" className="w-full" />
    </Box>
  )
}

export default RoomComponent
