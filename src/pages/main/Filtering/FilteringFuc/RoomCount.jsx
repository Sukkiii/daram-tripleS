import { useState, useEffect } from 'react'
import {
  Button,
  Popover,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

function MyHeader({ filterGuestChange }) {
  const [open, setOpen] = useState(false)
  const [quantityRoom, setQuantityRoom] = useState(1)
  const [quantityAdult, setQuantityAdult] = useState(1)
  const [quantityChild, setQuantityChild] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleButtonClick = (event) => {
    setOpen(!open)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const decreaseQuantity = (setter) => {
    setter((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const increaseQuantity = (setter) => {
    setter((prev) => (prev < 100 ? prev + 1 : prev))
  }

  useEffect(() => {
    filterGuestChange('quantityAdult', quantityAdult)
    filterGuestChange('quantityChild', quantityChild)
  }, [quantityAdult, quantityChild, filterGuestChange])

  return (
    <>
      <Button className="flex m-auto w-full" onClick={handleButtonClick}>
        {`객실 ${quantityRoom}개, 성인 ${quantityAdult}명, 어린이 ${quantityChild}명`}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box>
          <List>
            <ListItem>
              <ListItemText
                primary={`객실 ${quantityRoom}개, 성인 ${quantityAdult}명, 어린이 ${quantityChild}명`}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="객실" />
              <Button onClick={() => decreaseQuantity(setQuantityRoom)}>
                -
              </Button>
              <Typography>{quantityRoom}</Typography>
              <Button onClick={() => increaseQuantity(setQuantityRoom)}>
                +
              </Button>
            </ListItem>
            <ListItem>
              <ListItemText primary="성인" />
              <Button onClick={() => decreaseQuantity(setQuantityAdult)}>
                -
              </Button>
              <Typography>{quantityAdult}</Typography>
              <Button onClick={() => increaseQuantity(setQuantityAdult)}>
                +
              </Button>
            </ListItem>
            <ListItem>
              <ListItemText primary="어린이" />
              <Button onClick={() => decreaseQuantity(setQuantityChild)}>
                -
              </Button>
              <Typography>{quantityChild}</Typography>
              <Button onClick={() => increaseQuantity(setQuantityChild)}>
                +
              </Button>
            </ListItem>
          </List>
          <Box className="flex justify-end mt-2">
            <Button
              onClick={handleClose}
              variant="contained"
              className="text-white bg-blue-600 text-base rounded-md transition duration-300 ease-in-out hover:bg-opacity-80 px-4 py-2"
            >
              확인
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  )
}

export default MyHeader
