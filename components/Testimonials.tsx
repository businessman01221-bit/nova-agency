"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "דוד כהן",
    role: "בעלים, מסעדת Oro",
    text: "מאז שהשקנו את האתר החדש, ההזמנות האונליין שלנו גדלו ב-300%. NOVA פשוט הבינו מה הלקוחות שלי צריכים לראות.",
    avatar: "DC",
    stars: 5,
    metric: "+300% הזמנות",
  },
  {
    name: "שירה לוי",
    role: "מנהלת שיווק, Prime Realty",
    text: "האתר שנבנה עבורנו הפך לכלי המכירות החזק ביותר שלנו. כל ליד שמגיע כבר מגיע משוכנע — האתר עושה את כל העבודה.",
    avatar: "SL",
    stars: 5,
    metric: "3x יותר לידים",
  },
  {
    name: "אמיר בן-דוד",
    role: "מייסד, FitCore Studio",
    text: "ציפיתי לאתר יפה. קיבלתי מכונת לידים. תוך חודש מההשקה פתחנו קבוצה נוספת. מדהים.",
    avatar: "AB",
    stars: 5,
    metric: "+180 מנויים",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dark-100/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs text-gold/70 font-medium">✦ מה אומרים הלקוחות</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display font-black text-4xl md:text-5xl"
          >
            לקוחות שדיברו <span className="text-gold-gradient">תוצאות</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group glass rounded-2xl p-7 hover:glass-gold transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, si) => (
                    <span key={si} className="text-gold text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/65 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 flex items-center justify-center text-xs font-bold text-gold">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/30">{t.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded-full">
                    {t.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
