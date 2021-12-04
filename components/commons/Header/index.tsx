import Head from "next/head";
import { APP_NAME, DOMAIN } from "../../../config";

export function Header() {
  const title = "Portfolio - Muhammad Fadhilah Mulyana";
  const description =
    "Hi! My name is Fadil, and I'm a software engineer that always eager to learn in hope to solve everyday problems by using code.";
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Portfolio - Muhammad Fadhilah Mulyana</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${DOMAIN}/assets/images/profile-photo.jpg`}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={DOMAIN} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={`${DOMAIN}/assets/images/profile-photo.jpg`}
      />
    </Head>
  );
}
