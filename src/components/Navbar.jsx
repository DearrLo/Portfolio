import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navItems = ['Accueil', 'Présentation', 'Projets', 'Contact'];

  return (
    <header className="fixed top-0 w-full bg-neutral-900 text-white shadow z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-5 sm:px-6">

        {/* Desktop menu centré */}
        <nav className="hidden sm:flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className="font-redhat font-bold text-sm sm:text-lg hover:text-orange-400 transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Menu burger mobile */}
        <button
          className="sm:hidden focus:outline-none absolute right-4 top-4"
          onClick={toggleMenu}
          aria-label="Menu mobile"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu mobile "burger" */}
      {open && (
        <div className="sm:hidden bg-neutral-800 px-4 pb-4 mt-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className="block py-2 text-white hover:text-orange-400 transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
