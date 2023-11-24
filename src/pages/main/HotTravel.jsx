/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import HotTab from './HotTab'
import HotTravelList from './HotTravelList'

function HotTravel({ travelData }) {
  const [selectedLocale, setSelectedLocale] = useState('서울')

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale)
  }

  return (
    <Box className="recommend-modules p-8 rounded-md overflow-hidden bg-blue-50 mb-8">
      <Typography
        sx={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#0f294d',
          lineHeight: '34px',
          textAlign: 'left',
        }}
      >
        추천 여행지
      </Typography>
      <Box className="recommend-module-things">
        <HotTab data={travelData} selectedLocale={handleLocaleChange} />
        <HotTravelList selectedLocale={selectedLocale} data={travelData} />
      </Box>
    </Box>
  )
}

export default HotTravel
