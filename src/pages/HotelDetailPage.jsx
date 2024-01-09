import React, { useState, useEffect } from 'react'
// import DetailHeader from './detail/DetailHeader'
import { useParams } from 'react-router'
import { Box, Typography } from '@mui/material'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import LodgingHeader from './detail/LodgingHeader'
import GalleryComponent from './detail/GalleryComponent'
import ReservationModal from './detail/ReservationModal'
import Review from './detail/Review'
import Kakao from './detail/Kakao'
import { getLodgingData } from '../fetch/fetchLodging'
import CommonHeader from './main/CommonHeader'

function App() {
  const [lodging, setLodging] = useState(null)
  const [, setRooms] = useState([])
  const { lodgingId } = useParams()
  useEffect(() => {
    const fetchLodgingData = async () => {
      try {
        const data = await getLodgingData(lodgingId)
        setLodging(data)
        setRooms(data?.lodging?.rooms)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    if (lodgingId) {
      fetchLodgingData()
    }
  }, [lodgingId])

  const [selectedRoom, setSelectedRoom] = useState(null)
  const [selectedRoomType, setSelectedRoomType] = useState(null)

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  })

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleStartDateChange = (newStartDate) => {
    setStartDate(newStartDate)
  }

  const handleEndDateChange = (newEndDate) => {
    setEndDate(newEndDate)
  }

  return (
    <Box>
      {lodging ? (
        <>
          <CommonHeader />
          <Box className='max-w-[1220px] mx-auto'>
            <LodgingHeader lodgingData={lodging} />
            <GalleryComponent lodgingData={lodging} />
            <Box className='relative flex gap-12'>
              <Box className='w-3/5'>
                <LodgingComponent
                  lodgingData={lodging}
                  setSelectedRoomType={setSelectedRoomType}
                  setSelectedRoom={setSelectedRoom}
                />
                <CalendarComponent
                  lodgingData={lodging}
                  setRooms={setRooms}
                  setSelectedDates={setSelectedDates}
                  startDate={startDate}
                  endDate={endDate}
                  onStartDateChange={handleStartDateChange}
                  onEndDateChange={handleEndDateChange}
                />
              </Box>
              <Box className='relative w-2/6'>
                <ReservationModal
                  lodgingData={lodging}
                  selectedRoom={selectedRoom}
                  selectedRoomType={selectedRoomType}
                  selectedDates={selectedDates}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Box>
            </Box>
            <Review lodgingData={lodging} />
          </Box>
          <Kakao lodgingData={lodging} />
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  )
}

export default App
