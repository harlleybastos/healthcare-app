import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import LatestNews from "@/components/LatestNews";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="lg:max-w-[1200px] lg:mx-auto">
      <Hero />
      <Skills />
      <About />
      <Reviews/>
      <LatestNews />
    </main>
  );
}
