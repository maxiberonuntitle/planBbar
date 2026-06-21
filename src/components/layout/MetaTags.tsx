import { siteMetadata } from '../../data/siteData';

type MetaTagsProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string;
};

export default function MetaTags({ title, description, path, keywords }: MetaTagsProps) {
  const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const pageDescription = description || siteMetadata.description;
  const pageKeywords = keywords || siteMetadata.keywords;
  const pageUrl = path ? `${siteMetadata.url}${path}` : siteMetadata.url;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="geo.region" content="ES-CT" />
      <meta name="geo.placename" content="Lloret de Mar" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="og:site_name" content={siteMetadata.businessName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={siteMetadata.image} />
    </>
  );
}
