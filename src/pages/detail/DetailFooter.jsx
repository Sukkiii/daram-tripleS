import { Box, Button } from '@mui/material'

function DetailFooter({ roomTypeData, reservations, openModal }) {
  return (
    <Box>
      <Box className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <Box className="flex flex-col text-sm md:flex-row dark:text-gray-400">
          <Box style={{ whiteSpace: 'nowrap' }}>
            <Box className="mb-2 text-xl font-bold">
              ₩{roomTypeData.price} /박
            </Box>
          </Box>
          <Box className="md:ml-4" style={{ whiteSpace: 'nowrap' }}>
            <Box className="mb-2 text-xl">
              {reservations[0].checkInDate} ~ {reservations[0].checkOutDate}
            </Box>
          </Box>
        </Box>

        <Box className="flex justify-end w-full">
          <Button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={openModal}
          >
            예약하기
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailFooter
