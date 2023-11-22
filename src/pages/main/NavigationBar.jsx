/* eslint-disable import/no-unresolved */
import React from 'react'
import Box from '@mui/material/Box'
import { Link, Typography } from '@mui/material'
import dummyData from '../../assets/dummyData/dummyData'

const { navCategories } = dummyData

function NavigationBar() {
  return (
    <Box className="main-hd-navbar-row h-8">
      <Box className="main-hd-nav-con overflow-visible float-left">
        <ul className="main-hd-nav flex whitespace-nowrap flex-row">
          {navCategories.map((category) => (
            <li
              key={category.categoryCode}
              className="main-hd-nav-item inline-block float-none relative pr-8"
            >
              <Link
                underline="none"
                sx={{
                  display: 'inline-block',
                  color: 'white',
                  height: '2rem',
                  fontSize: '1rem',
                }}
                className="main-hd-nav-link relative pr-1 pb-1 after:block after:h-0.5 after:bg-white after:top-6 after:origin-right transition duration-150 ease-in-out after:scale-x-0"
                href="/{category.link}"
                title="{category.title}"
              >
                {category.title}
              </Link>
              {category.newCategory === 'true' && (
                <Typography
                  style={{ fontSize: '0.75rem ' }}
                  className="new-category-add inline-block bg-red-500 text-white px-1 mt-1 relative rounded-sm h-5 bottom-0.5"
                >
                  신규
                </Typography>
              )}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default NavigationBar
