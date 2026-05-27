import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
      <h3 className="font-bold text-lg text-[#0B6B2E] mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <Link href={href} className="text-sm font-semibold text-green-700 hover:underline">
        Learn more →
      </Link>
    </div>
  );
}
