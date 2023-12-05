import { Box } from '@mui/material'
import HeaderLogo from './Header/HeaderLogo'
import FunctionOptions from './Header/FunctionOptions'
import NavigationBar from './Header/NavigationBar'

function CommonHeader() {
  return (
    <Box className="main-hd-container relative bg-blue-600 py-1">
      <Box className="main-hd-flex-icon px-8 flex">
        <HeaderLogo />
        <Box className="flex items-center ml-4">
          <NavigationBar />
        </Box>
        <FunctionOptions />
      </Box>
    </Box>
  )
}
export default CommonHeader
