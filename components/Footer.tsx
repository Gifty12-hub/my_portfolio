export default function Footer() {
  return (
    <footer className="bg-[#17213b] py-8 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm text-[#c7cee0]">
            © {new Date().getFullYear()} Gifty Akosua Arkoh. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#about"
              className="text-[#c7cee0] hover:text-[#7ce0d8]"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-[#c7cee0] hover:text-[#7ce0d8]"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-[#c7cee0] hover:text-[#7ce0d8]"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}