import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata = buildMetadata({
  title: "Taxi Travel Guides & Route Tips | droptaxi.live Blog",
  description: "Explore one way taxi travel guides, route details, fare information and tips for intercity travel across Tamil Nadu, Kerala and Karnataka.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
              Taxi Travel Guides & Route Information
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore one way taxi routes, fare details and travel tips across South India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="p-6">
                  <time className="text-xs text-gray-400">{post.publishDate}</time>
                  <h2 className="font-bold text-lg text-[#0F172A] mt-2 mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-green-700 hover:underline">
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
