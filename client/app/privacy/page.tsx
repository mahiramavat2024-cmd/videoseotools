import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | videoseotools",
  description:
    "Read the Privacy Policy of videoseotools and learn how we collect, use and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="mb-8 text-5xl font-bold">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-zinc-300 leading-8">

            <p>
              At videoseotools, your privacy is important to us.
            </p>

            <p>
              We collect only the information necessary to improve our
              AI tools and user experience.
            </p>

            <p>
              We do not sell your personal information to third parties.
            </p>

            <p>
              Third-party services such as Google Analytics and Google
              AdSense may use cookies to improve your experience.
            </p>

            <p>
              By using videoseotools you agree to this Privacy Policy.
            </p>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}