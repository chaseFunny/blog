import { DefaultSeo } from 'next-seo'

const config = {
  title: 'Snail Run - Frontend Developer & Student',
  description: '前端开发工程师，熟练使用React，Vue，两大主流框架，熟练使用并掌握JavaScript/TypeScript，对前端工程化，自动化有点点实践',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'http://www.zhaoguilv.fun',
    site_name: 'zhaoguilv | Snail Run',
    images: [
      {
        url: 'https://blog-1304565468.cos.ap-shanghai.myqcloud.com/blog/logo.png',
        alt: 'Snail Run',
      },
    ],
  },
  twitter: {
    handle: '@SnailRun',
    site: '@SnailRun',
    cardType: 'summary_large_image',
  },
}

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />
}

export default SEO
