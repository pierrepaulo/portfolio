import { AboutMe } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { ProfileCard } from "@/components/sections/ProfileCard";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <header>
        <Header />
      </header>
      <main className="mx-auto flex flex-col w-full max-w-6xl gap-12 px-6 pb-16 pt-28 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-12 lg:pt-24">
        <aside className="lg:col-span-1">
          <div className="sticky top-6">
            <ProfileCard />
          </div>
        </aside>
        <section className="flex flex-col gap-20 lg:col-span-2">
          <AboutMe />
          <Skills />
          <ProjectsSection />
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
