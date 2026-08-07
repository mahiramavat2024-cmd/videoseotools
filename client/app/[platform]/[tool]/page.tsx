import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import GeneratorForm from "@/components/GeneratorForm";
import PremiumLock from "@/components/PremiumLock";
import { tools } from "@/data";

type Props = {
  params: Promise<{
    platform: string;
    tool: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { platform, tool } = await params;

  const currentTool = tools.find(
    (item) =>
      item.platform === platform &&
      item.slug === tool
  );

  if (!currentTool) {
    return {
      title: "Tool Not Found | videoseotools",
    };
  }

  return {
    title: `${currentTool.title} | videoseotools`,
    description: currentTool.description,

    keywords: currentTool.keywords,

    openGraph: {
      title: `${currentTool.title} | videoseotools`,
      description: currentTool.description,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${currentTool.title} | videoseotools`,
      description: currentTool.description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { platform, tool } = await params;

  const currentTool = tools.find(
    (item) =>
      item.platform === platform &&
      item.slug === tool
  );

  if (!currentTool) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08111f] px-6 py-20 text-white">
        {currentTool.premium ? (
          <PremiumLock />
        ) : (
          <GeneratorForm
            title={currentTool.title}
            placeholder={currentTool.placeholder}
            aiType={currentTool.aiType}
          />
        )}
      </main>
    </>
  );
}