import Hero from "../components/home/Hero";
import TriasSection from "../components/home/TriasSection";
import StatsStrip from "../components/home/StatsStrip";
import ProgramPrioritasSection from "../components/home/ProgramPrioritasSection";
import SekolahSehatSection from "../components/home/SekolahSehatSection";
import BeritaSection from "../components/home/BeritaSection";
import PraktikBaikSection from "../components/home/PraktikBaikSection";
import PublikasiSection from "../components/home/PublikasiSection";
import AplikasiSection from "../components/home/AplikasiSection";
import MitraMarquee from "../components/home/MitraMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <TriasSection />
      <StatsStrip />
      <ProgramPrioritasSection />
      <SekolahSehatSection />
      <BeritaSection />
      <PraktikBaikSection />
      <PublikasiSection />
      <AplikasiSection />
      <MitraMarquee />
    </>
  );
}
