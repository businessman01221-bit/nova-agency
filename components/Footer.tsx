"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dark-100/50" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <span className="text-dark font-display font-black text-sm">N</span>
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-gold-gradient">NOVA</span>
          </div>

          {/* Tagline */}
          <p className="text-white/25 text-sm text-center">
            זה לא עוד אתר. זה הפנים של העסק שלך.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-white/25">
            <a href="#why" className="hover:text-gold transition-colors">למה אתר?</a>
            <a href="#process" className="hover:text-gold transition-colors">תהליך</a>
            <a href="#portfolio" className="hover:text-gold transition-colors">פורטפוליו</a>
            <a href="#contact" className="hover:text-gold transition-colors">צור קשר</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/15">
          © 2024 NOVA סוכנות דיגיטל · כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
}
