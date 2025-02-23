import type { Metadata } from "next";
import Image from 'next/image';

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Kaldi",
  description: "AI agents in ecommerce and retail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Fathom - beautiful, simple website analytics --> */}
        <script src="https://cdn.usefathom.com/script.js" data-site="ONYOCTXK" defer></script>
        {/* <!-- / Fathom --> */}
      </head>
      <body className="bg-black text-white">
        
        
        {children}
      </body>
    </html>
  );
}
