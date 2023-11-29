import { Typography, Box, TextField, Button } from '@mui/material'
import { FaHotel } from 'react-icons/fa6'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { IoMdPerson } from 'react-icons/io'
import { IoSearch, IoAirplane, IoRemoveOutline } from 'react-icons/io5'

function AirHotel() {
  return (
    <>
      <Box className="flex mb-5 text-blue-900">
        <Box className="flex w-3/5">
          <Box className="flex items-center mr-5 text-sm">
            <PiAirplaneTiltFill />
            <Typography>왕복</Typography>
          </Box>
          <Box className="flex items-center mr-5 text-sm">
            <IoMdPerson />
            <Typography>성인 1명 | 객실 1개</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="flex">
        <Box className="mt-12">
          <Typography
            className="flex w-auto
          h-14 items-center justify-center text-white bg-blue-600 w-10 h-full rounded-l p-2"
          >
            <PiAirplaneTiltFill className="text-xs" />
          </Typography>
        </Box>
        <Box className="w-1/4">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">출발지</Typography>
          </Box>
          <Box>
            <TextField placeholder="서울" />
          </Box>
        </Box>

        <Box className="flex items-center mt-12 ml-[-4rem] mr-2">
          <IoAirplane className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
        </Box>

        <Box className="w-1/4">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">도착지</Typography>
          </Box>
          <Box>
            <TextField placeholder="도시명 또는 공항명" />
          </Box>
        </Box>

        <Box className="w-1/5 ml-[-3rem]">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">가는편</Typography>
          </Box>
          <Box>
            <TextField
              type="date"
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            />
          </Box>
        </Box>

        <Box className="flex items-center mt-12 mx-1">
          <IoRemoveOutline />
        </Box>

        <Box className="w-1/5">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">오는편</Typography>
          </Box>
          <Box>
            <TextField
              type="date"
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            />
          </Box>
        </Box>
      </Box>

      <Box className="flex mt-3">
        <Box className="mt-12">
          <Typography className="flex w-auto h-14 items-center justify-center text-white bg-blue-600 w-10 h-full rounded-l p-2">
            <FaHotel className="text-xs" />
          </Typography>
        </Box>
        <Box className="w-7/12">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">도착지</Typography>
          </Box>
          <Box>
            <TextField
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
              placeholder="도시"
            />
          </Box>
        </Box>

        <Box className="ml-4 w-1/4">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">체크인</Typography>
          </Box>
          <Box>
            <TextField
              type="date"
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            />
          </Box>
        </Box>

        <Box className="flex items-center mx-6 mt-12">
          <Typography className="text-xs flex items-center text-center">
            박
          </Typography>
        </Box>

        <Box className="w-1/4">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">체크아웃</Typography>
          </Box>
          <Box>
            <TextField
              type="date"
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            />
          </Box>
        </Box>

        <Box className="flex items-center w-2/12 mt-12 ml-2">
          <Button variant="contained" className="w-auto h-14">
            <IoSearch className="text-xl" />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AirHotel
