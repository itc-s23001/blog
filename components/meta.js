import Head from 'next/head'
import { useRouter } from 'next/router'
import { siteMeta } from 'lib/constants'
import siteImg from 'images/ogp.jpg'

export default function Meta ({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH
}) {
  const {
    siteTitle,
    siteDesc,
    siteUrl
    // Add other properties as needed
  } = siteMeta

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc = pageDesc ?? siteDesc

  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`

  const img = pageImg || siteImg.src
  const imgW = pageImgW || siteImg.width
  const imgH = pageImgH || siteImg.height
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />

      <meta name='description' content={desc} />
      <meta property='og:description' content={desc} />

      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={imgW} />
      <meta property='og:image:height' content={imgH} />

      {/* Add other meta tags as needed */}
    </Head>
  )
}
