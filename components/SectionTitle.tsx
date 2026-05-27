export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center mb-10" : "mb-10"}>
      {eyebrow && (
        <p className="text-[#0B6B2E] font-semibold text-sm uppercase tracking-wide mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-3">{title}</h2>
      {subtitle && (
        <p className={`text-gray-600 text-sm max-w-2xl ${center ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
