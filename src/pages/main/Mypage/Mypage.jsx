import { Box } from '@mui/material'
import MypageBody from './MypageBody'
import MypageHeader from './MypageHeader'
import HomeSideBar from '../HomeBody/HomeSideBar'
import Footer from '../Footer/Footer'

function MyPage() {
  return (
    <Box className='w-full'>
      <MypageHeader />
      <HomeSideBar />
      <MypageBody />
      <Footer container='true' />
    </Box>
  )
}

export default MyPage
