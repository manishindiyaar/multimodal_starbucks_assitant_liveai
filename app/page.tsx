

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();

  const handleStartApp = () => {
    router.push('/app');
  };

  return (
    <>
      {/* Inject Google Fonts via <Head> */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        {/* Updated Font:  Inter for a modern, sleek look */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Main Container */}
      <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden text-gray-800 font-body">

        {/* Background GIF */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/HeroBg.jpg" // Replace with your GIF URL
            alt="Animated Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40" // Adjust opacity for less distraction
            priority
          />
        </div>

        {/* ========== HERO SECTION ========== */}
        <section className="relative w-full h-[85vh] flex flex-col justify-center items-center overflow-hidden z-10">
          {/* Large Hero Background (Placeholder image) */}
          {/* <Image
            src=""
            alt="Hero Background"
            fill
            className="object-cover object-center brightness-75 hero-img"
            priority
          /> */}

          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Text & CTA */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 animate-heroFadeDown">
            {/*
              Gradient text + modern font.
            */}
            <h1 className="text-6xl md:text-7xl font-heading bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent drop-shadow-md mb-5">
              Kaldi
            </h1>
            <p className="text-xl md:text-1m text-white drop-shadow-sm max-w-xl mx-auto mb-8 font-semibold">
              Let your voice set the table—order made easy with ai.
            </p>
            <button
              onClick={handleStartApp}
              className="bg-gradient-to-r from-teal-500 to-lime-500 text-white font-bold py-3 px-8 rounded-full shadow-md
                         transition-transform duration-300 hover:scale-105 animate-heroButtonPulse"
            >
              Start App
            </button>
          </div>
        </section>

        {/* ========== FLOATING ELEMENTS ========== */}
        {/* Floating Circle 1 */}
        <div className="absolute top-12 left-8 animate-beanFloatSlow z-10">
          <svg
            width="50"
            height="50"
            viewBox="0 0 512 512"
            fill="#9C5B3C"
            className="opacity-40"
          >
            <circle cx="256" cy="256" r="256" />
          </svg>
        </div>
        {/* Floating Circle 2 */}
        <div className="absolute bottom-16 right-12 animate-beanFloatFast z-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 512 512"
            fill="#7D4B3B"
            className="opacity-40"
          >
            <circle cx="256" cy="256" r="256" />
          </svg>
        </div>
       

        {/* Additional Background Elements (Example) */}
        <div className="absolute top-1/4 right-10 animate-pulse text-gray-300 text-4xl z-10">
          ☕
        </div>
        <div className="absolute bottom-1/3 left-5 animate-bounce text-gray-300 text-5xl z-10">
          ✨
        </div>

        {/* ========== WAVE DIVIDER ========== */}
        <div className="w-full -mt-1 overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[40px]"
            viewBox="0 0 120 28"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0v28h120V0L60 20 0 0z"
              fill="#ffffff"
              fillOpacity="1"
            />
          </svg>
        </div>

        {/* ========== WHY KALDI ========== */}
        <section className="max-w-6xl w-full px-6 py-10 text-center relative z-20">
          <h2 className="text-4xl md:text-5xl font-heading text-green-100 mb-6 animate-fadeInDown">
            Why Kaldi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-lg bg-white shadow-lg transform transition-all duration-300
                            hover:scale-105 hover:shadow-2xl animate-fadeInUp">
              <h3 className="text-xl font-semibold text-green-700 mb-3 font-heading">
                Voice-First Ordering
              </h3>
              <p className="text-gray-600">
                Talk to Kaldi in your language of choice, and your order is placed in seconds—no
                screens or complicated menus.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-lg bg-white shadow-lg transform transition-all duration-300
                            hover:scale-105 hover:shadow-2xl animate-fadeInUp animation-delay-200">
              <h3 className="text-xl font-semibold text-green-700 mb-3 font-heading">
                Calls & Emails Automated
              </h3>
              <p className="text-gray-600">
                Kaldi instantly calls the restaurant to confirm your order and sends an email
                receipt to both you and them.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-lg bg-white shadow-lg transform transition-all duration-300
                            hover:scale-105 hover:shadow-2xl animate-fadeInUp animation-delay-400">
              <h3 className="text-xl font-semibold text-green-700 mb-3 font-heading">
                Less Contact, More Speed
              </h3>
              <p className="text-gray-600">
                Keep your hands free and your mind at ease. No germy kiosk touchscreens—just
                talk and go.
              </p>
            </div>
          </div>
        </section>

        {/* ========== MULTILINGUAL & FLEXIBILITY ========== */}
        <section className="max-w-6xl w-full px-6 py-10 md:py-16 text-center relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-r from-green-100 to-green-50
                            rounded-lg shadow hover:shadow-xl transform transition duration-300 hover:scale-[1.01] animate-fadeInLeft">
              <h3 className="text-3xl font-heading text-green-700 mb-4">
                Multilingual. No Barriers.
              </h3>
              <p className="text-gray-700 text-lg">
                Kaldi speaks many languages—English, Spanish, French, and more. So no matter
                the user, ordering is a breeze.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow animate-fadeInRight">
              {/* Replace with a relevant image, e.g. an AI or voice assistant visual */}
              <Image
                src="/MultilingualAI.jpeg"
                alt="Kaldi Voice Assistant"
                fill
                className="object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </section>

        {/* ========== HIGHLIGHT AI TECH ========== */}
        <section className="max-w-6xl w-full px-6 py-10 md:py-16 text-center relative z-20">
          <h2 className="text-4xl md:text-5xl font-heading text-green-100 mb-8 animate-fadeInDown">
            Smart AI, Human Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg animate-fadeInLeft">
              <Image
                src="/Our_Kiosk.jpeg"
                alt="AI in Action"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg animate-fadeInRight">
              <h3 className="text-2xl md:text-3xl font-heading text-green-700 mb-4">
                Built for Real Conversations
              </h3>
              <p className="text-gray-700 text-lg">
                Kaldi understands natural speech, so you can order like you’re talking to a friend.
                No complicated steps, just simple dialogue.
              </p>
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="text-center my-12 md:my-16 relative z-20">
          <h2 className="text-4xl md:text-5xl font-heading text-green-800 mb-4 animate-fadeInDown">
            Ready to Experience Kaldi?
          </h2>
          <p className="text-gray-200 mb-8 md:mb-12 text-lg md:text-xl max-w-xl mx-auto animate-fadeInUp">
            Let our AI handle the calls and emails so you can focus on enjoying your meal—no lines,
            no fuss.
          </p>
          <button
            onClick={handleStartApp}
            className="bg-gradient-to-r from-teal-500 to-lime-500 text-white font-bold py-4 px-8 rounded-full
                       shadow-md transition-transform duration-300 hover:scale-105 animate-heroButtonPulse"
          >
            Get Started
          </button>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="w-full bg-white py-6 text-center border-t border-gray-200 relative z-20">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kaldi.
          </p>
        </footer>
      </main>

      {/* ====================== CUSTOM ANIMATIONS & FONTS ====================== */}
      <style jsx global>{`
        /* Importing Google Fonts in <Head> above,
           now we define them in CSS classes for easy usage */
        html,
        body {
          margin: 0;
          padding: 0;
        }

        /* Assign Inter as the default (body) */
        .font-body {
          font-family: 'Inter', sans-serif;
        }

        /* Use Inter for all headings as well for consistency and a modern look */
        .font-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700; /* Make sure headings are bold */
        }

        /* Hero fade-down */
        @keyframes heroFadeDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-heroFadeDown {
          animation: heroFadeDown 1.2s ease forwards;
        }

        /* Button pulse for hero CTA */
        @keyframes heroButtonPulse {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.05);
          }

          100% {
            transform: scale(1);
          }
        }

        .animate-heroButtonPulse {
          animation: heroButtonPulse 2s ease-in-out infinite;
        }

        /* Floating circles and icon animations */
        @keyframes beanFloatSlow {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px) rotate(-3deg);
          }

          100% {
            transform: translateY(0);
          }
        }

        @keyframes beanFloatFast {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-25px) rotate(5deg);
          }

          100% {
            transform: translateY(0);
          }
        }

        @keyframes cupFloat {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0);
          }
        }

        .animate-beanFloatSlow {
          animation: beanFloatSlow 4s ease-in-out infinite;
        }

        .animate-beanFloatFast {
          animation: beanFloatFast 3s ease-in-out infinite;
        }

        .animate-cupFloat {
          animation: cupFloat 5s ease-in-out infinite;
        }

        /* Fade/Slide Keyframes (sections/cards) */
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease forwards;
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease forwards;
        }

        /* Delays for staggered animations (cards, testimonials, etc.) */
        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        /* Subtle zoom on hero image */
        .hero-img {
          animation: heroImgZoom 10s ease-in-out infinite alternate;
        }

        @keyframes heroImgZoom {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.03);
          }
        }
      `}</style>
    </>
  );
}