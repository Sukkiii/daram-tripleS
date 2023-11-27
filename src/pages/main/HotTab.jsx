/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { Box, Stack, Button } from '@mui/material'

function HotTab({ selectedLocale, subject }) {
  const HotLocales = {
    lodging: ['서울', '제주', '서귀포', '부산', '인천', '속초', '강릉', '경주'],
    attraction: ['서울', '오사카', '도쿄', '부산', '후쿠오카', '제주'],
  }
  const [selectedTab, setSelectedTab] = useState('서울')

  const handleLocaleChange = (locale) => {
    setSelectedTab(locale)
    selectedLocale(locale)
  }
  return (
    <Box className="recommend-tap-container mt-4">
      <Stack spacing={2} direction="row">
        {HotLocales[subject].map((locale) => (
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
