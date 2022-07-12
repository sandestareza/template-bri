
import logo from '../public/img.jpg';
import SiteTitle from '../components/SiteTitle' 
import SiteImage from '../components/SiteImage'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <SiteTitle title="Nasabah BRI"/>
      <div className='container-flex'>
        <SiteImage logo={logo}/>      
      </div>
      <button className='btn'>
        <Link href="/login">
          <a>
            𝐏𝐮𝐧𝐲𝐚 𝐀𝐤𝐮𝐧
          </a>
        </Link>
      </button>
      <p className='text text-biru'>
        𝐁𝐞𝐥𝐮𝐦 𝐏𝐮𝐧𝐲𝐚 𝐀𝐤𝐮𝐧
      </p>
    </div>
  )
}
