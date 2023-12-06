import { Box } from '@mui/material'
import HotelSearchList from './HotelSearchList'
import HotelSearchCondition from './HotelSearchCondition'

function HotelBody({ searchResults }) {
  return (
    <Box className="home-body-container w-full m-0 bg-white inline-block min-h-max relative pt-20 top-[-4rem] rounded-t-lg overflow-visible">
      <Box className="recommend-modules-wrapper relative m-auto flex w-4/5 gap-5">
        <HotelSearchCondition />
        <HotelSearchList searchResults={searchResults} />
      </Box>
    </Box>
  )
}

export default HotelBody
