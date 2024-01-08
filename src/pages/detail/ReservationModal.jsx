/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Box, Typography, Button } from '@mui/material'
import Swal from 'sweetalert2'
import { makeReservation, getUser } from '../../fetch/fetchLodging'

function ReservationModal({
  lodgingData,
  selectedRoom,
  selectedRoomType,
  startDate,
  endDate,
}) {
  const checkInDate = dayjs(startDate || new Date())
  const checkOutDate = dayjs(endDate || new Date())
  const totalNights = checkOutDate.diff(checkInDate, 'day')
  const pricePerNight = selectedRoomType?.price || 0
  const totalPrice = pricePerNight * totalNights

  const [, setIsReserved] = useState(false)
  const [, setUserData] = useState(null)

  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [specialRequest, setSpecialRequest] = useState('')

  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value, 10))
  }

  const handleChildrenChange = (e) => {
    setChildren(parseInt(e.target.value, 10))
  }

  const handleSpecialRequestChange = (e) => {
    if (e.target.value.length <= 100) {
      setSpecialRequest(e.target.value)
    }
  }

  const fetchUserData = async () => {
    try {
      const userData = await getUser()
      setUserData(userData)
    } catch (error) {
      console.error('Failed to fetch user data:', error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const handleReservation = async () => {
    if (!selectedRoom || !startDate || !endDate) {
      Swal.fire({
        title: '선택 필요',
        text: '객실과 일정을 먼저 선택하세요.',
        icon: 'warning',
        confirmButtonColor: '#3264ff',
        cancelButtonColor: '#e2e8f0',
      })
      return
    }

    const { value: confirm } = await Swal.fire({
      title: '예약 확인',
      text: '예약을 진행하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '예, 예약합니다',
      cancelButtonText: '아니오',
      confirmButtonColor: '#3264ff',
      cancelButtonColor: '#e2e8f0',
    })

    if (confirm) {
      const reservationData = {
        lodging: lodgingData.lodging._id,
        room: selectedRoomType._id,
        status: false,
        checkInDate: startDate,
        checkOutDate: endDate,
        adults,
        children,
      }

      try {
        const reservationResult = await makeReservation(reservationData)

        if (reservationResult) {
          setIsReserved(true)
          Swal.fire({
            title: '예약 완료',
            text: '예약이 성공적으로 완료되었습니다.',
            icon: 'success',
            confirmButtonColor: '#3264ff',
            cancelButtonColor: '#e2e8f0',
          })
        }
      } catch (error) {
        Swal.fire({
          title: '예약 실패',
          text: '예약을 처리하는 중에 오류가 발생했습니다.',
          icon: 'error',
          confirmButtonColor: '#3264ff',
          cancelButtonColor: '#e2e8f0',
        })
      }
    }
  }

  const selectedRoomTypeData = selectedRoomType || { price: 0, capacity: 1 }

  return (
    <Box className='sticky z-10 inline-block w-full mb-4 top-4'>
      <Box className='mx-auto mt-8 overflow-hidden bg-white shadow-md rounded-xl'>
        <Box className='flex flex-col gap-4 p-8'>
          <Box className='flex items-center justify-between'>
            <Typography class='text-3xl font-bold text-blue-700'>
              ₩{selectedRoomTypeData.price.toLocaleString()}원
            </Typography>
            <Typography class='text-3xl font-semibold text-blue-700'>
              {selectedRoomTypeData.types}
            </Typography>
          </Box>
          <Box>
            <Typography className='block text-sm text-gray-600' color='primary'>
              체크인
            </Typography>
            <Typography class='block text-lg text-gray-800'>
              {startDate}
            </Typography>
          </Box>
          <Box>
            <Typography className='block text-sm text-gray-600' color='primary'>
              체크아웃
            </Typography>
            <Typography class='block text-lg text-gray-800'>
              {endDate}
            </Typography>
          </Box>
          <Box className='flex flex-col gap-1'>
            <Typography
              htmlFor='adults'
              className='text-gray-600 text-md'
              color='primary'
            >
              어른
            </Typography>
            <select
              id='adults'
              value={adults}
              onChange={handleAdultsChange}
              className='block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            >
              <option value={0}>어른 0명</option>
              <option value={1}>어른 1명</option>
              <option value={2}>어른 2명</option>
              <option value={3}>어른 3명</option>
              <option value={4}>어른 4명</option>
              <option value={5}>어른 5명</option>
            </select>
          </Box>
          <Box className='flex flex-col gap-1'>
            <Typography
              htmlFor='children'
              className='text-gray-600 text-md'
              color='primary'
            >
              아이
            </Typography>
            <select
              id='children'
              value={children}
              onChange={handleChildrenChange}
              className='block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            >
              <option value={0}>아이 0명</option>
              <option value={1}>아이 1명</option>
              <option value={2}>아이 2명</option>
              <option value={3}>아이 3명</option>
              <option value={4}>아이 4명</option>
              <option value={5}>아이 5명</option>
            </select>
          </Box>
          <Box>
            <Typography
              htmlFor='specialRequest'
              className='text-gray-600 text-md'
              color='primary'
            >
              요청사항
            </Typography>
            <textarea
              id='specialRequest'
              value={specialRequest}
              onChange={handleSpecialRequestChange}
              className='block w-full p-2 text-sm border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              rows='4'
              placeholder='요청사항을 입력해주세요. 요청사항은 최대 100자 입력 가능합니다.'
            />
            {specialRequest.length > 100 && (
              <Typography class='mt-1 text-xs text-red-500'>
                100자만 입력 가능합니다.
              </Typography>
            )}
          </Box>
          <Button
            onClick={handleReservation}
            variant='contained'
            className='w-full px-4 py-3 mt-8 text-sm font-bold text-white uppercase bg-blue-500 rounded'
          >
            예약하기
          </Button>
          <Typography className='mt-4 text-xs text-center text-gray-600'>
            예약 확정 전에는 요금이 청구되지 않습니다.
          </Typography>
        </Box>
        <Box className='px-5 py-4 bg-gray-50'>
          <Box className='flex justify-between'>
            <Typography>
              ₩{selectedRoomTypeData.price.toLocaleString()}원 x {totalNights}박
            </Typography>
            <Typography>₩{totalPrice.toLocaleString()}원</Typography>
          </Box>
          <Box className='flex justify-between mt-4 font-bold'>
            <Typography>총 합계</Typography>
            <Typography>₩{totalPrice.toLocaleString()}원</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ReservationModal
