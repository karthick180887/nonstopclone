import { redirect } from "next/navigation";

/** Alias route matching common taxi site URL patterns; content lives at /pricing */
export default function TariffPage() {
  redirect("/pricing");
}
