/* eslint-disable import/no-unresolved */
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Input, Typography } from '@mui/material'
import { ClickAwayListener } from '@mui/base'

function HeaderSearchBox() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((_) => !_)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <Box className="main-hd-search-con w-96 max-w-xs relative float-left top-4 h-9 ml-2 pr-8 bg-white rounded-md flex">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box className="tripSearchBox-content border-solid border pr-8 flex rounded-md w-full">
          <Input
            onClick={handleClick}
            className="tripSearchBox-input h-8 px-2 pt-1 w-full ml-0.5"
            placeholder="여행지, 명소, 호텔 등으로 검색"
          />
          {open && (
            <Box className="tripSearchBox-layer w-80 z-10 absolute overflow-auto top-8 mt-0.5 max-w-lg bg-white border border-solid border-slate-300 shadow-slate-400">
              <Typography className="tripSearchBox-inittitle block bg-slate-200 text-xs leading-8 text-slate-400 px-4">
                인기 여행지
              </Typography>
              <Box className="tripSearchBox-layer-every">
                <Box>
                  <Box className="tripSearchBox-layer-word" />
                </Box>
              </Box>
            </Box>
          )}
          <Box className="tripSearchBox-btn top-0 w-8 absolute right-0 cursor-pointer p-0.5 rounded-sm overflow-hidden box-border m-0 h-full">
            <Box className="tripSearchBox-icon-wrapper bg-blue-600 rounded box-border m-0 p-0 h-full flex justify-center content-center flex-wrap">
              <SearchIcon className="text-white" />
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
    </Box>
  )
}

export default HeaderSearchBox
