import { Typography, Box, Button, TextField, Checkbox } from '@mui/material'
import { IoSearch, IoAirplane, IoRemoveOutline } from 'react-icons/io5'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'

function AirlineTicket() {
  return (
    <>
      <Box className="flex mb-5 text-blue-900">
        <Box className="flex w-full">
          <Box className="flex items-center mr-5 text-sm">
            <PiAirplaneTiltFill />
            왕복
          </Box>
          <Box className="flex items-center mr-5 text-sm">
            <IoMdPerson />
            성인 1명
          </Box>
          <Box className="flex items-center mr-5 text-sm">
            <MdAirlineSeatReclineNormal />
            일반석
          </Box>
        </Box>
        <Box className="flex items-center mr-5 text-sm w-2/5">
          <Checkbox type="checkBox" />
          <Typography className="ml-2">항공 + 호텔</Typography>
        </Box>
      </Box>

      <Box className="flex">
        <Box className="w-3/12">
          <TextField className="w-full" placeholder="출발지" />
        </Box>

        <Box className="flex items-center mx-2">
          <IoAirplane className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
        </Box>

        <Box className="w-3/12">
          <TextField placeholder="도착지" />
        </Box>

        <Box className="w-3/12 mx-3">
          <TextField type="date" className="ml-4 w-full" />
        </Box>

        <Box className="flex items-center">
          <IoRemoveOutline />
        </Box>

        <Box className="w-3/12 ml-2">
          <TextField type="date" className="ml-2 w-full" />
        </Box>

        <Box className="flex items-center w-3/12 ml-2">
          <Button variant="contained" className="w-auto h-14">
            <IoSearch className="text-2xl" />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AirlineTicket
