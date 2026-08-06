import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | VidNova",
  description:
    "Read the Terms and Conditions for using VidNova AI tools.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="mb-8 text-5xl font-bold">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-zinc-300 leading-8">

            <p>
              By using VidNova you agree to use our AI tools responsibly.
            </p>

            <p>
              Generated content should always be reviewed before publishing.
            </p>

            <p>
              VidNova is provided "as is" without any guarantee of search rankings.
            </p>

            <p>
              We may update these terms at any time.
            </p>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}