import Head from 'next/head'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Button from 'components/button'

const Custom404 = (): JSX.Element => (
  <Page>
    <Head>
      <title>存档</title>
    </Head>
    <PageHeader title="存档功能" description="存档功能在coding…">
      <Button href="/blog">返回博客</Button>
    </PageHeader>
  </Page>
)

export default Custom404
