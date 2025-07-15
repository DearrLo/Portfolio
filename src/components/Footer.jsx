import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-900 py-6 z-10 relative text-center text-sm text-gray-400 font-redhat">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/DearrLo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/blueetown/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com/DearrrLo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      <p className="text-gray-500">
        © 2025 — Par{" "}
        <a
          href="https://github.com/DearrLo"
          className="text-gray font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @DearrLo
        </a>
      </p>
    </footer>
  );
}

export default Footer;
