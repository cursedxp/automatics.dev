import { Metadata } from "next";

export const metadata = {
  title: {
    default: "Blog | ThoughtLink",
    template: "%s | ThoughtLink Blog",
  },
  description:
    "Stay informed with our latest insights, industry trends, and expert perspectives on technology, digital transformation, and business innovation.",
  keywords: [
    "ThoughtLink",
    "blog",
    "digital transformation",
    "technology insights",
    "industry trends",
    "business innovation",
  ],
  openGraph: {
    title: "Blog | ThoughtLink",
    description:
      "Stay informed with our latest insights, industry trends, and expert perspectives on technology, digital transformation, and business innovation.",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return <div className="w-full min-h-screen">{children}</div>;
}
