"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "ריסטורנטה נרו",
    category: "מסעדה",
    tag: "מזון ומשקאות",
    desc: "חוויה דיגיטלית עוצרת נשימה למסעדה יוקרתית עם הזמנות אונליין, תפריט דיגיטלי וגלריה ממותגת.",
    metric: "+340% הזמנות אונליין",
    color: "from-amber-900 via-orange-900 to-red-950",
    accent: "#F59E0B",
    bgAccent: "from-amber-500/10 to-orange-500/5",
    icon: "🍝",
    tags: ["עיצוב", "הזמנות אונליין", "תפריט דיגיטלי"],
    mockupLines: [
      { w: "60%", color: "bg-amber-400/80" },
      { w: "80%", color: "bg-amber-200/40" },
      { w: "45%", color: "bg-amber-200/30" },
    ],
  },
  {
    id: 2,
    name: "פריים נכסים",
    category: "נדל\"ן",
    tag: "נדל\"ן",
    desc: "פלטפורמת נדל\"ן פרמיום עם חיפוש מתקדם, גלריות תלת-ממד וטפסי ליד חכמים.",
    metric: "₪15M נכסים נמכרו",
    color: "from-slate-800 via-blue-950 to-indigo-950",
    accent: "#6366F1",
    bgAccent: "from-blue-500/10 to-indigo-500/5",
    icon: "🏛️",
    tags: ["מאגר נכסים", "חיפוש מתקדם", "לידים"],
    mockupLines: [
      { w: "70%", color: "bg-indigo-400/80" },
      { w: "55%", color: "bg-indigo-200/40" },
      { w: "85%", color: "bg-indigo-200/30" },
    ],
  },
  {
    id: 3,
    name: "פיטקור סטודיו",
    category: "כושר ובריאות",
    tag: "כושר ובריאות",
    desc: "אתר פרמיום לסטודיו כושר עם מערכת מנויים, לוח שיעורים חי ואפליקציית מנוי.",
    metric: "+280% הצטרפויות חדשות",
    color: "from-emerald-900 via-green-900 to-teal-950",
    accent: "#10B981",
    bgAccent: "from-green-500/10 to-emerald-500/5",
    icon: "⚡",
    tags: ["מנויים", "לוח שיעורים", "מובייל"],
    mockupLines: [
      { w: "75%", color: "bg-emerald-400/80" },
      { w: "50%", color: "bg-emerald-200/40" },
      { w: "65%", color: "bg-emerald-200/30" },
    ],
  },
  {
    id: 4,
    name: "בלה בוטיק",
    category: "עסק מקומי",
    tag: "עסק מקומי",
    desc: "חנות בוטיק מקומית שהפכה לברנד מוכר עם חנות אונליין מעוצבת ונוכחות דיגיטלית חזקה.",
    metric: "+190% מכירות אונליין",
    color: "from-pink-900 via-rose-900 to-fuchsia-950",
    accent: "#EC4899",
    bgAccent: "from-pink-500/10 to-rose-500/5",
    icon: "🌸",
    tags: ["חנות אונליין", "מיתוג", "קידום מקומי"],
    mockupLines: [
      { w: "65%", color: "bg-pink-400/80" },
      { w: "90%", color: "bg-pink-200/40" },
      { w: "55%", color: "bg-pink-200/30" },
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: `1px solid ${project.accent}20` }}
    >
      {/* Hover glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.bgAccent}`}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Mockup preview */}
      <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-black/30 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
          <div className="flex-1 h-2.5 rounded-full bg-white/10 mx-2" />
        </div>

        {/* Content mockup */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{project.icon}</span>
              <div>
                <div className="h-2.5 rounded-full bg-white/60 w-20 mb-1" />
                <div className="h-1.5 rounded-full bg-white/25 w-14" />
              </div>
            </div>
            <div className="h-6 w-16 rounded-full" style={{ background: `${project.accent}80` }} />
          </div>

          {/* Lines */}
          <div className="space-y-2 mb-3">
            {project.mockupLines.map((line, i) => (
              <motion.div
                key={i}
                className={`h-2 rounded-full ${line.color}`}
                style={{ width: line.w }}
                animate={{ width: hovered ? line.w : "0%" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              />
            ))}
          </div>

          {/* Grid of cards */}
          <div className="grid grid-cols-3 gap-1.5">
            {[1,2,3].map(i => (
              <div key={i} className="h-10 rounded-lg bg-white/10" />
            ))}
          </div>
        </div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
       <a
  href="#contact"
  className="px-5 py-2 rounded-full text-sm font-semibold text-dark"
  style={{ background: project.accent }}
>
  צפה בפרויקט ←
</a>
        </motion.div>
      </div>

      {/* Info */}
      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: `${project.accent}18`, color: project.accent }}
              >
                {project.tag}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white group-hover:text-gold transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-sm text-white/40">{project.category}</p>
          </div>
          <div className="text-right">
            <div className="font-bold text-sm" style={{ color: project.accent }}>{project.metric}</div>
          </div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-4">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 glass rounded-full text-xs text-white/40">{tag}</span>
          ))}
        </div>
      </div>

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="portfolio" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs text-gold/70 font-medium">✦ הפרויקטים שלנו</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display font-black text-4xl md:text-6xl mb-4"
          >
            עבודות שמדברות
            <br />
            <span className="text-gold-gradient">בעד עצמן</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            כל פרויקט הוא עולם בפני עצמו — מתוכנן, מעוצב ומפותח לספק תוצאות אמיתיות.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-dark bg-gold glow-gold hover:glow-gold-strong transition-all duration-300"
          >
            הפרויקט הבא יכול להיות שלכם
            <span>←</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
