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
    <Box className='relative flex float-left max-w-xs pr-8 ml-2 bg-white rounded-md main-hd-search-con w-96 top-4'>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box className='flex w-full pr-8 ml-1 rounded-md tripSearchBox-content'>
          <Input
            onClick={handleClick}
            className='tripSearchBox-input px-2 pt-1 w-full ml-0.5'
            placeholder='여행지, 명소, 호텔 등으로 검색'
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
          />
          {open && (
            <Box className='absolute z-10 mt-1 bg-white border border-solid tripSearchBox-layer w-80 top-8 border-slate-300'>
              <Box>
                <Typography className='block px-4 py-2 bg-slate-200 text-slate-400'>
                  인기 여행지
                </Typography>
              </Box>
              <List sx={{ padding: '0' }}>
                {hotTripLocation.map((location) => (
                  <ListItemButton
                    key={location.id}
                    className='gap-3'
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
            className='tripSearchBox-btn top-0 w-8 absolute right-0 cursor-pointer p-0.5 rounded-sm overflow-hidden box-border m-0 h-full'
            onClick={handleSearchButton}
          >
            <Box className='box-border flex flex-wrap content-center justify-center h-full p-0 m-0 bg-blue-600 rounded tripSearchBox-icon-wrapper'>
              <SearchIcon className='text-white' />
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
    </Box>
  )
}

export default HeaderSearchBox
