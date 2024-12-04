import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "North-Facing Plots in Mukteshwar | Your Himalayan Escape Awaits",
  description: "Discover prime 250 sq. mt. plots in Mukteshwar, Uttarakhand, offering stunning north-facing views of the Himalayas. Explore key highlights including proximity to Nainital, Bhimtal, and more. Build your dream home with our custom construction services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
