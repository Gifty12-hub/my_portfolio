export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Gifty Akosua Arkoh. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#about"
              className="text-gray-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}