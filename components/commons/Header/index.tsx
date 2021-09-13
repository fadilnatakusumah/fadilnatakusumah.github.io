import Head from "next/head";
import { APP_NAME, DOMAIN } from "../../../config";

export function Header() {
  const title = "Portfolio - Muhammad Fadhilah Mulyana";
  const description =
    "Hi! My name is Fadil, and I'm a software engineer that always eager to learn in hope to solve everyday problems by using code.";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="portfolio, fadilnatakusumah, react, frontend, articles, github, website, code"/>
      <link rel="canonical" href={`${DOMAIN}`} />
      <meta property="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${DOMAIN}`} />
      <meta name="og:site_name" content={`${APP_NAME}`} />
      <meta name="og:site_name" content={`${APP_NAME}`} /> 
      <meta name="og:keywords" content="portfolio, fadilnatakusumah, react, frontend, articles, github, website, code"/>

      <meta
        name="og:image"
        itemProp="image"
        content={`${DOMAIN}/assets/images/profile-photo.jpg`}
      />
      <meta
        name="og:image:secure_url"
        content={`${DOMAIN}/assets/images/profile-photo.jpg`}
      />
      <meta name="og:image:type" content={`image/jpg`} />
      {/* <meta name="fb:350804358856723" content={`${APP_NAME}`} /> */}
    </Head>
  );
}
