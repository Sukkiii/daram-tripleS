import { useState } from 'react'
import { Box, Stack, Button } from '@mui/material'

function RecommendTab({ selectedLocale, subject }) {
  const HotLocales = {
    lodging: ['서울', '제주', '부산'],
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

export default RecommendTab
