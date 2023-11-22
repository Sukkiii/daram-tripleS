import React, { useState } from 'react'
import DetailHeader from './detail/DetailHeader'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import DetailFooter from './detail/DetailFooter'
import ReservationModal from './detail/ReservationModal'

const DetailPage = ({ lodgingData, reservations, setReservations }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <DetailHeader />
      <LodgingComponent lodgingData={lodgingData} />
      <CalendarComponent setReservations={setReservations} />
      <DetailFooter
        lodgingData={lodgingData}
        reservations={reservations}
        openModal={handleOpenModal}
      />
      {isModalOpen && (
        <ReservationModal
          closeModal={closeModal}
          lodgingData={lodgingData}
          reservations={reservations}
        />
      )}
    </>
  )
}

export default DetailPage
