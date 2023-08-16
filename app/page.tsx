// import Image from 'next/image'
import Image from 'next/image'
import styles from './page.module.css';
import Img from '../img/istockphoto-1130150680-612x612.jpg'

export default function Home() {

  return (
    <div className='wrapper'>
      <div className='home'>
        <Image className='blog__img' src={Img.src} width={Img.width} height={Img.height} alt="blog image" />
        blog developed with Next.js google auth
      </div>

    </div>

  )
}
 