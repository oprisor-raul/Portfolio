import CursorFollowerBackground from "@/components/CursorFollowerBackground";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24"></main>
      <CursorFollowerBackground />
    </div>
  );
}
