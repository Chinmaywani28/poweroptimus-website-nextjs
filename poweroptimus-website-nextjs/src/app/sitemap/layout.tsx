import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "",
  },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
