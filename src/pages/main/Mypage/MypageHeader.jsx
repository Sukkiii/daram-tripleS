import { Box } from '@mui/material'
import HeaderLogo from '../Header/HeaderLogo'
import FunctionOptions from '../Header/FunctionOptions'
import NavigationBar from '../Header/NavigationBar'

function MypageHeader() {
  return (
    <Box className='main-hd-container relative bg-blue-700 h-[3rem] pb-20'>
      <Box className='flex px-8 main-hd-flex-icon'>
        <HeaderLogo />
        <Box className='flex items-center ml-4'>
          <NavigationBar />
        </Box>
        <FunctionOptions />
      </Box>
    </Box>
  )
}

export default MypageHeader
