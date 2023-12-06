import { useState, useEffect } from 'react'
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material'
import { Button } from '@mui/base'
import showSwal from '../../../assets/util/showSwal'
import FetchReservationList from '../../../fetch/fetchReservationList'

function Reservation() {
  const [reservationData, setReservationData] = useState(null)
  const [showButton, setShowButton] = useState(true)

  const handleReservationList = async (e) => {
    e.preventDefault()

    try {
      const result = await FetchReservationList()
      setReservationData(result)
      setShowButton(false)
    } catch (error) {
      showSwal('회원 정보 업데이트 중 오류가 발생했습니다.', 'error')
    }
  }

  useEffect(() => {
    handleReservationList()
  }, [])

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        예약정보
      </Typography>

      {reservationData && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>주문번호</TableCell>
              <TableCell>체크인</TableCell>
              <TableCell>체크아웃</TableCell>
              <TableCell>어른</TableCell>
              <TableCell>어린이</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservationData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.roomBookingId}</TableCell>
                <TableCell>{item.checkInDate}</TableCell>
                <TableCell>{item.checkOutDate}</TableCell>
                <TableCell>{item.adults}</TableCell>
                <TableCell>{item.children}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {showButton && (
        <Button
          className="w-full bg-blue-600 text-white my-[1rem] rounded-md p-2 w-1/5"
          onClick={handleReservationList}
        >
          예약확인
        </Button>
      )}
    </Box>
  )
}

export default Reservation
