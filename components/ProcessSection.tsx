"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "אסטרטגיה",
    subtitle: "הבנת העסק והגדרת מטרות",
    desc: "מתחילים בהבנה עמוקה של העסק שלכם — מי הלקוחות, מה המטרות, ואיך האתר יכול לשרת אותן בצורה הטובה ביותר.",
    tags: ["מחקר שוק", "מיפוי מתחרים", "הגדרת יעדים", "פרסונות לקוח"],
    icon: "🎯",
    color: "from-purple-500/20 to-purple-500/5",
    accent: "#A855F7",
    duration: "3-5 ימים",
  },
  {
    number: "02",
    title: "עיצוב",
    subtitle: "חוויה ויזואלית שלא ישכחו",
    desc: "יוצרים חוויה ויזואלית שמרגשת, מרשימה, ומייצגת את המותג שלכם בצורה שלא ישכחו. כל פיקסל מתוכנן.",
    tags: ["ממשק משתמש", "מערכת עיצוב", "מסגרות תוכן", "אב-טיפוס"],
    icon: "✦",
    color: "from-gold/20 to-gold/5",
    accent: "#C9A84C",
    duration: "7-10 ימים",
  },
  {
    number: "03",
    title: "פיתוח",
    subtitle: "בנייה עם הטכנולוגיות המתקדמות",
    desc: "בונים את האתר עם הטכנולוגיות המתקדמות ביותר — מהיר, מאובטח, מותאם לכל מכשיר, ומוכן לצמוח.",
    tags: ["ביצועים גבוהים", "אנימציות", "קידום אורגני מלא", "אבטחה"],
    icon: "⚡",
    color: "from-blue-500/20 to-blue-500/5",
    accent: "#3B82F6",
    duration: "14-21 ימים",
  },
  {
    number: "04",
    title: "השקה",
    subtitle: "מושקים, עובדים, מצמיחים",
    desc: "מוודאים שהכל מושלם, משיקים עם בום, ומלווים אתכם אחרי ההשקה כדי שהאתר ימשיך לעבוד לאורך זמן.",
    tags: ["בדיקות מקיפות", "אופטימיזציה", "ניתוח נתונים", "תמיכה שוטפת"],
    icon: "🚀",
    color: "from-green-500/20 to-green-500/5",
    accent: "#10B981",
    duration: "2-3 ימים",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="process" className="py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dark-100/50" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/4 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs text-gold/70 font-medium">✦ איך אנחנו עובדים</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display font-black text-4xl md:text-6xl mb-4"
          >
            תהליך שמביא
            <br />
            <span className="text-gold-gradient">תוצאות אמיתיות</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            4 שלבים. תהליך מובנה ושקוף. תוצאה שעוברת את הציפיות.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group glass rounded-2xl p-8 hover:glass-gold transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:via-gold/30 group-hover:to-transparent transition-all duration-700" />

              <div className="relative z-10 flex flex-col md:flex-row-reverse md:items-center gap-6">
                {/* Number & Icon */}
                <div className="flex items-center gap-4 md:w-32 shrink-0">
                  <div className="relative">
                    <span className="font-display font-black text-5xl md:text-6xl text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
                      {step.number}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl">
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white group-hover:text-gold transition-colors duration-300">
                        {step.title}
                      </h3>
                      <span className="text-xs text-white/30">{step.subtitle}</span>
                    </div>
                    <div className="glass rounded-full px-3 py-1 text-xs text-white/40 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold/60" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: `${step.accent}18`, color: step.accent, border: `1px solid ${step.accent}25` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow — hidden on mobile, decorative on desktop */}
                <div className="hidden md:flex items-center text-white/10 group-hover:text-gold/40 transition-colors duration-300 text-3xl shrink-0">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 glass-gold rounded-2xl p-6 text-center"
        >
          <div className="text-sm text-white/40 mb-2">זמן ממוצע מרגע הפגישה ועד להשקה</div>
          <div className="font-display font-black text-3xl text-gold-gradient">30 יום בלבד</div>
        </motion.div>
      </div>
    </section>
  );
}
