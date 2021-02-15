import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'

import { APP_NAME, DOMAIN } from '../config'
import { pageId } from '../lib/page'
import { Footer } from './Footer'
import { Header } from './Header'

const AnimateVariants = {
  hidden: {
    opacity: 0,
    // x: '-100vw',
  },
  visible: {
    opacity: 1,
    // x: '0',
    transition: {
      staggerChildren: 0.2,
      duration: 2,
      type: 'spring',
      when: "beforeChildren",
    }
  },
  exit: {
    // x: "-100vh",
    opacity: 0,
    transition: { ease: 'easeInOut' }
  }
}
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

        <meta name="og:image" content={`${DOMAIN}/assets/images/profile-photo.jpg`} />
        <meta name="og:image:secure_url" content={`${DOMAIN}/assets/images/profile-photo.jpg`} />
        <meta name="og:image:type" content={`image/jpg`} />
        <meta name="fb:350804358856723" content={`${APP_NAME}`} />
      </Head>
      <div>
        <Header pageId={pageId} />
        <main>
          <motion.div
            variants={AnimateVariants}
            animate="visible"
            initial="hidden"
            exit="exit">
            {children}
          </motion.div>
        </main>
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

