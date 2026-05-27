import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {post.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      )}
      <div className="min-h-screen bg-[#F8FAFC] py-20">
        <article className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${slug}` }]} />
          <time className="text-sm text-gray-400">{post.publishDate}</time>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-2 mb-4">{post.title}</h1>
          <p className="text-gray-600 leading-relaxed mb-8">{post.description}</p>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
            <p>
              Planning a one way taxi journey? {post.title} covers route information, fare estimates,
              travel time and booking tips with {`droptaxi.live`}. Call or WhatsApp for instant confirmation.
            </p>
            {post.faqs?.map((faq) => (
              <div key={faq.question}>
                <h2 className="text-lg font-bold text-[#0B6B2E]">{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          {related.length > 0 && (
            <section className="mt-12 pt-8 border-t">
              <h2 className="font-bold mb-4">Related Guides</h2>
              <ul className="space-y-2">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-green-700 hover:underline text-sm">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </div>
      <CTASection />
    </>
  );
}
