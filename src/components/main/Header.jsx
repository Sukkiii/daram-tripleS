/* eslint-disable import/no-unresolved */
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import navCategories from '../../assets/dummyData/dummyData'

function Header() {
  return (
    <div className="main-hd-container bg-custom-bg relative w-screen h-96 bg-cover bg-no-repeat bg-center">
      <div className="main-hd-and-navbar relative overflow-hidden px-8">
        <div className="main-hd-inner max-x-9xl relative">
          <div className="main-hd-flex-icon relative h-16 clear-both">
            <div className="main-hd-logo-icon px-2 py-4 float-left">
              <a className="text-white w-8 h-5 text-xl font-black" href="/">
                TripleS
              </a>
            </div>
            <div className="main-hd-search-con max-w-xs relative float-left top-4 h-8 ml-2">
              <div className="tripSearchBox-main relative bg-white rounded-md w-full text-base flex justify-end">
                <div className="tripSearchBox-content border-solid border-2 border-white ml-2 pr-3 flex">
                  <input
                    className="tripSearchBox-input overflow-clip whitespace-nowrap text-sm p-1 left-2 w-48"
                    placeholder="여행지, 명소, 호텔 등으로 검색"
                  />
                </div>
                <div className="tripSearchBox-btn cursor-pointer absolute bg-blue-700 rounded-md border-white border-2 items-end flex">
                  <SearchIcon className="stroke-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-hd-navbar-row h-8">
            <div className="main-hd-nav-con overflow-visible float-left">
              <ul className="main-hd-nav flex whitespace-nowrap">
                {navCategories.map((category) => (
                  <li
                    key={category.categoryCode}
                    className="main-hd-nav-item inline-block float-none relative pr-8"
                  >
                    <a
                      className="main-hd-nav-link text-white relative text-base inline-block h-5 pr-1 pb-1"
                      href="/{category.link}"
                      title="{category.title}"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
