import { useEffect, useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import HeaderLogo from '../Header/HeaderLogo'
import FunctionOptions from '../Header/FunctionOptions'
import NavigationBar from '../Header/NavigationBar'
import Hotel from '../Filtering/Hotel'

function HotelPageHeader() {
  const [scrolled, setScrolled] = useState(false)
  const scrollTarget = useRef(null)

  useEffect(() => {
    const handleFiltering = () => {
      const isFixFiltering = window.scrollY > scrollTarget.current.offsetTop
      setScrolled(isFixFiltering)
    }

    window.addEventListener('scroll', handleFiltering)

    return () => {
      window.removeEventListener('scroll', handleFiltering)
    }
  }, [])

  return (
    <Box className="main-hd-container relative bg-hotel-bg bg-cover h-[30rem] pb-20">
      <Box className="flex px-8 main-hd-flex-icon">
        <HeaderLogo />
        <Box className="flex items-center ml-4">
          <NavigationBar />
        </Box>
        <FunctionOptions />
      </Box>
      <Box className="flex flex-col w-3/4 mx-auto my-12">
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
          ref={scrollTarget}
          className={`p-5 bg-white ${
            scrolled
              ? 'fixed top-0 right-0 left-0 rounded-none z-[9999] h-30 shadow-sm px-[10%]'
              : 'h-2/4 p-5 rounded-xl'
          }`}
        >
          <Hotel />
        </Box>
      </Box>
    </Box>
  )
}

export default HotelPageHeader
