import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import imgCity from '../public/assets/index/city.jpg'
import imgWA from '../public/assets/index/whatsapp.svg'
import imgTG from '../public/assets/index/telegram.svg'
import imgIG from '../public/assets/index/instagram.svg'



const Home: NextPage = () => {

    let heroLeft = (
        <div className={styles.left}>
            <h1>СВЯЖИТЕСЬ С НАМИ</h1>
            <div className={styles.left__links}>
                <a><Image layout='fill' src={imgIG} /></a>
                <a><Image layout='fill' src={imgWA} /></a>
                <a><Image layout='fill' src={imgTG} /></a>
            </div>
            <hr className={styles.left__hr} />
            <h2>+7 (777) 777 77 77</h2>
            <h2>+1 (111) 111 11 11</h2>
        </div>
    )

    let heroRight = (
        <div className={styles.right}>
            <div className={styles.right__img_container}>
                <Image priority={true} layout='fill' objectFit='cover' className={styles.right__img_container__img} src={imgCity} />
            </div>
            <p className={styles.right__p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )

    return (
        <Layout title="Главная страница - АГИС">
            <main>
                <div className={styles.hero}>
                    {heroLeft}
                    {heroRight}
                </div>
            </main>
        </Layout>
    )
}

export default Home
