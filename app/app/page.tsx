'use client';

import React, { useState, useEffect, useRef } from 'react';
import { startCall, endCall } from '@/lib/callFunctions';
import { demoConfig } from '@/app/demo-config';
import ProductDisplay from '@/app/components/ProductDisplay';
import OrderDetails from '@/app/components/OrderDetails';
import { Transcript } from 'ultravox-client';
import Navbar from '@/app/components/Navbar';

export default function Home() {
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [status, setStatus] = useState<string>('');
  const [isCallActive, setIsCallActive] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); 
  const videoRefe = useRef<HTMLVideoElement>(null); 
  

  // Auto-scroll transcripts
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcripts]);

  // Ensure video is paused and reset when not in call
  useEffect(() => {
    if (!isCallActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  }, [isCallActive]);

  

  const handleStartCall = async () => {
    if (videoRef.current) {
      videoRef.current.loop = true; // Enable looping
      videoRef.current.play(); // Play the video when Start Order is clicked
    }
    try {
      await startCall(
        {
          onTranscriptChange: (newTranscripts) => setTranscripts(newTranscripts || []),
          onStatusChange: (newStatus) => setStatus(newStatus || ''), // Fix applied here
          onDebugMessage: (msg) => console.log('Debug:', msg)
        },
        demoConfig.callConfig,
        true
      );
      setIsCallActive(true);
    } catch (error) {
      console.error('Failed to start call:', error);
    }
  };
  // End call handler (stops and resets video)
  const handleEndCall = async () => {
    try {
      await endCall();
      setIsCallActive(false);
      setStatus('');
      setTranscripts([]);
      if (videoRef.current) {
        videoRef.current.pause(); // Stop the video
        videoRef.current.currentTime = 0; // Reset to start
        videoRef.current.loop = false; // Disable looping when ending
      }
    } catch (error) {
      console.error('Failed to end call:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar/>
    

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 mt-10">
        <div className="flex gap-6">
          {/* Left Section - Menu (70%) */}
          <div className="w-[70%]">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <ProductDisplay />
            </div>
          </div>

          {/* Right Section - Order & Drive-Thru (30%) */}
          <div className="w-[30%] space-y-6 m-0 bg-black sticky left-1">
            {/* Order Details */}
            <div className="bg-gradient-to-br from-green-400 to-green-800 bg-opacity-75 shadow-inner border-2 border-gray-200 ">
              <h2 className=" bg-white/80 backdrop-blur-md border border-white/20 shadow-lg mb-4 text-gray-900 rounded-sm p-2 ">Your Order</h2>
              <OrderDetails />
            </div>

            {/* Drive-Thru Controls */}
            <div className="bg-black rounded-s shadow-sm p-4 ">
              <h2 className="text-lg text-gray-100 font-thin ">click to order with voice - start ordering</h2>
              
              {/* Call Controls */}
              <div className="mb-4">
                {!isCallActive ? (
                  <video
                    ref={videoRef}
                    src="/ai_memo.mp4" 
                    poster="/start-order-poster.jpg" 
                    className="w-full rounded-lg border-gray-300 cursor-pointer hover:shadow-xl" 
                    playsInline 
                    onClick={handleStartCall} 
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src="/ai_memo.mp4"
                    className="w-full rounded-lg  border-gray-300 cursor-pointer hover:shadow-xl" 
                    playsInline 
                    onClick={handleEndCall} 
                  />
                  
                )}
              </div>

              {/* Conversation */}
              {/* <div>
                <h3 className="text-sm font-medium text-gray-100 mb-2">Conversation</h3>
                <div 
                  ref={transcriptRef}
                  className="h-48 overflow-y-auto bg-gray-50 rounded-lg p-3 space-y-2"
                >
                  {transcripts.length === 0 ? (
                    <p className="text-gray-900 text-sm text-center">
                      
                    </p>
                  ) : (
                    transcripts.map((transcript, index) => (
                      <div 
                        key={index} 
                        className={`text-sm ${
                          transcript.speaker === 'agent' 
                            ? 'text-blue-700' 
                            : 'text-gray-900'
                        }`}
                      >
                        <span className="text-xs font-medium text-gray-700">
                          {transcript.speaker === 'agent' ? 'Dr. Donut:' : 'You:'}
                        </span>
                        <span className="ml-2">{transcript.text}</span>
                      </div>
                    ))
                  )}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


