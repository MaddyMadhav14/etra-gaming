import "./globals.css";

export const metadata = {
  title: "ETRA Animation & Game Development",
  description: "Animation, game development, VFX, CGI and interactive experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}