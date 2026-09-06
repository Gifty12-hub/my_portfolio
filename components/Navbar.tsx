"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    {name: "Blog", href: "/blog" },
    {name: "Resume", href: "/resume" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#dfe4f0] bg-[#f7f8fc]/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-[-0.04em] text-[#17213b]"
        >
          Gifty
        </Link>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#64708a] hover:text-[#0f9d9a]"
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-[#17213b] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#dfe4f0] bg-[#f7f8fc] px-6 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#64708a] hover:text-[#0f9d9a]"
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