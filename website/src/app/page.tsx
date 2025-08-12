import { profile } from "../data/profile";
import { Hero } from "../components/hero";
import { Experience } from "../components/experience";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";
import { Gallery } from "../components/gallery";
import { Footer } from "../components/footer";
import { About } from "../components/about";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-8">
      <Hero name={profile.name} tagline={profile.tagline} socials={profile.socials} />
      <Experience items={profile.experiences} />
      <Projects items={profile.projects} />
      <Skills
        languages={profile.skills.languages}
        frameworks={profile.skills.frameworks}
        tools={profile.skills.tools}
      />
      <Gallery items={profile.gallery} />
      <About summary={profile.summary} />
      <Footer />
    </div>
  );
}
