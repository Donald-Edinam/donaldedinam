import { Metadata } from "next";
import {
  Hero,
  Positioning,
  SelectedWork,
  Writing,
  Snapshot,
  CallToAction
} from "@/components/home";

export const metadata: Metadata = {
  title: "Donald Edinam | Frontend Engineer",
  description: "A frontend engineer who treats interfaces as systems, not screens. Focused on design systems, architecture, and longevity.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Donald Edinam",
    "jobTitle": "Frontend Engineer",
    "url": "https://donaldedinam.me",
    "sameAs": [
      "https://github.com/donald-edinam",
      "https://www.linkedin.com/in/donald-edinam/",
      "https://www.x.com/0xLynuxx"
    ]
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Donald Edinam",
    "url": "https://donaldedinam.me"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <Hero />
      <Positioning />
      <SelectedWork />
      <Writing />
      <Snapshot />
      <CallToAction />
    </>
  );
}
