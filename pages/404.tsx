import Head from 'next/head'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Button from 'components/button'

const Custom404 = (): JSX.Element => (
  <Page>
    <Head>
      <title>404 | zhaoguilv.com</title>
    </Head>
    <PageHeader title="404 - 页面未找到" description="本页面可能已经不在了，或者刷新重试…">
      <Button href="/blog">返回博客</Button>
    </PageHeader>
  </Page>
)

export default Custom404
