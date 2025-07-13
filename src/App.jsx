import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import headerBg from './images/general/header-background.jpg';
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-16 relative overflow-hidden">
      <Navbar />

      {/* Image de fond */}
      <div
  className="fixed inset-0 bg-bottom bg-no-repeat bg-cover z-0"
  style={{ backgroundImage: `url(${headerBg})` }}
/>

      {/* Particules */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="pointer-events-none"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            size: { value: 2 },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.5,
              width: 1.2,
            },
            move: { enable: true, speed: 0.8 },
            opacity: { value: 0.6 },
          },
        }}
      />

      {/* HEADER INTRO */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <section className="flex items-center justify-center w-full">
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-10 max-w-4xl text-center font-redhat">
            <h1 className="text-5xl font-bold mb-6">Lorette Viel</h1>
            <p className="text-lg mb-4 tracking-wide">
              Je suis développeuse <strong>web & mobile Junior</strong>, avec une forte sensibilité pour le design d'interface et l'expérience utilisateur <strong>(JS, React, TypeScript)</strong>. Je conçois des applications modernes,
              intuitives et accessibles et je continue à me former sur le back-end <strong>(PHP/Symfony, MySQL)</strong> à travers des projets concrets.
            </p>
            <p className="text-lg mb-6 tracking-wide">
              Je me tiens en à jour régulièrement sur différents languages, les nouvelles technologies et le machine learning; des domaines que j'explore à travers des <strong>veilles, des tests d'outils et des projets personnels</strong>.
            </p>

            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-2 rounded-full text-white font-bold bg-gradient-to-r from-orange-400 to-pink-500 border border-white hover:brightness-110 transition"
              >
                CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
              </a>

              <a
                href="#contact"
                className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black font-bold transition"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION ABOUT ME */}
      <section className="relative z-10 bg-neutral-800">
          <AboutMe />
      </section>
      
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
