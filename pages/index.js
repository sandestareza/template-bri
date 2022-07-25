
import logo from '../public/img.jpg';
// import SiteTitle from '../components/SiteTitle' 
import SiteImage from '../components/SiteImage'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      {/* <SiteTitle title="Nasabah BRI"/> */}
      <div className='container-flex'>
        <SiteImage logo={logo} type="home"/>      
      </div>
      <button className='btn'>
        <Link href="/login">
          <a>
            Punya Akun
          </a>
        </Link>
      </button>
      <p className='text text-biru'>
        Belum punya Akun
      </p>
    </div>
  )
}
