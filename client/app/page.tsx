import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolSearch from "@/components/ToolSearch";
import PopularTools from "@/components/PopularTools";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#08111f] text-white">

        <Hero />

        <ToolSearch />

        <PopularTools />

        <Features />

        <CTA />

        <Footer />

      </main>
    </>
  );
}