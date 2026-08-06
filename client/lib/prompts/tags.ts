"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "YouTube",
    items: [
      {
        name: "Title Generator",
        href: "/youtube/title-generator",
        icon: "🎬",
      },
      {
        name: "Description Generator",
        href: "/youtube/description-generator",
        icon: "📝",
      },
      {
        name: "Tags Generator",
        href: "/youtube/tags-generator",
        icon: "🏷️",
      },
      {
        name: "Hashtag Generator",
        href: "/youtube/hashtag-generator",
        icon: "#️⃣",
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-zinc-800 bg-[#0b1324] p-6">
      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        VidNova
      </h2>

      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {section.title}
          </h3>

          <div className="space-y-2">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  pathname === item.href
                    ? "bg-cyan-500 text-black font-bold"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}