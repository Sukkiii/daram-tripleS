/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import PriceCheckIcon from '@mui/icons-material/PriceCheck'
import KingBedIcon from '@mui/icons-material/KingBed'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import HotTab from './HotTab'
import HotHotelList from './HotHotelList'

function HotHotel({ hotelData }) {
  const [selectedLocale, setSelectedLocale] = useState('서울')

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale)
  }

  return (
    <Box className="recommend-modules p-8 rounded-md overflow-hidden bg-red-50 mb-8">
      <Typography
        sx={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#0f294d',
          lineHeight: '34px',
          textAlign: 'left',
        }}
      >
        인기 호텔 및 숙소
      </Typography>
      <Box className="recommend-module-warranty mt-4 flex relative text-center">
        <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
          <PriceCheckIcon className="mr-0.5 text-blue-800" />
          <Typography
            sx={{
              borderBottom: 'dotted 1px darkgray',
              fontSize: '14px',
              lineHeight: '1.75',
            }}
          >
            트립닷컴 가격 보장제
          </Typography>
        </Box>
        <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
          <BookOnlineIcon className="mr-0.5 text-blue-800" />
          <Typography
            sx={{
              borderBottom: 'dotted 1px darkgray',
              fontSize: '14px',
              lineHeight: '1.75',
            }}
          >
            호텔 예약 보장제
          </Typography>
        </Box>
        <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
          <KingBedIcon className="mr-0.5 text-blue-800" />
          <Typography
            sx={{
              borderBottom: 'dotted 1px darkgray',
              fontSize: '14px',
              lineHeight: '1.75',
            }}
          >
            호텔 숙박 보장제
          </Typography>
        </Box>
      </Box>
      <Box className="recommend-module-things">
        <HotTab data={hotelData} selectedLocale={handleLocaleChange} />
        <HotHotelList selectedLocale={selectedLocale} data={hotelData} />
      </Box>
    </Box>
  )
}

export default HotHotel
