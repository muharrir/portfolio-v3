import AboutMe from "@/components/organisms/AboutMe";
import Contact from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";
import Highlight from "@/components/organisms/Highlight";
import Navbar from "@/components/organisms/Navbar";
import Project from "@/components/organisms/Project";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function Home() {
  return (
    <ActiveSectionContextProvider>
      <Navbar />
      <Highlight />
      <Project />
      <AboutMe />
      <Contact />
      <Footer />
    </ActiveSectionContextProvider>
  );
}
