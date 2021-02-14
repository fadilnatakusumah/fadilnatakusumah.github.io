import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { APP_NAME, DOMAIN } from '../config'
import { pageId } from '../lib/page'
import { Footer } from './Footer'
import { Header } from './Header'

export interface LayoutProps {
  pageId: pageId,
  title?: string,
  description?: string,
  children: JSX.Element | JSX.Element[]
}

export function Layout({
  pageId,
  title,
  description,
  children,
}: LayoutProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title || "Portfolio"} - Muhammad Fadhilah Mulyana</title>
        <meta name='description' content={description || 'Porfolio website for Muhammad Fadhilah Mulyana'} />
        <link rel="canonical" href={`${DOMAIN}/${router.pathname}`} />
        <meta property="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={`${DOMAIN}/${router.pathname}`} />
        <meta name="og:site_name" content={`${APP_NAME}`} />

        <meta name="og:image" content={`/assets/images/profile-photo.jpg`} />
        <meta name="og:image:secure_url" content={`/assets/images/profile-photo.jpg`} />
        <meta name="og:image:type" content={`image/jpg`} />
        <meta name="fb:350804358856723" content={`${APP_NAME}`} />
      </Head>
      <div>
        <Header pageId={pageId} />
        <main>{children}</main>
        <style jsx>{`
        div {
          min-height: 100vh;
        }
      `}</style>
      </div>
      <Footer />
    </>
  )
}

