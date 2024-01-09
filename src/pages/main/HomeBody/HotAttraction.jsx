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
    <Box className='bg-[url("src/assets/img/Sky.jpeg")] bg-cover rounded-3xl mb-8'>
      <Box className='bg-white bg-opacity-60 rounded-3xl'>
        <Box className='p-8 overflow-hidden bg-opacity-60 recommend-modules rounded-3xl bg-blue-50'>
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
          <Box className='recommend-module-things'>
            <HotTab selectedLocale={handleLocaleChange} subject={subject} />
            <HotAttractionList
              selectedLocale={selectedLocale}
              data={attractionData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HotAttraction
