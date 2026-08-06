import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VidNova",

    short_name: "VidNova",

    description:
      "AI YouTube SEO Tools for creators.",

    start_url: "/",

    display: "standalone",

    background_color: "#08111f",

    theme_color: "#08111f",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}