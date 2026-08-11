import siteData from "../data/siteData.json";
import { slugify } from "./slugify";

export default function jsonLDGenerator({ type, post, url }) {
  // Blog/article structured data
  if (type === "post") {
    return `<script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        headline: post.title,
        description: post.description,
        image: post.image.src,
        author: {
          "@type": "Person",
          name: post.author,
          url: `https://www.nextstepdigital.in/author/${slugify(post.author)}`,
        },
        datePublished: post.date,
      })}
    </script>`;
  }

  // NextStep Digital organization + website structured data
  return `<script type="application/ld+json">
    ${JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.nextstepdigital.in/#organization",
          name: "NextStep Digital",
          url: "https://www.nextstepdigital.in/",
          logo: "https://www.nextstepdigital.in/nextstep-logo.png",
          description: siteData.description,
          email: "nextstepdigital.india@gmail.com",
          telephone: "+91 73069 89358",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kochi",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.instagram.com/nextstepdigital.india/",
          ],
        },
        {
          "@type": "WebSite",
          "@id": "https://www.nextstepdigital.in/#website",
          name: "NextStep Digital",
          url: "https://www.nextstepdigital.in/",
          publisher: {
            "@id": "https://www.nextstepdigital.in/#organization",
          },
        },
      ],
    })}
  </script>`;
}