import type { Metadata } from "next";
import { Heebo, Syne } from "next/font/google";
import "./globals.css";

// Heebo supports Hebrew + Latin with a premium modern look
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVA — סוכנות דיגיטל פרמיום",
  description: "זה לא עוד אתר. זה הפנים של העסק שלך. אנחנו בונים חוויות דיגיטליות שהופכות עסקים למותגים.",
  metadataBase: new URL("https://nova-agency.co.il"),
  openGraph: {
    title: "NOVA — סוכנות דיגיטל פרמיום",
    description: "זה לא עוד אתר. זה הפנים של העסק שלך.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${syne.variable}`}>
      <body className="noise bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
