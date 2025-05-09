// components/SeoHead.jsx
import Head from 'next/head';

const SeoHead = ({ title, description, image, canonical, noIndex = false }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    {noIndex && <meta name="robots" content="noindex, nofollow" />}
  </Head>
);

export default SeoHead;
