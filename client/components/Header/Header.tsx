import Link from 'next/link';
import { useRouter } from 'next/router';
import { routerEnum } from '../../utils/router';
import styles from './Header.module.css'
import imgLogo from '../../public/assets/layout/logo.png'
import Image from 'next/image';
const Header = () => {

    const router = useRouter()
    const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname

    let left = (
        <div className={styles.left}>
            <Link href={routerEnum.HOME}>
                <a>
                    <Image src={imgLogo} />
                </a>
            </Link>

        </div>
    )

    let right = (
        <div className={styles.right}>
            <Link href={routerEnum.HOME}>
                <a data-active={isActive(routerEnum.HOME)}>
                    Главная
                </a>
            </Link>
            <Link href={routerEnum.DOCUMENTATION}>
                <a data-active={isActive(routerEnum.DOCUMENTATION)}>
                    Документация
                </a>
            </Link>
        </div>
    )

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {left}
                {right}
            </nav>
        </header>
    );
}

export default Header;