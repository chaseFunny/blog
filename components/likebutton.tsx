import { useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import Button from 'components/button'
import { safeLocalStorage as localStorage } from 'lib/localstorage'

// import useSWR, { mutate } from 'swr'
// import fetcher from 'lib/fetcher'

import styles from './likebutton.module.scss'

const LikeButton = ({ slug }: { slug: string }): JSX.Element | null => {
  const [mounted, setMounted] = useState(false)
  const [likes, setLikes] = useState('0')
  // const { data } = useSWR(`/api/likes?slug=${slug}`, fetcher)
  // const likes = data?.likes
  const liked = localStorage.getItem(slug) === 'true'

  useEffect(() => setMounted(true), [])

  const onLike = () => {
    // 本地记录了喜欢过本文章
    localStorage.setItem(slug, 'true')
    // 请求更新like
    // mutate(`/api/likes?slug=${slug}`, { ...data, likes: likes + 1 }, false)
    // await fetch(`/api/likes?slug=${slug}`, { method: 'POST' })
    setLikes('1')
  }
  if (!mounted) return null
  return (
    <Button disabled={liked} onClick={onLike} type="button" variant="like">
      <Heart className={liked ? styles.icon : ''} />
      <div>{likes === '0' ? '--' : likes}</div>
    </Button>
  )
}

export default LikeButton
