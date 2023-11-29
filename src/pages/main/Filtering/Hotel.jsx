import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { IoSearch } from 'react-icons/io5'
import Travel from './FilteringFuc/Travel'
import CheckInOut from './FilteringFuc/CheckInOut'
import RoomCount from './FilteringFuc/RoomCount'

function Hotel() {
  return (
    <Box className="flex">
      <Box className="w-2/6 h-fit">
        <Travel />
      </Box>

      <Box className="w-2/6 h-fit ml-[-75px] mr-1">
        <CheckInOut />
      </Box>

      <Box className="flex w-72 h-14 border rounded  m-auto mt-9 ml-[-10px] mr-2">
        <RoomCount />
      </Box>

      <Box className="flex justify-center items-center w-auto mt-9 mr-24">
        <Button variant="contained" className="w-fit h-14">
          <IoSearch className="text-xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Hotel
