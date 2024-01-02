import MainHeader from './main/MainHeader'
import Footer from './main/Footer/Footer'
import HomeBody from './main/HomeBody/HomeBody'
import HomeSideBar from './main/HomeBody/HomeSideBar'

function MainPage() {
  return (
    <>
      <MainHeader />
      <HomeSideBar />
      <HomeBody />
      <Footer container="true" />
    </>
  )
}

export default MainPage
