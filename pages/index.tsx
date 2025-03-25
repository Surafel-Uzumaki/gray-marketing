import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Slideshow from "@/components/slideshow";
import CardSlider from "@/components/slideServices";
import WorkSlider from "@/components/WorkSlider";
import NewSlider from "@/components/ContactPage";
import PartnershipsSection from "@/components/WhoWeWork";
import NewServices from "@/components/newservice";
import { TextParallaxContentExample } from "@/components/textparallal";
import Texts from "@/components/texts";
import Servicess from "@/components/servicess";
import ContactPage from "@/components/ContactPage";
export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />
      <Texts />

      {/* main <Services /> */}

      {/* <CardSlider /> */}
      {/* <Slideshow /> */}
      {/* <WorkSlider /> */}
      {/* <TextParallaxContentExample /> */}
      <Works />
      {/* <Team /> */}
     
      
      {/* <NewServices /> */}
      <Servicess />
      <PartnershipsSection />
      <ContactPage />
      <Footer />
    </>
  );
}
