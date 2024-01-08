/* eslint-disable react/prop-types */
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material'
import { FaRegClock } from 'react-icons/fa'

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function TourDetailCard({
  attractionName,
  attractionDescription,
  recommendTourTime,
}) {
  return (
    <Card className='flex flex-col w-full h-56 gap-3'>
      <CardContent>
        <Typography
          variant='h5'
          component='div'
          sx={{ marginBottom: '1rem', fontWeight: '600' }}
        >
          {attractionName}
        </Typography>
        <Typography variant='body1'>{attractionDescription}</Typography>
      </CardContent>
      {recommendTourTime ? (
        <CardActions>
          <Box className='flex gap-2 text-blue-700'>
            <FaRegClock className='mt-1' />
            <Typography>소요시간: {recommendTourTime}분 이상</Typography>
          </Box>
        </CardActions>
      ) : (
        ''
      )}
    </Card>
  )
}
