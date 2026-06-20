"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const floatingPreviews = [
  {
    id: 1,
    title: "ריסטו מילאנו",
    type: "מסעדה",
    color: "from-amber-900/60 to-orange-900/40",
    accent: "#F59E0B",
    tag: "3.2x יותר הזמנות",
    icon: "🍽️",
    x: "-65%",
    y: "-20%",
    delay: 0,
  },
  {
    id: 2,
    title: "פריים נדל\"ן",
    type: "נדל\"ן",
    color: "from-blue-900/60 to-indigo-900/40",
    accent: "#6366F1",
    tag: "₪2.8M נמכר תוך שבוע",
    icon: "🏢",
    x: "65%",
    y: "-35%",
    delay: 0.8,
  },
  {
    id: 3,
    title: "פיט לייף",
    type: "כושר",
    color: "from-green-900/60 to-emerald-900/40",
    accent: "#10B981",
    tag: "2x יותר מנויים",
    icon: "💪",
    x: "-70%",
    y: "40%",
    delay: 1.6,
  },
  {
    id: 4,
    title: "בלה יופי",
    type: "קוסמטיקה",
    color: "from-pink-900/60 to-rose-900/40",
    accent: "#EC4899",
    tag: "89% יותר ביקורים",
    icon: "✨",
    x: "68%",
    y: "30%",
    delay: 2.4,
  },
];

function FloatingCard({ card }: { card: typeof floatingPreviews[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: card.delay + 1.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        x: card.x,
        y: card.y,
      }}
      className="hidden lg:block"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5 + card.delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay * 0.3,
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.08, rotate: 0 }}
        className={`glass rounded-2xl p-4 w-52 cursor-pointer transition-all duration-300 ${hovered ? "glow-gold" : ""}`}
        style={{ border: `1px solid ${card.accent}33` }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
          <div className="flex-1 h-3 rounded-full bg-white/5 mx-1" />
        </div>
        {/* Preview content */}
        <div className={`h-24 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 overflow-hidden relative`}>
          <span className="text-4xl">{card.icon}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <motion.div
            className="absolute bottom-2 left-2 right-2 h-1.5 rounded-full"
            style={{ background: card.accent }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold text-white/90">{card.title}</p>
          <p className="text-xs text-white/40">{card.type}</p>
          <div
            className="mt-2 px-2 py-1 rounded-full text-xs font-medium text-center"
            style={{ background: `${card.accent}22`, color: card.accent }}
          >
            {card.tag}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WebMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 25 }}
      animate={{ opacity: 1, y: 0, rotateX: 8 }}
      transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Glow behind */}
      <div className="absolute inset-0 -z-10 blur-3xl bg-gold/10 rounded-3xl scale-90 translate-y-10" />

      {/* Browser window */}
      <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-dark-100/80">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4 bg-dark-300/80 rounded-full px-4 py-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <span className="text-xs text-white/30" style={{ fontFamily: "monospace, sans-serif" }}>nova-client.co.il</span>
          </div>
          <div className="w-4 h-4 opacity-30">
            <svg viewBox="0 0 16 16" fill="white"><path d="M8 1a7 7 0 100 14A7 7 0 008 1z" fillRule="evenodd"/></svg>
          </div>
        </div>

        {/* Website content mockup */}
        <div className="relative bg-gradient-to-b from-dark-100 to-dark-200 p-0 overflow-hidden" style={{ height: 340 }}>
          {/* Hero area */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-100">
            {/* Nav bar */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
              <div className="flex gap-1.5 items-center">
                <div className="w-5 h-5 rounded-full bg-gold/80" />
                <div className="w-16 h-2 rounded-full bg-white/20" />
              </div>
              <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-2 rounded-full bg-white/10" />
                ))}
              </div>
              <div className="w-16 h-6 rounded-full bg-gold/80" />
            </div>

            {/* Hero content */}
            <div className="px-8 pt-8 pb-4">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-3/4 h-5 rounded-full bg-gradient-to-r from-white/40 to-white/20 mb-3"
              />
              <div className="w-2/3 h-3 rounded-full bg-white/15 mb-2" />
              <div className="w-1/2 h-3 rounded-full bg-white/10 mb-6" />
              <div className="flex gap-3">
                <div className="w-24 h-8 rounded-full bg-gold/70" />
                <div className="w-24 h-8 rounded-full border border-white/20" />
              </div>
            </div>

            {/* Feature cards row */}
            <div className="flex gap-3 px-8 pt-4">
              {[
                { color: "from-gold/20 to-gold/5", label: "עיצוב פרמיום" },
                { color: "from-blue-500/20 to-blue-500/5", label: "ביצועים מהירים" },
                { color: "from-purple-500/20 to-purple-500/5", label: "SEO מקצועי" },
              ].map((item, i) => (
                <div key={i} className={`flex-1 h-16 rounded-xl bg-gradient-to-br ${item.color} border border-white/5 p-2 flex flex-col justify-end`}>
                  <div className="w-full h-1.5 rounded-full bg-white/20" />
                </div>
              ))}
            </div>

            {/* Scanning line animation */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
              animate={{ top: ["10%", "95%", "10%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-200 to-transparent" />
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div
        className="absolute -bottom-12 left-0 right-0 h-12 rounded-b-2xl opacity-20"
        style={{
          background: "linear-gradient(to bottom, rgba(201,168,76,0.1), transparent)",
          transform: "scaleY(-0.5) translateY(100%)",
          filter: "blur(4px)",
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = ["זה לא עוד אתר.", "זה הפנים של העסק שלך."];

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dark" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/5 blur-[120px]" />
        {/* Corner glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/6 rounded-full blur-[100px]" />
        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex justify-center mb-10"
        >
          <div className="glass-gold rounded-full px-5 py-2 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium text-gold/80">סוכנות דיגיטל פרמיום · 2024</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="text-center mb-8">
          {words.map((word, wi) => (
            <div key={wi} className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + wi * 0.15,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h1
                  className="font-display font-black leading-none tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                >
                  {wi === 0 ? (
                    <span className="text-white">{word}</span>
                  ) : (
                    <span className="text-gold-gradient">{word}</span>
                  )}
                </h1>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          אנחנו בונים חוויות דיגיטליות שהופכות עסקים למותגים.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="group relative w-full sm:w-auto text-center px-8 py-4 rounded-full font-semibold text-dark bg-gold overflow-hidden glow-gold hover:glow-gold-strong transition-all duration-300"
          >
            <span className="relative z-10">להפוך את העסק לדיגיטלי</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 animate-shimmer" />
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full scale-0"
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </a>
          <a
            href="#portfolio"
            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-full font-semibold text-white/70 hover:text-white glass hover:glass-gold transition-all duration-300 flex items-center gap-2"
          >
            <span>צפה בפרויקטים</span>
            <motion.span
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >←</motion.span>
          </a>
        </motion.div>

        {/* 3D mockup + floating cards */}
        <div className="relative">
          {floatingPreviews.map((card) => (
            <FloatingCard key={card.id} card={card} />
          ))}
          <WebMockup />
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 mt-20 pt-12 border-t border-white/5"
        >
          {[
            { num: "120+", label: "פרויקטים הושלמו" },
            { num: "3.5x", label: "ממוצע גידול בלידים" },
            { num: "48 שעות", label: "זמן תגובה ממוצע" },
            { num: "100%", label: "לקוחות מרוצים" },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-black text-gold-gradient mb-1">{stat.num}</div>
              <div className="text-xs text-white/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/20">גלול למטה</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
