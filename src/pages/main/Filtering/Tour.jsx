import { Typography, Box, TextField, Button } from '@mui/material'
import { IoSearch } from 'react-icons/io5'

function Tour() {
  return (
    <Box className="flex">
      <Box className="rounded-l w-2/5 mr-2">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">여행지</Typography>
        </Box>
        <Box>
          <TextField
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="도시 또는 지역"
          />
        </Box>
      </Box>

      <Box className="w-3/5">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">키워드 (선택 사항)</Typography>
        </Box>
        <Box>
          <TextField
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="액티비티 또는 어트랙션 검색"
          />
        </Box>
      </Box>

      <Box className="w-3/5 mt-12 ml-2">
        <Button
          variant="contained"
          className="flex items-center justify-center text-white bg-blue-600 w-auto h-14 text-2xl p-2 rounded-r-lg transition duration-300 ease-in-out hover:bg-blue-700"
        >
          <IoSearch className="text-3xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Tour
