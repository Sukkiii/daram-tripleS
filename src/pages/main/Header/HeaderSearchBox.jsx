import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
  Box,
  Input,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { ClickAwayListener } from '@mui/base'
import dummyData from '../../../assets/dummyData/dummyData'

const { hotTripLocation } = dummyData

function HeaderSearchBox() {
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleClick = () => {
    setOpen((_) => !_)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const handleSearchButton = () => {
    navigate(`/searchList/${keyword}`)
  }

  const handleEnterPress = (_) => {
    if (_.key === 'Enter') {
      navigate(`/searchList/${keyword}`)
    }
  }

  const handleSearch = (_) => {
    navigate(`/searchList/${_}`)
  }

  const handleInputChange = (_) => {
    setKeyword(_.target.value)
  }

  return (
    <Box className="main-hd-search-con w-96 max-w-xs relative float-left top-4 ml-2 pr-8 bg-white rounded-md flex">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box className="tripSearchBox-content pr-8 flex rounded-md w-full ml-1">
          <Input
            onClick={handleClick}
            className="tripSearchBox-input px-2 pt-1 w-full ml-0.5"
            placeholder="여행지, 명소, 호텔 등으로 검색"
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
          />
          {open && (
            <Box className="tripSearchBox-layer w-80 absolute top-8 mt-1 z-10 bg-white border border-solid border-slate-300">
              <Box>
                <Typography className="block bg-slate-200 text-slate-400 px-4 py-2">
                  인기 여행지
                </Typography>
              </Box>
              <List sx={{ padding: '0' }}>
                {hotTripLocation.map((location) => (
                  <ListItemButton
                    key={location.id}
                    className="gap-3"
                    onClick={() => handleSearch(location.locale)}
                  >
                    <LocationOnIcon />
                    <ListItemText
                      primary={location.locale}
                      sx={{ flex: 'none' }}
                    />
                    <ListItemText
                      primary={location.detailLocale}
                      sx={{ color: '#8592a6' }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          )}
          <Box
            className="tripSearchBox-btn top-0 w-8 absolute right-0 cursor-pointer p-0.5 rounded-sm overflow-hidden box-border m-0 h-full"
            onClick={handleSearchButton}
          >
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
