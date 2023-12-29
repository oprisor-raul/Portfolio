import CursorFollowerBackground from "@/components/CursorFollowerBackground";
import Header from "@/components/welcomePage/header/Header";
import About from "@/components/welcomePage/main/About";
import Experience from "@/components/welcomePage/main/Experience";
import Projects from "@/components/welcomePage/main/Projects";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
      </main>
      <CursorFollowerBackground />
    </div>
  );
}
