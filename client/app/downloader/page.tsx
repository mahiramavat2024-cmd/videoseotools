import UniversalDownloader from "@/components/UniversalDownloader";

export default function DownloaderPage() {
  return (
    <main className="min-h-screen bg-[#08111f] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            VidNova Downloader
          </span>

          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Universal Video Downloader
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Download videos from supported platforms using
            VidNova.
          </p>
        </div>

        <UniversalDownloader
          platform="instagram"
          title="Instagram Reel Downloader"
          placeholder="Paste Instagram Reel URL here..."
        />

      </div>
    </main>
  );
}