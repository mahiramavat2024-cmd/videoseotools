import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact VidNova",
  description: "Contact the VidNova team for support, feedback, and business inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] text-white py-20">
        <div className="mx-auto max-w-4xl px-6">

          <h1 className="text-5xl font-bold mb-8">
            Contact Us
          </h1>

          <p className="text-zinc-300 text-lg">
            Need help or have suggestions?
          </p>

          <div className="mt-10 rounded-xl border border-zinc-700 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">
              Email
            </h2>

            <p className="mt-3 text-zinc-400">
              support@vidnova.ai
            </p>

            <h2 className="mt-8 text-2xl font-bold">
              Business
            </h2>

            <p className="mt-3 text-zinc-400">
              business@vidnova.ai
            </p>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}