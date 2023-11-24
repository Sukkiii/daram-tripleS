/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { Box, Stack, Button } from '@mui/material'

function HotTab({ data, selectedLocale }) {
  const [selectedTab, setSelectedTab] = useState('서울')
  const localesArray = Array.from(new Set(data.map((item) => item.locale)))

  const handleLocaleChange = (locale) => {
    setSelectedTab(locale)
    selectedLocale(locale)
  }
  return (
    <Box className="recommend-tap-container mt-4">
      <Stack spacing={2} direction="row">
        {localesArray.map((locale) => (
          <Button
            key={locale}
            variant={selectedTab === locale ? 'contained' : 'outlined'}
            onClick={() => handleLocaleChange(locale)}
          >
            {locale}
          </Button>
        ))}
      </Stack>
    </Box>
  )
}

export default HotTab
