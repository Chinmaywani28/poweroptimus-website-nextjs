import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.enviroptimus.com/sitemap-0.xml",
  },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
