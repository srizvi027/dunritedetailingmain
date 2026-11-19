import type { Metadata } from "next";
import ComingSoon from "./coming-soon/page";

export const metadata: Metadata = {
  title: { absolute: "Coming Soon | Dun-Rite Detailing & Coatings" },
  description: "Dun-Rite Detailing & Coatings is coming soon.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <ComingSoon />;
}
