import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import PriceCheckIcon from '@mui/icons-material/PriceCheck'
import KingBedIcon from '@mui/icons-material/KingBed'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import HotTab from './HotTab'
import HotLodgingList from './HotLodgingList'
import { fetchData } from '../../../fetch/search'

function HotLodging() {
  const [selectedLocale, setSelectedLocale] = useState('서울')
  const [lodgingData, setLodgingData] = useState([])
  const subject = 'lodging'

  useEffect(() => {
    fetchData(selectedLocale, 1, 3, subject, 'rating')
      .then((data) => {
        setLodgingData(data)
      })
      .catch((error) => console.error('Error fetching lodging data:', error))
  }, [selectedLocale])

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale)
  }

  return (
    <Box className='bg-[url("src/assets/img/pink.jpeg")] bg-cover rounded-3xl mb-8'>
      <Box className='bg-white bg-opacity-40 rounded-3xl'>
        <Box className='p-8 overflow-hidden bg-opacity-50 recommend-modules rounded-3xl bg-pink-50'>
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
          <Box className='relative flex mt-4 text-center recommend-module-warranty'>
            <Box className='flex mr-4 leading-5 recommend-module-warranty-item '>
              <PriceCheckIcon className='mr-0.5 text-blue-800' />
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
            <Box className='flex mr-4 leading-5 recommend-module-warranty-item '>
              <BookOnlineIcon className='mr-0.5 text-blue-800' />
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
            <Box className='flex mr-4 leading-5 recommend-module-warranty-item '>
              <KingBedIcon className='mr-0.5 text-blue-800' />
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
          <Box className='recommend-module-things'>
            <HotTab selectedLocale={handleLocaleChange} subject={subject} />
            <HotLodgingList
              selectedLocale={selectedLocale}
              data={lodgingData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HotLodging
