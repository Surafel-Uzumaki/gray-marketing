import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Texts from "@/components/texts";
import Servicess from "@/components/servicess";
import SponsorImage from "@/components/sponsorImage";
export default function Home() {
  return (
    <>
      <Hero />
      <Texts id="services" />
      <SponsorImage />
      <Servicess />
      <Footer />
    </>
  );
}
