"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SetupIcon } from "@/components/setup-icon"
import { Modal } from "@/components/form-model" 
import { DisplayInfo } from "@/components/display-form" 

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInfoVisible, setIsInfoVisible] = useState(false) // New state for DisplayInfo visibility
  const [info, setInfo] = useState({
    apiKey: "",
    email: "",
    phoneNumber: "",
  })

  const handleSubmit = (data: typeof info) => {
    setInfo(data)
    setIsModalOpen(false)
    setIsInfoVisible(true) // Show DisplayInfo after submission
  }

  const handleCloseInfo = () => {
    setIsInfoVisible(false) // Hide DisplayInfo when close is clicked
  }

  return (
    <>
      <header className="
        fixed top-0 z-50 w-full 
        bg-white border-b border-gray-100 
        shadow-sm
      ">
        <div className="
          flex items-center justify-between 
          px-4 md:px-6 h-[72px] 
          max-w-[1440px] mx-auto
        ">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/starbuck.svg" 
                alt="Logo" 
                width={51} 
                height={51} 
                className="h-[51px] w-[51px]" 
                priority 
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="#" 
                className="
                  text-md font-semibold text-gray-600 
                  hover:text-indigo-600 
                  transition-colors duration-200
                "
              >
                Powered by Kaldi Assistant
              </Link>
            </nav>
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="
                text-md font-semibold text-gray-600 
                hover:text-indigo-600 
                transition-colors duration-200
              "
            >
              <SetupIcon /> 
            </button>
          </div>
        </div>

        {/* DisplayInfo appears below the navbar when visible */}
        {isInfoVisible && (
          <div className="
            fixed top-[72px] left-0 right-0 
            flex justify-center 
            px-4 pt-4
            z-40
          ">
            <DisplayInfo 
              info={info} 
              onEdit={() => setIsModalOpen(true)} 
              onClose={handleCloseInfo} // Pass the close handler
            />
          </div>
        )}
      </header>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmit} 
        initialData={info} 
      />

      {/* Spacer to prevent content from being hidden under fixed elements */}
      {isInfoVisible && (
        <div className="h-[300px]"></div>
      )}
    </>
  )
}