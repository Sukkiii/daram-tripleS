import { Box, Button } from '@mui/material'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

function HomeSideBar() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScrollToBottom = () => {
    const windowH = window.innerHeight
    const documentH = document.body.scrollHeight

    window.scrollTo({ top: documentH - windowH, behavior: 'smooth' })
  }
  return (
    <Box className='fixed z-50 flex flex-col gap-2 right-12 bottom-24'>
      <Button
        variant='contained'
        style={{ height: '60px', backgroundColor: '#3264ff' }}
        onClick={handleScrollToTop}
      >
        <KeyboardArrowUpRoundedIcon />
      </Button>
      <Button
        variant='contained'
        style={{ height: '60px', backgroundColor: '#3264ff' }}
      >
        <AccountCircleIcon />
      </Button>
      <Button
        variant='contained'
        style={{ height: '60px', backgroundColor: '#3264ff' }}
        onClick={handleScrollToBottom}
      >
        <ExpandMoreRoundedIcon />
      </Button>
    </Box>
  )
}

export default HomeSideBar
