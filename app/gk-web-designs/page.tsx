import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gk WebDesigns - Professional Web Development & Design Services",
  description: "Gk WebDesigns specializes in modern, user-friendly websites and applications.",
  path: "/gk-web-designs",
});

export default function GkWebDesignsPage() {
  return (
    <div className="py-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#0F172A] mb-4">Gk WebDesigns</h1>
        <p className="text-gray-600">
          Professional web development, design, and digital solutions for modern businesses.
        </p>
      </div>
    </div>
  );
}
