import CursorFollowerBackground from "@/components/CursorFollowerBackground";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <section className="flex flex-col items-center">
          <div className="flex mt-6">
            <button className="bg-primary text-background py-2 px-4 rounded mr-2">
              Primary Button
            </button>
            <button className="bg-secondary text-text py-2 px-4 rounded">
              Secondary Button
            </button>
          </div>
        </section>
      </main>
      <CursorFollowerBackground />
    </div>
  );
}
