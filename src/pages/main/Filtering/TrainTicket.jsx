import { CheckBox } from '@mui/icons-material'
import { Typography, Box, TextField, Button } from '@mui/material'
import { IoMdTrain } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

function TrainTicket() {
  return (
    <>
      <Box className="flex mb-5 text-blue-900">
        <Box className="flex items-center">
          <CheckBox type="checkBox" className="mr-2" />
          <Typography className="text-sm">중국</Typography>
        </Box>
        <Box className="flex items-center m-2">
          <CheckBox type="checkBox" className="mr-2" />
          <Typography className="text-sm">영국</Typography>
        </Box>
        <Box className="flex items-center">
          <CheckBox type="checkBox" className="mr-2" />
          <Typography className="text-sm">국내</Typography>
        </Box>
        <Box className="flex items-center m-2">
          <CheckBox className="mr-2" />
          <Typography className="text-sm">유럽</Typography>
        </Box>
      </Box>

      {/* 출발지 */}
      <Box className="flex">
        <Box className="rounded-l w-2/12">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">출발지</Typography>
          </Box>
          <Box>
            <TextField
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
              placeholder="서울"
            />
          </Box>
        </Box>

        <Box className="flex items-center mx-2.5 mt-12">
          <IoMdTrain className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
        </Box>

        <Box className="w-2/12">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">도착지</Typography>
          </Box>
          <Box>
            <TextField
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
              placeholder="부산"
            />
          </Box>
        </Box>

        {/* 출발 시간 */}
        <Box className="w-2/12 mx-2">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">출발 시간</Typography>
          </Box>
          <Box>
            <TextField
              type="date"
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            />
          </Box>
        </Box>

        {/* 승객 */}
        <Box className="w-2/12">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">승객</Typography>
          </Box>
          <Box>
            <TextField
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
              placeholder="5명"
            />
          </Box>
        </Box>

        {/* 검색 버튼 */}
        <Box className="mt-12 ml-1">
          <Button
            variant="contained"
            className="flex items-center text-white bg-blue-600 w-auto h-14 text-xl rounded-r-lg p-2 transition duration-300 ease-in-out hover:bg-opacity-70"
          >
            <IoSearch className="text-2xl" />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TrainTicket
