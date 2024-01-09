import { Box } from '@mui/material'
import HeaderLogo from './Header/HeaderLogo'
import HeaderSearchBox from './Header/HeaderSearchBox'
import FunctionOptions from './Header/FunctionOptions'
import NavigationBar from './Header/NavigationBar'
import Filtering from './Filtering/Filtering'
import LogoWriting from './LogoWriting'

function MainHeader() {
  return (
    <Box
      sx={{ backgroundPositionY: '-15rem' }}
      className='relative pb-20 bg-cover main-hd-container bg-custom-bg'
    >
      <Box className='flow-root clear-both px-8 main-hd-flex-icon'>
        <HeaderLogo />
        <HeaderSearchBox />
        <FunctionOptions />
        <Box className='flex items-center float-left w-full overflow-visible main-hd-navbar-row'>
          <NavigationBar />
        </Box>
      </Box>
      <LogoWriting />
      <Filtering />
    </Box>
  )
}
export default MainHeader
