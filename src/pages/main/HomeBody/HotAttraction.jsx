/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import HotTab from './HotTab'
import HotAttractionList from './HotAttractionList'
import { fetchData } from '../../../fetch/search'

function HotAttraction() {
  const [selectedLocale, setSelectedLocale] = useState('서울')
  const [attractionData, setAttractionData] = useState([])
  const subject = 'attraction'

  useEffect(() => {
    fetchData(selectedLocale, 1, 3, subject, 'rating')
      .then((data) => {
        setAttractionData(data)
      })
      .catch((error) => console.error('Error fetching attraction data:', error))
  }, [selectedLocale])

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale)
  }

  return (
    <Box className="recommend-modules p-8 rounded-3xl overflow-hidden bg-blue-50 mb-8">
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
        <HotTab selectedLocale={handleLocaleChange} subject={subject} />
        <HotAttractionList
          selectedLocale={selectedLocale}
          data={attractionData}
        />
      </Box>
    </Box>
  )
}

export default HotAttraction
