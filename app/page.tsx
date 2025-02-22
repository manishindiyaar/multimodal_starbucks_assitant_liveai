
'use client'; // Client-side navigation

import { useRouter } from 'next/navigation'; // For client-side routing in Next.js App Router
import React from 'react';
import GoogleAuth  from '@/app/components/GoogleAuth';

export default function LandingPage() {
  const router = useRouter();

  const handleStartApp = () => {
    router.push('/app'); // Redirect to the app page
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-4">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
        Welcome to the DriveThrough Demo
       
      </h1>
      
      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">
        Experience an interactive and dynamic AI-powered website. Order your favorite items with ease using our innovative drive-thru speaker system!
      </p>

      
      
      {/* Start App Button */}
      <button
        onClick={handleStartApp}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
      >
        Start App
      </button>

      {/* <GoogleAuth /> */}
      
      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm">
        Powered by Next.js & ultravox-client
      </footer>

      <div>
      <h1>My React App with Supabase</h1>
      
    </div>
    </main>
  );
}
