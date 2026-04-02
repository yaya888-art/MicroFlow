import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MicroFlow - 微交互动画库",
  description: "为开发者提供高质量、可直接复用的微交互动画",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased overflow-x-hidden">
        <main className="min-h-screen bg-apple-secondary/30">
          {children}
        </main>
      </body>
    </html>
  );
}
