import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
}: SEOHeadProps) => {
  const baseUrl = "https://porobotics.in";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="P&O ROBOTICS" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEOHead;
