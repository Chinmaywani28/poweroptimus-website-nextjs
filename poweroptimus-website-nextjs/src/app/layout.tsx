import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "./i18n/i18n.Provider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Energy Management System & Environmental Monitoring Systems ",
  description: "PowerOptimus is a data-driven energy management & environmental monitoring system which provides real-time insights to improve efficiency and sustainability.",
  keywords: ["energy management system","environmental monitoring system"],
  alternates: {
    canonical: "https://poweroptimus.com",
  },
  icons: {
    icon: "/faviconn.ico", // or "/favicon.png" or "/icon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={`${geistSans.variable} ${geistMono.variable}`}>
    //     {children}
    //   </body>
    // </html>

    // <html lang="en">
    //   <head>
    //     <meta name="google-site-verification" content="-4Q1Sz981Q_ffWdCyYiVk_MJ0qCxkRL4c8Q6cfrn-jU" />
    //     <meta name="p:domain_verify" content="40c99aa5436aedbbc5e0f1ed8d36091f" />
    //     <link rel="icon" href="/public/favicon-32x32.png" sizes="any" />
    //   </head>
    //   <body >
    //     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
    //     <I18nProvider>
    //       {/* <LayoutWrapper> */}
    //         {children}
    //       {/* </LayoutWrapper> */}
    //     </I18nProvider>
    //     {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    //   </body>
    // </html>
    
    <html lang="en">
      <head>
          <meta name="p:domain_verify" content="dd0368ec4340b715ce66fe9c9f63103f"/>
          {/* <meta
          name="google-site-verification"
          content="google3a2fc1f778abbb3c"
        /> */}

        <meta name="google-site-verification" content="5oPMjQENzouBRZgBrbM9rUKDThrGQ6reWFaA-ZbEolQ" />
          <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W7LVCGBG0F"
          strategy="afterInteractive"
        />


        </head>
      <body>
        
        <I18nProvider>
          {/* <LayoutWrapper>
            {children}
          </LayoutWrapper> */}
          <Navbar />
          <main>{children}</main>
        <ToastContainer position="top-right" autoClose={3000} aria-label={undefined} />

          <Footer />
        </I18nProvider>


        
      </body>
    </html>
  );
}
