import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import portfolio2 from '../images/projects/portfolio-2.jpg';
import portfolio6 from '../images/projects/portfolio-6.jpg';
import portfolio8 from '../images/projects/portfolio-8.jpg';
import portfolio11 from '../images/projects/portfolio-11.jpg';

function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-neutral-800 text-white py-20 px-6 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-redhat font-extrabold tracking-tight mb-2">
          Retrouvez ici certains de mes projets :
        </h2>
        <div className="w-24 h-1 bg-orange-500 mb-12 rounded"></div>

        {/* CARROUSEL */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="max-w-5xl mx-auto"
        >
          {/* COSMOSCOP */}
          <SwiperSlide>
            <div className="bg-neutral-900 min-h-[650px] p-8 rounded-2xl shadow-xl">
              <h3 className="font-redhat text-2xl font-bold mb-4 text-white-400 text-center">CosmoScop</h3>
              <img
                src={portfolio2}
                alt="CosmoScop"
                className="w-full h-auto max-h-[400px] object-contain rounded-lg mb-6"
              />
              <p className="text-gray-300 mb-4 leading-relaxed">
                Site de vulgarisation du système solaire avec animations 3D. Animations en Three.js, compilé avec vite pour des performances optimales.
                Responsive design, accessibilité, respect du SEO. Connecté avec une base de données (utilisateurs, dashboard, favoris, commentaires…)
              </p>
              <p className="text-sm text-gray-400">React • Three.js • Symfony • MySQL</p>
            </div>
          </SwiperSlide>

          {/* PONG */}
          <SwiperSlide>
            <div className="bg-neutral-900 min-h-[650px] p-8 rounded-2xl shadow-xl">
              <h3 className="font-redhat text-2xl font-bold mb-4 text-white-400 text-center">Pong</h3>
              <img
                src={portfolio6}
                alt="Pong"
                className="w-full h-auto max-h-[400px] object-contain rounded-lg mb-6"
              />
              <p className="text-gray-300 mb-4 leading-relaxed">
                Jeu d'arcade développé en JavaScript Vanilla. Gestion des collisions, du score, du déplacement des raquettes et de l'animation avec requestAnimationFrame.
                Projet axé sur la logique algorithmique et les interactions clavier.
              </p>
              <p className="text-sm text-gray-400">JavaScript Vanilla • Gestion d'évènements • Logique algorithmique</p>
            </div>
          </SwiperSlide>

          {/* PYTHON */}
          <SwiperSlide>
            <div className="bg-neutral-900 min-h-[650px] p-8 rounded-2xl shadow-xl">
              <h3 className="font-redhat text-2xl font-bold mb-4 text-white-400 text-center">Python - HackGame</h3>
              <img
                src={portfolio8}
                alt="HackGame Python"
                className="w-full h-auto max-h-[400px] object-contain rounded-lg mb-6"
              />
              <p className="text-gray-300 mb-4 leading-relaxed">
                Mini-jeu en Python conçu pour le terminal, simulant une infiltration dans un faux système de fichiers. Le joueur navigue avec des commandes (cd, ls, cat)
                pour retrouver un fichier secret avant la fin d’un compte à rebours. Utilisation des threads pour le timer, d’effets glitchs avec sys.stdout, et d’une structure arborescente.
              </p>
              <p className="text-sm text-gray-400">Python • sys.stdout • Threads • Terminal</p>
            </div>
          </SwiperSlide>

          {/* QUIZZ */}
          <SwiperSlide>
            <div className="bg-neutral-900 min-h-[650px] p-8 rounded-2xl shadow-xl">
              <h3 className="font-redhat text-2xl font-bold mb-4 text-white-400 text-center">Quiz de Culture Générale</h3>
              <img
                src={portfolio11}
                alt="Quiz React"
                className="w-full h-auto max-h-[400px] object-contain rounded-lg mb-6"
              />
              <p className="text-gray-300 mb-4 leading-relaxed">
                Quiz interactif en React qui récupère des questions via une API. Chaque question est animée avec fluidité, une barre de progression visuelle, et des boutons dynamiques.
                Un récapitulatif final présente les bonnes réponses vs celles de l’utilisateur.
              </p>
              <p className="text-sm text-gray-400">React • Hooks • Responsive • API</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
