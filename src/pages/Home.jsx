import Hero from "../components/home/Hero";
import TriasSection from "../components/home/TriasSection";
import StatsStrip from "../components/home/StatsStrip";
import StratifikasiSection from "../components/home/StratifikasiSection";
import ProgramPrioritasSection from "../components/home/ProgramPrioritasSection";
import SekolahSehatSection from "../components/home/SekolahSehatSection";
import BeritaSection from "../components/home/BeritaSection";
import PublikasiSection from "../components/home/PublikasiSection";
import TautanTerkaitSection from "../components/home/TautanTerkaitSection";
import AplikasiSection from "../components/home/AplikasiSection";
import MitraMarquee from "../components/home/MitraMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <TriasSection />
      <StatsStrip />
      <StratifikasiSection />
      <ProgramPrioritasSection />
      <SekolahSehatSection />
      <BeritaSection />
      <PublikasiSection />
      <TautanTerkaitSection />
      <AplikasiSection />
      <MitraMarquee />
    </>
  );
}
