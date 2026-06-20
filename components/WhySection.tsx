"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "94%", label: "מהמשתמשים שופטים עסק לפי האתר שלו", icon: "👁️" },
  { value: "8 שניות", label: "זה הזמן שיש לכם לעשות רושם ראשוני", icon: "⚡" },
  { value: "75%", label: "מהלקוחות לא יחזרו לאתר שנראה מיושן", icon: "🚪" },
  { value: "3x", label: "יותר המרות לעסקים עם אתר פרמיום", icon: "📈" },
];

const reasons = [
  {
    icon: "🎯",
    title: "הרושם הראשוני קורה דיגיטלית",
    desc: "לפני שלקוח מתקשר אליכם, הוא כבר גוגל אתכם. האתר שלכם הוא הכניסה לעסק — הוא צריך לדבר בשם המותג שלכם.",
  },
  {
    icon: "💎",
    title: "אמינות = רכישות",
    desc: "אתר מקצועי ומעוצב מעביר מסר ברור: 'אנחנו רציניים, איכותיים, וכדאי לסמוך עלינו.' אתר ישן אומר ההפך.",
  },
  {
    icon: "🌐",
    title: "עובד בשבילכם 24/7",
    desc: "אתר טוב הוא איש המכירות הטוב ביותר שלכם — אף פעם לא ישן, אף פעם לא מתעייף, ותמיד מייצג אתכם בצורה הטובה ביותר.",
  },
  {
    icon: "🚀",
    title: "תחרות על תשומת הלב",
    desc: "המתחרים שלכם כבר יש להם אתרים מדהימים. השאלה היא — האם האתר שלכם מציב אתכם מעליהם, או מאחוריהם?",
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="why" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
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
            <span className="text-xs text-gold/70 font-medium">✦ למה זה חשוב</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display font-black text-4xl md:text-6xl mb-6 leading-tight"
          >
            האתר שלכם הוא
            <br />
            <span className="text-gold-gradient">הפנים של העסק</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            בעולם הדיגיטלי של היום, לקוחות שופטים עסקים לפי הנוכחות הדיגיטלית שלהם — לפני שהם בכלל מדברים אתכם.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6 text-center group hover:glass-gold transition-all duration-500 cursor-default"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-display font-black text-2xl md:text-3xl text-gold-gradient mb-2">{stat.value}</div>
              <div className="text-xs text-white/40 leading-relaxed">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i + 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group glass rounded-2xl p-8 hover:glass-gold transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 text-white group-hover:text-gold-gradient transition-all duration-300">{r.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{r.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
