import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import menuData from "./menus.json";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextPractice",
  description: "NextPractice app",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="kr" style={{}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ height: "100vh" }}
      >
        <div
          style={{
            width: "100%",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              width: "95%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {menuData.map((value) => {
              return (
                <Link
                  href={value.path}
                  style={{
                    padding: "10px",
                    color: "black",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  key={value.id}
                >
                  {value.title}
                </Link>
              );
            })}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
};

export default layout;
