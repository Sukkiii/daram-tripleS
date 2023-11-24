import { Typography, Box } from '@mui/material'
import { IoSearch } from 'react-icons/io5'

function Tour() {
  return (
    <Box className="flex">
      {/* 여행지 */}
      <Box className="border-t border-b border-r border-l border-grey rounded-l w-2/5">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">여행지</Typography>
        </Box>
        <Box>
          <input
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="도시 또는 지역"
          />
        </Box>
      </Box>

      {/* 승객 */}
      <Box className="border-t border-b border-r border-grey w-3/5">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">키워드 (선택 사항)</Typography>
        </Box>
        <Box>
          <input
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="액티비티 또는 어트랙션 검색"
          />
        </Box>
      </Box>

      {/* 검색 버튼 */}
      <Box>
        {/* eslint-disable-next-line */}
        <button className="flex items-center justify-center text-white bg-blue-600 w-auto h-full text-3xl p-2 rounded-r-lg transition duration-300 ease-in-out hover:bg-opacity-70">
          <IoSearch />
        </button>
      </Box>
    </Box>
  )
}

export default Tour
