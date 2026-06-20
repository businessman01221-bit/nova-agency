"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "למה אתר?", href: "#why" },
    { label: "תהליך", href: "#process" },
    { label: "פורטפוליו", href: "#portfolio" },
    { label: "צור קשר", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center glow-gold">
              <span className="text-dark font-display font-black text-sm">N</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display font-bold text-xl tracking-widest text-gold-gradient">NOVA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="relative px-5 py-2.5 rounded-full text-sm font-medium bg-gold text-dark overflow-hidden group glow-gold transition-all duration-300 hover:glow-gold-strong"
          >
            <span className="relative z-10">בואו נדבר</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile menu button — on the left in RTL */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="פתח תפריט"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-gold transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="mt-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gold text-dark text-center">
            בואו נדבר
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
