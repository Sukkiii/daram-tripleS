import { Box } from '@mui/material'
import HeaderLogo from './Header/HeaderLogo'
import FunctionOptions from './Header/FunctionOptions'
import NavigationBar from './Header/NavigationBar'

function CommonHeader() {
  return (
    <Box className='relative py-1 bg-blue-600 main-hd-container'>
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
export default CommonHeader
