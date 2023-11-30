import { Box } from '@mui/material'
import HeaderLogo from './Header/HeaderLogo'
import HeaderSearchBox from './Header/HeaderSearchBox'
import FunctionOptions from './Header/FunctionOptions'
import NavigationBar from './Header/NavigationBar'
import Filtering from './Filtering/Filtering'
import LogoWriting from './LogoWriting'

function MainHeader() {
  return (
    <Box className="main-hd-container relative bg-cover bg-custom-bg pb-20">
      <Box className="main-hd-flex-icon px-8 clear-both flow-root">
        <HeaderLogo />
        <HeaderSearchBox />
        <FunctionOptions />
        <Box className="main-hd-navbar-row w-full flex items-center overflow-visible float-left">
          <NavigationBar />
        </Box>
      </Box>
      <LogoWriting />
      <Filtering />
    </Box>
  )
}
export default MainHeader
