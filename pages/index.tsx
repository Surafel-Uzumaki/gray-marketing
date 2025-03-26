import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import PartnershipsSection from "@/components/WhoWeWork";
import Texts from "@/components/texts";
import Servicess from "@/components/servicess";
import ContactPage from "@/components/ContactPage";
export default function Home() {
  return (
    <>
      {/* < Navbar/> */}
      <Hero />
      <Texts />

      <Works />

      <Servicess />
      <PartnershipsSection />
      <ContactPage />
      <Footer />
    </>
  );
}
