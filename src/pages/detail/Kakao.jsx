/* eslint-disable react/prop-types */
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React from 'react'
import { Box, Typography } from '@mui/material'

function Kakao({ lodgingData }) {
  return (
    <Box className='max-w-[1120px] mx-auto mb-5'>
      <Box className='border-b border-gray-300 pb-4 max-w-[1120px] mx-auto' />
      <Box className='container flex flex-col flex-grow mx-auto mt-5'>
        <Box className='flex flex-col items-center justify-center w-full'>
          <Box class='container mx-auto px-4 pb-2'>
            <Typography class='text-xl font-semibold text-gray-800'>
              숙소 위치
            </Typography>
          </Box>
          <Box className='w-full max-w-4xl'>
            <Map
              center={{
                lat: lodgingData.lodging.map.latitude,
                lng: lodgingData.lodging.map.longitude,
              }}
              style={{ width: '100%', height: '600px' }}
              level={3}
              className='rounded-lg shadow-lg'
            >
              <MapMarker
                position={{
                  lat: lodgingData.lodging.map.latitude,
                  lng: lodgingData.lodging.map.longitude,
                }}
              />
            </Map>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Kakao
