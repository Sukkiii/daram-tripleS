/* eslint-disable import/no-unresolved */
import React from 'react'
import Box from '@mui/material/Box'
import HeaderLogo from './HeaderLogo'
import HeaderSearchBox from './HeaderSearchBox'
import FunctionOptions from './FunctionOptions'
import NavigationBar from './NavigationBar'

function Header() {
  return (
    <Box className="main-hd-container bg-custom-bg relative w-screen h-96 bg-cover bg-no-repeat bg-center mb-[-50px]">
      <Box className="main-hd-and-navbar relative overflow-hidden px-8">
        <Box className="main-hd-inner max-x-9xl relative">
          <Box className="main-hd-flex-icon relative h-16 clear-both">
            <HeaderLogo />
            <HeaderSearchBox />
            <FunctionOptions />
          </Box>
          <NavigationBar />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
