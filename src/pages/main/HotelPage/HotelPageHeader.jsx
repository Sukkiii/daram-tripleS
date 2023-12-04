import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import HeaderLogo from '../Header/HeaderLogo'
import FunctionOptions from '../Header/FunctionOptions'
import NavigationBar from '../Header/NavigationBar'
import Hotel from '../Filtering/Hotel'

function HotelPageHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleFiltering = () => {
      const isFixFiltering = window.scrollY > 170
      setScrolled(isFixFiltering)
    }

    window.addEventListener('scroll', handleFiltering)

    return () => {
      window.removeEventListener('scroll', handleFiltering)
    }
  }, [])

  return (
    <Box className="main-hd-container relative bg-hotel-bg bg-cover h-[28rem] pb-20">
      <Box className="main-hd-flex-icon px-8 flex">
        <HeaderLogo />
        <Box className="flex items-center ml-4">
          <NavigationBar />
        </Box>
        <FunctionOptions />
      </Box>
      <Box className="flex flex-col w-4/5 mx-auto my-12">
        <Box className="flex">
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold' }}
            className="mx-auto my-0 text-white"
          >
            호텔
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold' }}
            className="text-yellow-300"
          >
            .
          </Typography>
        </Box>
        <Box
          className={`p-5 bg-white rounded-xl ${
            scrolled
              ? 'fixed top-0 right-0 left-0 rounded-none z-[9999] h-30 shadow-sm'
              : 'w-full h-2/4 p-5'
          }`}
        >
          <Hotel />
        </Box>
      </Box>
    </Box>
  )
}

export default HotelPageHeader
