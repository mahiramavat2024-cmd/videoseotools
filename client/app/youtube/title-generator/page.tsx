import Navbar from "@/components/Navbar";
import GeneratorForm from "@/components/GeneratorForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      <div className="px-6 py-20">
        <GeneratorForm
          aiType="title"
          title="YouTube Title Generator"
          placeholder="Example: iPhone 18 Review"
        />
      </div>
    </main>
  );
}