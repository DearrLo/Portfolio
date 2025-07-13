function Skills() {
  const data = {
    "Langues parlées": [
      { label: "Anglais", level: 90 },
      { label: "Russe", level: 40 },
      { label: "Grec", level: 10 },
    ],
    "Développement Frontend": [
      { label: "HTML5 / CSS3", level: 85 },
      { label: "JavaScript", level: 70 },
      { label: "React", level: 50 },
    ],
    "Développement Backend": [
      { label: "PHP / Symfony", level: 80 },
      { label: "Base de données SQL", level: 70 },
      { label: "Node.JS", level: 40 },
    ],
    "Autres Compétences": [
      { label: "Git & GitHub", level: 80 },
      { label: "Responsive Design", level: 70 },
      { label: "Déploiement web", level: 65 },
    ]
  };

  return (
    <section className="bg-[#f8f8f8] text-[#222] px-6 py-16 relative z-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-2 border-orange-400 inline-block">COMPÉTENCES</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
          {Object.entries(data).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {skills.map(({ label, level }) => (
                  <li key={label}>
                    <div className="mb-1">{label}</div>
                    <div className="w-full bg-gray-300 h-2 rounded-full">
                      <div className="bg-orange-400 h-2 rounded-full" style={{ width: `${level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
