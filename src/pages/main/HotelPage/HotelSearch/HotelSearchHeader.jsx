/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react'
import { Box } from '@mui/material'
import HeaderLogo from '../../Header/HeaderLogo'
import FunctionOptions from '../../Header/FunctionOptions'
import NavigationBar from '../../Header/NavigationBar'
import Hotel from '../../Filtering/Hotel'

function HotelSearchHeader({ searchData, setSearchData, handleSearch }) {
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
    <Box className="relative py-1 bg-blue-600 main-hd-container">
      <Box className="flex px-8 main-hd-flex-icon">
        <HeaderLogo />
        <Box className="flex items-center ml-4">
          <NavigationBar />
        </Box>
        <FunctionOptions />
      </Box>
      <Box className="flex flex-col w-3/4 mx-auto my-2">
        <Box
          ref={scrollTarget}
          className={`p-5 py-2 bg-white z-[9999] shadow-lg ${
            scrolled
              ? 'fixed top-0 right-0 left-0 rounded-none h-30 px-[10%]'
              : 'h-2/4 p-5 rounded-xl'
          }`}
        >
          <Hotel />
        </Box>
      </Box>
    </Box>
  )
}

export default HotelSearchHeader
