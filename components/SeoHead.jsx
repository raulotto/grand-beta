// components/SeoHead.jsx
import Head from 'next/head';

const SeoHead = ({ title, description, image, canonical }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default SeoHead;
