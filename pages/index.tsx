import Page from 'components/page'
import PageHeader from 'components/pageheader'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import me from 'public/snailRun.jpg'
import styles from './index.module.scss'

export async function getStaticProps() {
  // https://github.com/vercel/next.js/discussions/12124
  return {
    props: {
      allPostsData: [],
    },
  }
}
const seoTitle = 'About Snail Run'
const beautySentence = [
  '“希望自己可以可以像蜗牛一样，虽然慢一点，但是一直保持前进”',
  '“只有行动才能带来行动力，只有乐趣才能带来行动的继续”',
  '“一个人可以走得更快，但一群人可以走得更远。”',
]
const linkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}
const Home = (): JSX.Element => (
  <Page>
    <NextSeo
      title={seoTitle}
      openGraph={{
        title: seoTitle,
        url: `http://www.zhaoguilv.fun/`,
        site_name: 'zhaoguilv.com',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
    <PageHeader title="你好，我叫 Snail Run ！" description="我是一名前端开发工程师, 这是我的个人网站" />
    <Image src={me} alt="Picture of me (Snail Run)" placeholder="blur" className={styles.image} priority />
    <div className={styles.text}>
      <p>一个练习了一年半的前端开发，希望自己可以成为一个优秀的前端开发工程师</p>
      <p className={styles.sentence}>{beautySentence[Math.floor(Math.random() * beautySentence.length)]}</p>
      <p>
        对我感兴趣 (可查看
        <a href="https://r.easycv.cn/SNO7tT" {...linkProps}>
          在线简历
        </a>
        )
      </p>
      <p>
        <ul>
          <li>
            <a href="https://github.com/chaseFunny" {...linkProps}>
              Github
            </a>
          </li>
          <li>
            <a href="https://www.yuque.com/chumingyaochenzao/uxwbme" {...linkProps}>
              语雀
            </a>
          </li>
        </ul>
      </p>
    </div>
  </Page>
)

export default Home
