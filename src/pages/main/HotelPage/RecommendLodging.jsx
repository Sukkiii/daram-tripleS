import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import RecommendTab from './RecommendTab'
import RecommendLodgingList from './RecommendLodgingList'
import { fetchData } from '../../../fetch/search'

function RecommendLodging() {
  const [selectedLocale, setSelectedLocale] = useState('서울')
  const [lodgingData, setLodgingData] = useState([])
  const subject = 'lodging'

  useEffect(() => {
    fetchData(selectedLocale, 1, 10, subject, 'rating')
      .then((data) => {
        setLodgingData(data)
      })
      .catch((error) => console.error('Error fetching lodging data:', error))
  }, [selectedLocale])

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale)
  }
  return (
    <Box className="recommend-modules py-8 overflow-hidden mb-8">
      <Typography
        sx={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#0f294d',
          lineHeight: '34px',
          textAlign: 'left',
        }}
      >
        대한민국 국내 호텔 추천
      </Typography>
      <Box className="recommend-module-things">
        <RecommendTab selectedLocale={handleLocaleChange} subject={subject} />
        <RecommendLodgingList
          selectedLocale={selectedLocale}
          data={lodgingData}
        />
      </Box>
    </Box>
  )
}

export default RecommendLodging
