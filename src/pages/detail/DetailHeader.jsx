import { Link } from 'react-dom'
import HeaderLogo from '../main/Header/HeaderLogo'

function DetailHeader() {
  return (
    <header className='flex items-center justify-between py-6 bg-blue-500'>
      <Link to='/' className='ml-4 text-xl font-bold text-white'>
        <HeaderLogo />
      </Link>
      <nav className='flex items-center'>
        <Link to='/wherever' className='mr-10 text-white'>
          어디든지
        </Link>
        <Link to='/whenever' className='mr-10 text-white'>
          언제든지
        </Link>
        <Link to='/a-week' className='mr-10 text-white'>
          일주일
        </Link>
        <Link to='/guests' className='text-white'>
          게스트 추가
        </Link>
      </nav>
      <Link to='/q' className='text-white'>
        Q&A
      </Link>
      <Link to='/host' className='text-white'>
        당신의 공간을 TripleS하세요
      </Link>
    </header>
  )
}

export default DetailHeader
