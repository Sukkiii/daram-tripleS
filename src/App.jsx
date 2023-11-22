import { Outlet } from 'react-router'
import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'
import SearchDetailPage from './pages/SearchDetailPage'

const App = () => {
  // 더미 데이터
  const lodgingData = {
    lodgingId: 1,
    destination: 'destinationId',
    types: 'hotel',
    theme: 'Ocean View',
    name: 'Sea Breeze Resort',
    address: {
      city: 'Yeongcheon',
      county: 'Gyeongsangbuk-do',
      district: 'District Name',
      detail: 'Detailed address here',
    },
    rooms: ['roomId1', 'roomId2'],
    option: [
      {
        category: 'Amenities',
        details: 'Free WiFi, Pool, Spa',
      },
    ],
    image: [
      'src/assets/detail/loadging.JPG',
      'src/assets/detail/loadging2.JPG',
      'src/assets/detail/loadging3.JPG',
      'src/assets/detail/loadging4.JPG',
      'src/assets/detail/loadging5.JPG',
      'src/assets/detail/loadging6.JPG',
    ],
    mainImage: 'src/assets/detail/loadging.JPG',
    description:
      '예술가가 기거하던 공간으로 집안 곳곳에서 전통염색과 예술작품을 즐기실 수 있습니다. 예술적이고 평온한 숙소에 머물며 걱정과 근심을 잊어보세요.',
  }

  const [reservations, setReservations] = useState([
    {
      status: true,
      checkInDate: '2023-03-01',
      checkOutDate: '2023-03-05',
      adults: 2,
      children: 1,
      bookingStatus: 'confirmed',
    },
  ])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />} />
        <Route path="/" element={<MainPage />} />
        <Route
          path="/detail"
          element={
            <DetailPage
              lodgingData={lodgingData}
              reservations={reservations}
              setReservations={setReservations}
            />
          }
        />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-detail" element={<SearchDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
