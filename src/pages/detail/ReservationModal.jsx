import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Box, Typography } from '@mui/material'

function ReservationModal({ closeModal, lodgingData, reservations }) {
  const checkInDate = dayjs(reservations[0].checkInDate)
  const checkOutDate = dayjs(reservations[0].checkOutDate)
  const totalNights = checkOutDate.diff(checkInDate, 'day')
  const pricePerNight = lodgingData.rooms[0].price // Assume this is already a number
  const totalPrice = pricePerNight * totalNights

  const [isReserved, setIsReserved] = useState(false)

  const handleReservation = () => {
    setIsReserved(true)
  }

  useEffect(() => {
    // 모달이 열릴 때
    document.body.style.overflow = 'hidden'

    // 클린업 함수: 모달이 닫힐 때
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <Box className="fixed inset-0 bg-black bg-opacity-50 overflow-y-hidden h-full w-full flex justify-center items-center z-50">
      <Box className="bg-white p-4 md:p-8 rounded-lg shadow-2xl max-w-md mx-auto">
        <Box className="text-center space-y-4">
          <Typography className="text-3xl font-bold text-gray-900">
            ₩{pricePerNight.toLocaleString()} /박
          </Typography>
          <Typography className="text-lg text-gray-500">
            총 {totalNights}박
          </Typography>
          <Box className="space-y-2">
            <Box>
              <Typography className="text-gray-500">체크인</Typography>
              <Typography className="text-gray-800">
                {checkInDate.format('YYYY.MM.DD')}
              </Typography>
            </Box>
            <Box>
              <Typography className="text-gray-500">체크아웃</Typography>
              <Typography className="text-gray-800">
                {checkOutDate.format('YYYY.MM.DD')}
              </Typography>
            </Box>
          </Box>
          {!isReserved ? (
            <button
              onClick={handleReservation}
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
            >
              예약하기
            </button>
          ) : (
            <Box className="text-lg text-green-700 bg-green-100 py-2 px-4 rounded-md border border-green-200">
              예약되었습니다!
            </Box>
          )}
          <Typography className="text-sm text-gray-500">
            예약 확정 전에는 요금이 청구되지 않습니다.
          </Typography>
          <Box className="pt-4 border-t-2">
            <Typography className="text-lg font-semibold">
              ₩{pricePerNight.toLocaleString()} x {totalNights}박
            </Typography>
            <Typography className="text-xl font-bold">
              총합계 ₩{totalPrice.toLocaleString()}
            </Typography>
          </Box>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Box>
      </Box>
    </Box>
  )
}

export default ReservationModal
