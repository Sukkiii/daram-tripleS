import { Typography, Box, TextField, Button } from '@mui/material'
import { IoIosInformationCircle } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

function PickUp() {
  return (
    <>
      <Box className="rounded-t rounded-l border-grey w-200">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">인수장소</Typography>
        </Box>
        <Box>
          <TextField
            className="w-4/5"
            placeholder="공항, 도시, 역, 지역, 상권으로 검색"
          />
        </Box>
      </Box>

      <Box className="flex">
        <Box className="w-1/5 rounded-l">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">인수일시</Typography>
          </Box>
          <Box>
            <TextField
              type="date"
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            />
          </Box>
        </Box>

        <Box className="w-1/5 ml-1.5">
          <Box className="flex text-grey-700 p-3">
            <Typography className="invisible">시간</Typography>
          </Box>
          <Box>
            <TextField type="time" className="w-full" />
          </Box>
        </Box>

        <Box className="w-1/5 ml-2">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">반납일시</Typography>
          </Box>
          <Box>
            <TextField type="date" className="w-full" />
          </Box>
        </Box>

        <Box className="w-1/5 ml-1.5">
          <Box className="flex text-grey-700 p-3">
            <Typography className="invisible">시간</Typography>
          </Box>
          <Box>
            <TextField type="time" className="w-full" />
          </Box>
        </Box>

        <Box className="w-1/5 mt-12 ml-2">
          <Button
            variant="contained"
            className="flex items-center justify-center w-auto h-14"
          >
            <IoSearch className="text-3xl" />
          </Button>
        </Box>
      </Box>

      <Box className="flex flex-row items-center text-blue-900 mt-5 text-sm">
        <Box className="flex items-center mr-5">
          <Typography className="text-gray-700">출장</Typography>
          <IoIosInformationCircle className="ml-5 text-gray-500" />
          <Typography className="text-blue-900 font-semibold">한국</Typography>
        </Box>
        <Box className="flex items-center mr-5">
          <Typography className="text-gray-700 ml-5">연령(만)</Typography>
          <IoIosInformationCircle className="ml-5 text-gray-500" />
          <Typography className="text-blue-900 font-semibold">
            30~60세
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default PickUp
