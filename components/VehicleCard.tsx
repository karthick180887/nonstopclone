import Image from "next/image";
import { cn } from "@/lib/utils";

type VehicleCardProps = {
  label: string;
  image: string;
  rate: number;
  tag?: string;
  showPopular?: boolean;
  tollNote?: string;
  driverBata?: number;
  selected?: boolean;
  onClick?: () => void;
  variant?: "select" | "display";
};

export default function VehicleCard({
  label,
  image,
  rate,
  tag,
  showPopular,
  tollNote = "One-way toll charges",
  driverBata = 400,
  selected,
  onClick,
  variant = "display",
}: VehicleCardProps) {
  const interactive = variant === "select" && onClick;

  const content = (
    <>
      {showPopular ? (
        <span className="absolute top-3 right-3 text-[10px] bg-[#FFC107] text-black px-2 py-1 rounded-full font-bold">
          Popular
        </span>
      ) : (
        tag && (
          <span className="absolute top-3 right-3 text-[10px] bg-green-600 text-white px-2 py-1 rounded-full font-bold">
            {tag}
          </span>
        )
      )}
      <Image
        src={image}
        alt={`${label} taxi service`}
        width={140}
        height={80}
        className="mx-auto mb-3 h-14 w-full object-contain group-hover:scale-105 transition"
      />
      <h3 className="text-center font-bold text-[#0B6B2E] text-base">{label}</h3>
      <p className="text-center text-2xl sm:text-3xl font-extrabold text-[#1FAE4B] mt-2">
        ₹{rate}
        <span className="text-xs text-gray-500 font-normal"> / KM</span>
      </p>
      <p className="text-center text-xs text-gray-500 mt-1">Driver Bata ₹{driverBata}</p>
      <p className="text-center text-xs text-gray-600 mt-2">{tollNote}</p>
    </>
  );

  const className = cn(
    "relative bg-white rounded-2xl p-5 border-2 text-gray-900 transition group",
    interactive
      ? selected
        ? "border-[#1FAE4B] bg-green-50 shadow-sm cursor-pointer"
        : "border-gray-200 hover:border-[#1FAE4B]/60 cursor-pointer"
      : "border-gray-200 shadow-sm hover:shadow-xl"
  );

  if (interactive) {
    return (
      <button type="button" onClick={onClick} className={cn(className, "text-left w-full")}>
        {content}
      </button>
    );
  }

  return <article className={className}>{content}</article>;
}
