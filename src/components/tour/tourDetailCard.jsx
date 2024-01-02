import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material'
import { FaRegClock } from 'react-icons/fa'

const bull = (
  <Box
    component="span"
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
    <Card className="flex flex-col gap-3 w-96 h-52">
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: '1rem' }}>
          {attractionName}
        </Typography>
        <Typography variant="body2">{attractionDescription}</Typography>
      </CardContent>
      {recommendTourTime ? (
        <CardActions>
          <Button size="small">
            <FaRegClock />
            소요시간: {recommendTourTime}분 이상
          </Button>
        </CardActions>
      ) : (
        ''
      )}
    </Card>
  )
}
