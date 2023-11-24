import { Typography, Box } from '@mui/material'
import { IoMdTrain } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

function TrainTicket() {
  return (
    <>
      <Box className="flex mb-5 text-blue-900">
        <Box className="flex items-center">
          <input type="checkBox" className="mr-2" />
          <Typography
            sx={{ marginRight: 3, fontSize: '0.875rem' }}
            className="text-sm"
          >
            중국
          </Typography>
        </Box>
        <Box className="flex items-center">
          <input type="checkBox" className="mr-2" />
          <Typography
            sx={{ marginRight: 3, fontSize: '0.875rem' }}
            className="text-sm"
          >
            영국
          </Typography>
        </Box>
        <Box className="flex items-center">
          <input type="checkBox" className="mr-2" />
          <Typography
            sx={{ marginRight: 3, fontSize: '0.875rem' }}
            className="text-sm"
          >
            국내
          </Typography>
        </Box>
        <Box className="flex items-center">
          <input type="checkBox" className="mr-2" />
          <Typography
            sx={{ marginRight: 3, fontSize: '0.875rem' }}
            className="text-sm"
          >
            유럽
          </Typography>
        </Box>
      </Box>

      {/* 출발지 */}
      <Box className="flex">
        <Box className="border-t border-b border-l border-grey rounded-l w-200">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">출발지</Typography>
          </Box>
          <Box>
            <input
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
              placeholder="서울"
            />
          </Box>
        </Box>

        <Box className="flex items-center border-t border-b">
          <IoMdTrain className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
        </Box>

        <Box className="border-t border-b border-r border-grey w-200">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">도착지</Typography>
          </Box>
          <Box>
            <input
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
              placeholder="부산"
            />
          </Box>
        </Box>

        {/* 출발 시간 */}
        <Box className="border-t border-b border-r border-grey w-200">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">출발 시간</Typography>
          </Box>
          <Box>
            <input
              type="date"
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            />
          </Box>
        </Box>

        {/* 승객 */}
        <Box className="border-t border-b border-r border-grey w-200">
          <Box className="flex text-grey-700 p-3">
            <Typography className="text-xs">승객</Typography>
          </Box>
          <Box>
            <input
              className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
              placeholder="5명"
            />
          </Box>
        </Box>

        {/* 검색 버튼 */}
        <Box>
          {/* eslint-disable-next-line */}
          <button className="flex justify-center items-center text-white bg-blue-600 w-auto h-full text-3xl rounded-r-lg p-2 transition duration-300 ease-in-out hover:bg-opacity-70">
            <IoSearch />
          </button>
        </Box>
      </Box>
    </>
  )
}

export default TrainTicket
