// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Мое Next.js приложение",
  description: "Практическая работа 1.3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}