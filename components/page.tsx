import Header from 'components/header'
import PageTransition from 'components/pagetransition'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './page.module.scss'

type PageProps = {
  children: ReactNode
}

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'GitHub', url: 'https://github.com/giscafer', target: '_blank' },
  { name: 'Blog', url: '/blog' },
  { name: '语雀', url: 'https://www.yuque.com/chumingyaochenzao/uxwbme', target: '_blank' },
  { name: '知乎', url: 'https://www.zhihu.com/people/jian-zhi-vzhe-bian', target: '_blank' },
  // { name: 'bilibili', url: 'https://space.bilibili.com/1695997565?spm_id_from=333.1007.0.0', target: '_blank', type: 1 },
  // { name: '微信公众号', img: `${BASE_COS_URL}/blog/AAOE58C.png`, type: 2 },
]

const Page = ({ children }: PageProps): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <PageTransition>{children}</PageTransition>
    </main>
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {footerLinks.map(link => {
          if (link.target === '_blank') {
            return (
              <li key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            )
          }
          return (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className={styles.bottomInfo}>
        <p className={styles.copyright}>&copy; Snail Run {new Date().getFullYear()}</p>
      </div>
    </footer>
  </div>
)

export default Page
