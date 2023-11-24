import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import { Box, ListItem } from '@mui/material'
import Typography from '@mui/material/Typography'

function MyHeader() {
  const [open, setOpen] = React.useState(false)
  const [quantityRoom, setQuantityRoom] = useState(1)
  const [quantityAdult, setQuantityAdult] = useState(1)
  const [quantityChild, setQuantityChild] = useState(0)
  // 객실
  const handleRoomClick = () => {
    setOpen(!open)
  }

  const decreaseQuantityRoom = () => {
    if (quantityRoom > 1) {
      setQuantityRoom(quantityRoom - 1)
    }
  }

  const increaseQuantityRoom = () => {
    setQuantityRoom(quantityRoom + 1)
  }

  // 성인
  const decreaseQuantityAdult = () => {
    if (quantityAdult > 1) {
      setQuantityAdult(quantityAdult - 1)
    }
  }

  const increaseQuantityAdult = () => {
    setQuantityAdult(quantityAdult + 1)
  }

  // 어린이
  const decreaseQuantityChild = () => {
    if (quantityChild > 0) {
      setQuantityChild(quantityChild - 1)
    }
  }

  const increaseQuantityChild = () => {
    setQuantityChild(quantityChild + 1)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgColor: 'bg-gray-100' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          객실당 인원 수
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleRoomClick}>
        <ListItemText
          primary={`객실 ${quantityRoom}개, 성인 ${quantityAdult}명, 어린이 ${quantityChild}명`}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className="pl-4">
            <ListItemText primary="객실" />
            <Button onClick={decreaseQuantityRoom}>-</Button>
            <Typography>{quantityRoom}</Typography>
            <Button onClick={increaseQuantityRoom}>+</Button>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem className="pl-4">
            <ListItemText primary="성인" />
            <Button onClick={decreaseQuantityAdult}>-</Button>
            <Typography>{quantityAdult}</Typography>
            <Button onClick={increaseQuantityAdult}>+</Button>
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem className="pl-4">
            <ListItemText primary="어린이" />
            <Button onClick={decreaseQuantityChild}>-</Button>
            <Typography>{quantityChild}</Typography>
            <Button onClick={increaseQuantityChild}>+</Button>
          </ListItem>
        </List>
        <Box className="flex justify-end mt-2">
          <button className="text-white bg-blue-600 text-base rounded-t rounded-b rounded-l transition duration-300 ease-in-out hover:bg-opacity-70 p-1">
            확인
          </button>
        </Box>
      </Collapse>
    </List>
  )
}

export default MyHeader
