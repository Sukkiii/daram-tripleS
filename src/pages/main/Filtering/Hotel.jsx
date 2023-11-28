import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { IoSearch } from 'react-icons/io5'
import filteringApi from '../../../fetch/filteringApi'
import Travel from './FilteringFuc/Travel'
import CheckInOut from './FilteringFuc/CheckInOut'
import RoomCount from './FilteringFuc/RoomCount'

function Hotel() {
  const [apiData, setAPIData] = useState(null)

  const handleBtnClick = async () => {
    try {
      const data = await filteringApi() // API 호출 함수 실행
      setAPIData(data) // 받은 데이터 상태 업데이트
      console.log('apiData:', data)
    } catch (error) {
      console.log('Destination 에러')
    }
  }

  useEffect(() => {
    console.log('A:', apiData)
  }, [apiData])

  return (
    <Box className="flex">
      <Box className="w-2/5 h-fit">
        <Travel />
      </Box>

      <Box className="w-2/5 h-fit ml-2 ml-[-55px]">
        <CheckInOut />
      </Box>

      <Box className="margin-5 border rounded m-auto w-auto ml-4 mt-8">
        <RoomCount />
      </Box>

      {/* 제출했을 때 호텔 목록 리스트로 넘겨지게 해야함 */}
      <Box className="flex justify-center items-center ml-2 w-2/12 mt-7 mr-16">
        <Button
          onClick={handleBtnClick}
          variant="contained"
          className="flex items-center justify-center text-white bg-blue-600 w-fit h-16 text-lg rounded-r-lg rounded-l-lg p-2 transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <IoSearch className="text-xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Hotel
