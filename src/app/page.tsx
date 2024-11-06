import Navbar from "./components/Navbar"; 
import HeroSection from "./components/HeroSection"; 
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";  
import ContactSection from "./components/ContactSection"; 
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <main className="main-container">
           <Navbar />  
      <div className="container">
          <HeroSection /> 
          <AboutSection />
          <SkillsSection />
          <ProjectSection />   
         <ContactSection />  
      </div> 
     <Footer />  
    </main>
  );
}
