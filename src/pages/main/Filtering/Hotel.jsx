import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { Box, Button } from '@mui/material'
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
    <Box className='flex w-full'>
      <Box className='w-full h-fit'>
        <Travel
          filterLocationId={(locationId) =>
            setSearchData((_) => ({ ..._, locationId }))
          }
        />
      </Box>

      <Box className='w-full h-fit'>
        <CheckInOut
          filterCheckInOutDate={(type, date) =>
            setSearchData((_) => ({ ..._, [type]: date }))
          }
        />
      </Box>

      <Box className='flex w-full m-auto mx-2 border rounded h-14 mt-9'>
        <RoomCount
          filterGuestChange={(type, value) =>
            setSearchData((_) => ({ ..._, [type]: value }))
          }
        />
      </Box>

      <Box className='flex items-center justify-center m-auto mt-9'>
        <Button variant='contained' className='h-14' onClick={handleSearch}>
          <IoSearch className='text-xl' />
        </Button>
      </Box>
    </Box>
  )
}

export default Hotel
