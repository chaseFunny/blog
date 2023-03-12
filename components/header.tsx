import ThemeChanger from 'components/themechanger'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import avatar from 'public/logo.png'
import styles from './header.module.scss'

const links = [
  { name: 'Home', path: '/' },
  // { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog', target: '_' },
  { name: 'Archive', path: '/archive', target: '_' },
  // { name: 'Map', path: 'http://map.giscafer.com', target: '_blank' },
]

const Header = (): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname.split('/[')[0] // active paths on dynamic subpages
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={avatar} alt="Snail Run" layout="fixed" width="45" height="45" priority placeholder="blur" />
            </a>
          </Link>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, path, target }) => {
                if (target === '_blank') {
                  return (
                    <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                      <a href={path} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                    <Link href={path}>
                      <a>{name}</a>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </nav>
          <ThemeChanger />
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  )
}

export default Header
