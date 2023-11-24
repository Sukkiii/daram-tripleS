import { Typography, Box } from '@mui/material'
import { IoSearch, IoAirplane, IoRemoveOutline } from 'react-icons/io5'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'

function AirlineTicket() {
  return (
    <>
      <Box className="flex mb-5 text-blue-900 justify-start">
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
        <Box className="flex items-center mr-5 text-sm w-2/5 justify-end">
          <input type="checkBox" />
          <Typography className="ml-2">항공 + 호텔</Typography>
        </Box>
      </Box>

      {/* 출발지 - 도착지 */}
      <Box className="flex">
        <Box className="w-3/12">
          <input
            className="border-t border-b border-l border-grey rounded-l w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="출발지"
          />
        </Box>

        <Box className="flex items-center border-t">
          <IoAirplane className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
        </Box>

        <Box className="w-3/12">
          <input
            className="border-t border-b border-r border-grey rounded-r w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="도착지"
          />
        </Box>

        {/*  */}
        <Box className="w-3/12">
          <input
            type="date"
            className="ml-4 border-t border-b border-l border-grey rounded-t rounded-l w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
          />
        </Box>

        <Box className="flex items-center ml-7">
          <IoRemoveOutline />
        </Box>

        <Box className="w-3/12">
          <input
            type="date"
            className="ml-2 border-t border-b border-r border-grey rounded-t rounded-r w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
          />
        </Box>

        {/* 검색 버튼 */}
        <Box className="flex justify-center items-center ml-5 w-3/12">
          <button className="flex justify-center items-center text-white bg-blue-600 w-full h-11 text-xl rounded-t rounded-b rounded-l transition duration-300 ease-in-out hover:bg-opacity-70">
            <IoSearch />
            검색
          </button>
        </Box>
      </Box>
    </>
  )
}

export default AirlineTicket
