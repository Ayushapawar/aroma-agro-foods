import "./globals.css";

export const metadata = {
  title: "Aroma Agro Foods — Nourish Naturally, Live Vibrantly",
  description:
    "Aroma Agro Foods offers premium 100% natural Moringa Powder and healthy food products sourced from the finest Indian farms.",
  keywords: [
    "Moringa Powder",
    "Natural food products",
    "Aroma Agro Foods",
    "Healthy superfood",
    "Made in India",
  ],
  openGraph: {
    title: "Aroma Agro Foods — Nourish Naturally, Live Vibrantly",
    description: "Premium 100% pure Moringa Powder and natural food products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
