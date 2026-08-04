"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    {name: "Blog", href: "/blog" },
    {name: "Resume", href: "/resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-orange-500 shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Gifty
        </Link>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-6 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>
      )}

    </nav>
  );
}