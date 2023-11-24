import React from 'react'
import { Typography, Box, TextField } from '@mui/material'
// import { IoIosInformationCircle, IoMdStarOutline } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import RoomCount from './FilteringFuc/RoomCount'
import Destination from './FilteringFuc/Destination'
import CheckInOut from './FilteringFuc/CheckInOut'

function Hotel() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <Box className="w-8/12 h-fit">
        <Destination />
      </Box>

      {/* 체크인 · 체크아웃 */}
      <Box className="w-8/12 h-fit ml-2">
        <CheckInOut />
      </Box>

      <Box className="flex items-center justify-center p-3 h-fit">
        <Typography className="text-xs">1</Typography>
      </Box>

      <Box className="border-grey rounded-b rounded-r w-8/12 h-fit border p-2 border-b border-l border-grey rounded-l ml-2">
        <Box className="flex">
          <Typography className="text-xs">체크아웃</Typography>
        </Box>
        <Box>
          <TextField className="p-3 w-full outline-none text-sm border-b border-blue-500 focus:border-blue-500" />
        </Box>
      </Box>

      <Box className="ml-2 border-t border-b border-l border-r border-grey rounded-l w-7/12">
        <RoomCount />
        {/* <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">객실당 인원 수</Typography>
        </Box>
        <Box>
          <input
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="객실 1개, 성인 2명, 어린이 0명"
          />
        </Box> */}
      </Box>

      {/* 검색 버튼 */}
      <Box>
        <button
          id="searchButton"
          className="flex justify-center items-center text-white bg-blue-600 w-6/12 h-full text-3xl rounded-r-lg p-3 transition duration-300 ease-in-out hover:bg-opacity-70"
        >
          <Box className="flex items-center p-3">
            <Typography className="hidden">검색</Typography>
            <IoSearch />
          </Box>
        </button>
      </Box>
    </Box>
  )
}

export default Hotel
