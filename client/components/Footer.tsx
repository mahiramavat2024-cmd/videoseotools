import Link from "next/link";

const toolLinks = [
  {
    title: "YouTube Title Generator",
    href: "/youtube/title-generator",
  },
  {
    title: "YouTube Description Generator",
    href: "/youtube/description-generator",
  },
  {
    title: "YouTube Tags Generator",
    href: "/youtube/tags-generator",
  },
  {
    title: "YouTube Hashtag Generator",
    href: "/youtube/hashtag-generator",
  },
];

const companyLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const legalLinks = [
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#08111f]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              VidNova
            </h2>

            <p className="mt-5 text-zinc-400 leading-7">
              AI-powered SEO tools for YouTube creators.
              Generate titles, descriptions, tags and hashtags in seconds.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              AI Tools
            </h3>

            <ul className="space-y-3">
              {toolLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-cyan-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-cyan-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Legal
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-cyan-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-zinc-800 pt-8 text-center text-zinc-500">

          © {new Date().getFullYear()} VidNova.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}