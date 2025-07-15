import profilePic from '../images/general/moiPro.jpg';

function Présentation() {
  return (
    <section id="présentation" className="text-white px-6 py-16 bg-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10">

        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Photo de profil"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl bg-white p-1"
          />
        </div>

        {/* Texte */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>

          <p className="text-lg text-gray-200 font-redhat leading-relaxed mb-6">
            JavaScript, React, PHP ou Symfony : je construis des projets concrets et j’élargis ma stack au fil des défis.
            Curieuse, volontaire et passionnée, j’apprends vite et je vais au bout des choses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 text-gray-200 text-[17px] font-medium">
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span><strong>Location:</strong> Caen, Calvados</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl"></span>
              <span><strong>Âge:</strong> 25 ans</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl"></span>
              <span><strong>Nationalité:</strong> Française</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl"></span>
              <span><strong>Intérêts:</strong> Écriture, course à pied, sciences spatiales</span>
            </div>
            <div className="flex items-center gap-3 sm:col-span-2">
              <span className="text-xl"></span>
              <span><strong>Statut actuel:</strong> En recherche d’alternance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Présentation;
