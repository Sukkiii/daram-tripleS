import React, { useState, useEffect, useMemo } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs' // Dayjs를 임포트합니다
import { Box } from '@mui/material'

function CalendarComponent({ setReservations }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs())
  const [startDate, setStartDate] = useState(null) // Dayjs 객체 또는 null로 초기화
  const [endDate, setEndDate] = useState(null) // Dayjs 객체 또는 null로 초기화
  const [selecting, setSelecting] = useState(true) // true면 시작날짜 선택, false면 종료날짜 선택

  // 달이 변경될 때마다 startDate와 endDate를 초기화
  useEffect(() => {
    setStartDate(null)
    setEndDate(null)
  }, [currentMonth])

  useEffect(() => {
    // startDate 또는 endDate가 변경될 때마다 실행
    if (startDate || endDate) {
      updateReservations()
    }
  }, [startDate, endDate])

  const calendarValue = useMemo(() => {
    if (selecting) {
      return startDate ? dayjs(startDate) : null
    }
    return endDate ? dayjs(endDate) : null
  }, [selecting, startDate, endDate]) // 의존성 배열에 selecting, startDate, endDate 추가

  const handleDateChange = (newValue) => {
    const formattedDate = newValue ? newValue.format('YYYY-MM-DD') : ''

    if (selecting) {
      setStartDate(formattedDate) // 문자열 형식의 날짜 저장
      setSelecting(false) // 시작 날짜를 선택한 후 종료 날짜 선택으로 전환
    } else {
      setEndDate(formattedDate) // 문자열 형식의 날짜 저장
      setSelecting(true) // 종료 날짜를 선택한 후 다시 시작 날짜 선택으로 전환
    }
  }

  const updateReservations = () => {
    setReservations((prevReservations) =>
      prevReservations.map((reservation) =>
        reservation.userId === '12345'
          ? { ...reservation, checkInDate: startDate, checkOutDate: endDate }
          : reservation,
      ),
    )
  }

  const handleMonthChange = (date) => {
    setCurrentMonth(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box style={{ marginBottom: '70px' }}>
        <DateCalendar
          value={calendarValue}
          onChange={handleDateChange}
          onMonthChange={handleMonthChange}
        />
      </Box>
    </LocalizationProvider>
  )
}

export default CalendarComponent
