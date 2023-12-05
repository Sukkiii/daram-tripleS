import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { IoSearch } from 'react-icons/io5'
import Travel from './FilteringFuc/Travel'
import CheckInOut from './FilteringFuc/CheckInOut'
import RoomCount from './FilteringFuc/RoomCount'

function Hotel() {
  const [searchData, setSearchData] = useState({
    locationId: null,
    checkInDate: null,
    checkOutDate: null,
    quantityAdult: null,
    quantityChild: null,
  })

  const navigateTo = useNavigate()

  const handleSearch = () => {
    const {
      locationId,
      checkInDate,
      checkOutDate,
      quantityAdult,
      quantityChild,
    } = searchData

    const modifyCheckInDate = dayjs(checkInDate).format('YYYY-MM-DD')
    const modifyCheckOutDate = dayjs(checkOutDate).format('YYYY-MM-DD')

    const url = `/hotel/search?locationId=${locationId}&checkInDate=${modifyCheckInDate}&checkOutDate=${modifyCheckOutDate}&adults=${quantityAdult}&children=${quantityChild}&level=5&page=1&item=20&sort=rating`
    navigateTo(url)
  }
  return (
    <Box className="flex w-full">
      <Box className="w-2/6 h-fit">
        <Travel
          filterLocationId={(locationId) =>
            setSearchData((_) => ({ ..._, locationId }))
          }
        />
      </Box>

      <Box className="w-2/6 h-fit ml-[-75px] mr-1">
        <CheckInOut
          filterCheckInOutDate={(type, date) =>
            setSearchData((_) => ({ ..._, [type]: date }))
          }
        />
      </Box>

      <Box className="flex w-72 h-14 border rounded  m-auto mt-9 ml-[-10px] mr-2">
        <RoomCount
          filterGuestChange={(type, value) =>
            setSearchData((_) => ({ ..._, [type]: value }))
          }
        />
      </Box>

      <Box className="flex justify-center items-center w-auto mt-9 mr-24">
        <Button
          variant="contained"
          className="w-fit h-14"
          onClick={handleSearch}
        >
          <IoSearch className="text-xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Hotel
