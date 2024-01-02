import { Typography, Box, TextField, Button } from '@mui/material'
import { IoSearch } from 'react-icons/io5'

function Tour() {
  return (
    <Box className="flex">
      <Box className="w-2/5 mr-2 rounded-l">
        <Box className="flex p-3 text-grey-700">
          <Typography className="text-xs">여행지</Typography>
        </Box>
        <Box>
          <TextField
            className="w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500"
            placeholder="도시 또는 지역"
          />
        </Box>
      </Box>
      <Box className="w-3/4">
        <Box className="flex p-3 text-grey-700">
          <Typography className="text-xs">키워드 (선택 사항)</Typography>
        </Box>
        <Box>
          <TextField
            className="w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500"
            placeholder="액티비티 또는 어트랙션 검색"
          />
        </Box>
      </Box>
      <Box className="w-3/4 mt-12 ml-2">
        <Button
          variant="contained"
          className="flex items-center justify-center w-auto p-2 text-2xl text-white transition duration-300 ease-in-out bg-blue-600 rounded-r-lg h-14 hover:bg-blue-700"
        >
          <IoSearch className="text-3xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Tour
