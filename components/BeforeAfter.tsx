"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function OldSite() {
  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden border-4 border-gray-300 h-80 relative font-sans">
      {/* Old browser bar */}
      <div className="bg-gray-300 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1">
          {["bg-red-400","bg-yellow-400","bg-green-400"].map((c,i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
          ))}
        </div>
        <div className="flex-1 bg-white rounded px-2 py-0.5 mx-2 text-xs text-gray-500 flex items-center gap-1">
          <span>🔒</span>
          <span className="text-blue-600 underline">www.my-old-business-site.co.il/index.php</span>
        </div>
      </div>

      {/* Old site content */}
      <div className="p-4 bg-white" style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Old nav */}
        <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2 mb-3">
          <div className="text-blue-800 font-bold text-sm">☆ עסק שלי ☆</div>
          <div className="flex gap-2 text-xs text-blue-600">
            <span className="underline cursor-pointer">ראשי</span>
            <span>|</span>
            <span className="underline cursor-pointer">אודות</span>
            <span>|</span>
            <span className="underline cursor-pointer">שירותים</span>
            <span>|</span>
            <span className="underline cursor-pointer">צור קשר</span>
          </div>
        </div>

        {/* Badly designed hero */}
        <table width="100%" style={{ borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ width: "40%", padding: "8px", background: "#003399", color: "white", fontSize: "11px", verticalAlign: "top" }}>
                <div className="font-bold mb-1">ברוכים הבאים!</div>
                <div style={{ fontSize: "10px" }}>אנחנו מספקים שירותים<br/>מקצועיים ואיכותיים<br/>מאז שנת 1998</div>
                <div style={{ marginTop: "8px", background: "#FF6600", color: "white", padding: "4px 8px", display: "inline-block", fontSize: "10px", cursor: "pointer" }}>
                  לחץ כאן !!
                </div>
              </td>
              <td style={{ padding: "8px", background: "#FFFFCC", verticalAlign: "top", fontSize: "10px" }}>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='60' viewBox='0 0 80 60'%3E%3Crect width='80' height='60' fill='%23CCC'/%3E%3Ctext x='40' y='35' text-anchor='middle' fill='%23666' font-size='10'%3Eתמונה%3C/text%3E%3C/svg%3E" alt="תמונה" width="80" height="60" style={{ float: "right", margin: "0 0 4px 8px" }} />
                <div style={{ color: "#333", lineHeight: "1.4" }}>חברתנו מתמחה במתן פתרונות מקיפים ללקוחותינו. אנו עובדים עם המיטב ומספקים שירות אישי לכל לקוח ולקוח. פנו אלינו היום!</div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Marquee-like element */}
        <div className="mt-2 bg-yellow-300 text-red-700 text-xs px-2 py-1 overflow-hidden">
          <span>⚡ מבצע חם! התקשרו עכשיו: 03-1234567 ⚡ מבצע חם! התקשרו עכשיו: 03-1234567 ⚡</span>
        </div>

        {/* Counter */}
        <div className="mt-2 text-center text-xs text-gray-500">
          <span>ביקורים: </span>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='12'%3E%3Crect width='40' height='12' fill='%23000'/%3E%3Ctext x='20' y='9' text-anchor='middle' fill='%2300FF00' font-size='8'%3E04821%3C/text%3E%3C/svg%3E" alt="counter" className="inline" />
        </div>
      </div>

      {/* "BEFORE" badge */}
      <div className="absolute top-14 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full rotate-[-5deg]">
        לפני
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 h-80 relative bg-dark-100">
      {/* New browser bar */}
      <div className="bg-dark-200 px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-white/5 rounded-full px-3 py-1 mx-2 flex items-center gap-2">
          <span className="text-green-400 text-xs">🔒</span>
          <span className="text-xs text-white/40">nova-business.co.il</span>
        </div>
      </div>

      {/* Premium site content */}
      <div className="relative bg-gradient-to-br from-dark-100 to-dark-200 h-full overflow-hidden">
        {/* Premium nav */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gold to-gold-dark" />
            <div className="text-xs font-bold text-white">המותג</div>
          </div>
          <div className="flex gap-4">
            {["ראשי","שירותים","עבודות","צור קשר"].map((item, i) => (
              <span key={i} className="text-xs text-white/40 hover:text-white/80 cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <div className="bg-gold text-dark text-xs font-semibold px-3 py-1 rounded-full">בואו נדבר</div>
        </div>

        {/* Hero */}
        <div className="px-6 pt-6">
          <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-full px-3 py-1 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs">עסק פרמיום</span>
          </div>
          <div className="text-white font-bold text-lg mb-1 leading-tight">
            פתרונות עסקיים<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">ברמה אחרת</span>
          </div>
          <div className="text-white/40 text-xs mb-4 leading-relaxed">אנחנו מספקים שירות פרמיום לעסקים שרוצים להצליח</div>
          <div className="flex gap-2">
            <div className="bg-gold text-dark text-xs font-semibold px-4 py-1.5 rounded-full cursor-pointer">
              התחילו עכשיו
            </div>
            <div className="border border-white/20 text-white/60 text-xs px-4 py-1.5 rounded-full cursor-pointer">
              גלו עוד
            </div>
          </div>
        </div>

        {/* Floating elements decoration */}
        <div className="absolute bottom-4 right-4 glass rounded-xl p-3 text-xs">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-white/60">לידים החודש</span>
          </div>
          <div className="text-gold font-bold text-base">+127</div>
        </div>

        {/* Gold glow */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gold/5 to-transparent" />

        {/* "AFTER" badge */}
        <div className="absolute top-14 left-3 bg-gold text-dark text-xs font-bold px-2 py-1 rounded-full rotate-[3deg] glow-gold">
          אחרי
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showBefore, setShowBefore] = useState(true);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]" />
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
            <span className="text-xs text-gold/70 font-medium">✦ ההבדל ברור</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display font-black text-4xl md:text-5xl mb-4"
          >
            לפני — ואחרי <span className="text-gold-gradient">NOVA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/40 text-base max-w-lg mx-auto"
          >
            ההבדל בין אתר ישן לאתר פרמיום הוא ההבדל בין עסק שנשכח לעסק שנזכר.
          </motion.p>
        </div>

        {/* Before / After side by side — RTL: Before on right, After on left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative">
          {/* After (NOVA) — appears on the LEFT in RTL layout = visually right-to-left progression */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gold/5 rounded-3xl blur-xl" />
            <NewSite />
            <div className="mt-4 space-y-2.5">
              {[
                "עיצוב פרמיום שגורם ללקוחות להישאר",
                "מהיר במיוחד — ציון PageSpeed 95+",
                "מותאם מושלם לכל מכשיר",
                "מכונת לידים שעובדת 24/7",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="text-gold shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider arrow — points right → (RTL: from After toward Before = transformation direction) */}
          <div className="hidden md:flex absolute left-1/2 top-40 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-gold flex items-center justify-center glow-gold text-dark font-bold text-xl shadow-2xl"
            >
              →
            </motion.div>
          </div>

          {/* Before (old site) — appears on the RIGHT in RTL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-red-600/5 rounded-3xl blur-xl" />
            <OldSite />
            <div className="mt-4 space-y-2.5">
              {[
                "נראה לא מקצועי ומיושן",
                "טעינה איטית ומתסכלת",
                "לא מותאם למובייל",
                "לא מייצר לידים",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/40">
                  <span className="text-red-400 shrink-0">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
