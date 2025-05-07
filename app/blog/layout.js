import { Metadata } from "next";

export const metadata = {
  title: {
    default: "Blog | Automatics",
    template: "%s | Automatics Blog",
  },
  description:
    "Stay informed with our latest insights, industry trends, and expert perspectives on technology, digital transformation, and business innovation.",
  keywords: [
    "Automatics",
    "blog",
    "digital transformation",
    "technology insights",
    "industry trends",
    "business innovation",
  ],
  openGraph: {
    title: "Blog | Automatics",
    description:
      "Stay informed with our latest insights, industry trends, and expert perspectives on technology, digital transformation, and business innovation.",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return <div className="w-full min-h-screen">{children}</div>;
}
