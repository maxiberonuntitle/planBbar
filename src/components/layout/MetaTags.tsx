import { siteMetadata } from '../../data/siteData';

type MetaTagsProps = {
  title?: string;
  description?: string;
  path?: string;
};

export default function MetaTags({ title, description, path }: MetaTagsProps) {
  const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const pageDescription = description || siteMetadata.description;
  const pageUrl = path ? `${siteMetadata.url}${path}` : siteMetadata.url;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={siteMetadata.image} />
    </>
  );
}
