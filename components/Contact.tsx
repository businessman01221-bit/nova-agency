"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  "אתר עסקי פרמיום",
  "חנות אונליין",
  "אתר נדל\"ן",
  "אתר מסעדה",
  "עמוד נחיתה",
  "אחר",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section ref={ref} id="contact" className="py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/8 rounded-full blur-[120px]" />
        {/* Decorative lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs text-gold/70 font-medium">✦ מוכנים להתחיל?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="font-display font-black leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            מוכנים לבנות את
            <br />
            <span className="text-gold-gradient">הפנים של העסק?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            השאירו פרטים ונחזור אליכם תוך 24 שעות לשיחה ראשונית ללא עלות.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="glass-gold rounded-3xl p-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-6xl mb-6"
              >
                🎉
              </motion.div>
              <h3 className="font-display font-black text-3xl text-gold-gradient mb-4">
                קיבלנו את הפרטים!
              </h3>
              <p className="text-white/50 text-lg">נחזור אליכם בהקדם לתיאום שיחה ראשונית חינמית.</p>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-3 glass rounded-full px-6 py-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-white/60">הודעה נשלחה בהצלחה</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-12 space-y-8"
            >
              {/* Service selection */}
              <div>
                <label className="block text-sm font-medium text-white/60 mb-4">
                  מה תרצו לבנות?
                </label>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelected(selected === service ? null : service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selected === service
                          ? "bg-gold text-dark glow-gold"
                          : "glass text-white/50 hover:text-white hover:glass-gold"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { key: "name", label: "שם מלא", placeholder: "ישראל ישראלי", type: "text" },
                  { key: "phone", label: "טלפון", placeholder: "050-0000000", type: "tel" },
                  { key: "email", label: "אימייל", placeholder: "example@gmail.com", type: "email", full: true },
                ].map((field) => (
                  <div key={field.key} className={field.full ? "md:col-span-2" : ""}>
                    <label className="block text-sm font-medium text-white/50 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/30 transition-all duration-300 border border-transparent"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/50 mb-2">ספרו לנו על העסק</label>
                  <textarea
                    placeholder="תיאור קצר של העסק, מה הייתם רוצים שהאתר יעשה, תקציב משוער..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-300 resize-none border border-transparent"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row-reverse sm:justify-end items-center gap-4">
                <button
                  type="submit"
                  className="group w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-dark bg-gold glow-gold hover:glow-gold-strong transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">שלחו פרטים</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <p className="text-xs text-white/25 text-center sm:text-right">
                  ללא עלות · ללא התחייבות · חוזרים תוך 24 שעות
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-white/5"
        >
          {[
            { icon: "🔒", label: "100% סודיות" },
            { icon: "⚡", label: "תגובה תוך 24 שעות" },
            { icon: "💎", label: "ייעוץ ראשוני חינם" },
            { icon: "🌟", label: "120+ לקוחות מרוצים" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-white/30">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
