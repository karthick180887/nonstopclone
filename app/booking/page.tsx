import { buildMetadata } from "@/lib/seo";
import BookingForm from "@/components/BookingForm";

export const metadata = buildMetadata({
  title: "Book One Way Taxi | Instant Fare Check",
  description: "Book one way drop taxi online. Enter pickup, drop, date and vehicle to get instant fare on WhatsApp.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <div className="py-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-[#0F172A] mb-2 text-center">Book Your Taxi</h1>
        <p className="text-center text-gray-600 mb-8">Fill the form to check fare instantly via WhatsApp</p>
        <BookingForm />
      </div>
    </div>
  );
}
