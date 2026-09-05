"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/assignments", label: "Assignments" },
  { href: "/practice", label: "Practice" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="navbar">
        <Link href="/" className="navbar-brand">
    Astudylab
    </Link>

      <button
        type="button"
        className="navbar-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">☰</span>
      </button>

      <div
        id="main-navigation"
        className={`navbar-links ${isOpen ? "is-open" : ""}`}
      >
        {links.map((link) => (
            <a
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : undefined}
            aria-current={pathname === link.href ? "page" : undefined}
            >
            {link.label}
            </a>
        ))}
      </div>
    </nav>
  );
}