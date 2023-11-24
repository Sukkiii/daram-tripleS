import React, { useState, useEffect, useMemo } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import { Grid, Box } from '@mui/material'

function CalendarComponent({ lodgingData, setReservations }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [selecting, setSelecting] = useState(true)

  useEffect(() => {
    setStartDate(null)
    setEndDate(null)
  }, [currentMonth])

  useEffect(() => {
    if (startDate || endDate) {
      updateReservations()
    }
  }, [startDate, endDate])

  const calendarValue = useMemo(() => {
    if (selecting) {
      return startDate ? dayjs(startDate) : null
    }
    return endDate ? dayjs(endDate) : null
  }, [selecting, startDate, endDate])

  const handleDateChange = (newValue) => {
    const formattedDate = newValue ? newValue.format('YYYY-MM-DD') : ''

    if (selecting) {
      setStartDate(formattedDate)
      setSelecting(false)
    } else {
      setEndDate(formattedDate)
      setSelecting(true)
    }
  }

  const updateReservations = () => {
    setReservations((prevReservations) =>
      prevReservations.map((reservation, index) =>
        index === 0
          ? { ...reservation, checkInDate: startDate, checkOutDate: endDate }
          : reservation,
      ),
    )
  }

  const handleMonthChange = (date) => {
    setCurrentMonth(date)
  }

  function calculateNights(startDate, endDate) {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const timeDifference = end - start

    const nights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

    return nights
  }

  const nights = calculateNights(startDate, endDate)

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          sx={{
            width: '480px',
          }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="font-bold text-xl mb-2">
            {startDate && endDate
              ? `${lodgingData.address}에서 ${nights}박`
              : '숙박 일정을 선택하세요'}
          </Box>
        </Grid>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={calendarValue}
          onChange={handleDateChange}
          onMonthChange={handleMonthChange}
        />
      </LocalizationProvider>
    </>
  )
}

export default CalendarComponent
