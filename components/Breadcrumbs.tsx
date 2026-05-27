import Link from "next/link";

type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-3">
      {items.map((item, i) => (
        <span key={item.path}>
          {i > 0 && <span className="mx-1">›</span>}
          {i < items.length - 1 ? (
            <Link href={item.path} className="hover:text-green-700">
              {item.name}
            </Link>
          ) : (
            <span className="text-green-700">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
