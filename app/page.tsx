import CursorFollowerBackground from "@/components/CursorFollowerBackground";
import Header from "@/components/welcomePage/header/Header";
import Main from "@/components/welcomePage/main/Main";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <Main />
      <CursorFollowerBackground />
    </div>
  );
}
