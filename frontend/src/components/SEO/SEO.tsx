import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title = "About Common Scents HQ - Fragrance Review Platform",
  description = "Learn about Common Scents HQ's mission to make fragrance accessible through honest reviews, AI insights, and educational guides.",
  canonical = "https://commonscentshq.com/about",
  image = "https://commonscentshq.com/og-about.jpg",
  type = "website",
  structuredData,
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Common Scents HQ",
    description: description,
    url: canonical,
    publisher: {
      "@type": "Organization",
      name: "Common Scents HQ",
      logo: {
        "@type": "ImageObject",
        url: "https://commonscentshq.com/logo.png",
      },
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};
