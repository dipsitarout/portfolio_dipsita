import './App.css';
import Navbar from './components/navbar';
import ParticlesComponent from './components/particle';
import HeroSection from './components/herosection';
import ExperienceSection from './components/experience';
import ProjectsSection from './components/project';
import SkillsSection from './components/skill';
import AchievementsPage from './components/achievement';
import ContactPage from './components/contactus';
import AboutEducation from './components/about';

function App() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Particles as background */}
      
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <HeroSection /> {/* Add Hero Section here */}
        {/* Add other sections here (About, Projects, Contact) */}
        <AboutEducation></AboutEducation>
        <ExperienceSection></ExperienceSection>
        <ProjectsSection></ProjectsSection>
        <SkillsSection></SkillsSection>
        <AchievementsPage></AchievementsPage>
        <ContactPage></ContactPage>
      </div>
    </main>
  );
}

export default App;
