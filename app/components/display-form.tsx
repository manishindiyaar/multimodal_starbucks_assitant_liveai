"use client"

import React from "react"

const ModernButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "default",
  size = "md",
  ...props 
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  [key: string]: any
}) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 disabled:opacity-50"
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "bg-gray-200 text-gray-700 hover:bg-gray-300"
  }
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const ModernLabel = ({ 
  children, 
  className = "" 
}: {
  children: React.ReactNode
  className?: string
}) => (
  <label className={`block text-sm font-medium text-gray-700 ${className}`}>
    {children}
  </label>
)

interface DisplayInfoProps {
  info: {
    apiKey: string
    email: string
    phoneNumber: string
  }
  onEdit: () => void
  onClose: () => void
}

export function DisplayInfo({ info, onEdit, onClose }: DisplayInfoProps) {
  return (
    <div className="
      bg-white rounded-xl shadow-xl p-6 
      max-w-md w-full
      border border-gray-100
      relative
      animate-in fade-in-0 zoom-in-95
    ">
      <ModernButton
        onClick={onClose}
        variant="outline"
        size="sm"
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center p-0"
      >
        ×
      </ModernButton>

      <h2 className="
        text-xl font-semibold text-gray-900 
        border-b border-gray-200 pb-3 mb-6
      ">
        Your Information
      </h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <ModernLabel>API Key</ModernLabel>
          <div className="
            w-full px-4 py-2.5 rounded-lg border border-gray-300 
            text-gray-900 break-all bg-gray-50
          ">
            {info.apiKey}
          </div>
        </div>

        <div className="space-y-2">
          <ModernLabel>Email</ModernLabel>
          <div className="
            w-full px-4 py-2.5 rounded-lg border border-gray-300 
            text-gray-900 bg-gray-50
          ">
            {info.email}
          </div>
        </div>

        <div className="space-y-2">
          <ModernLabel>Phone Number</ModernLabel>
          <div className="
            w-full px-4 py-2.5 rounded-lg border border-gray-300 
            text-gray-900 bg-gray-50
          ">
            {info.phoneNumber}
          </div>
        </div>
      </div>

      <ModernButton 
        onClick={onEdit}
        className="w-full mt-6"
      >
        Edit Information
      </ModernButton>
    </div>
  )
}

export const popupAnimations = `
  @keyframes fade-in-0 {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes zoom-in-95 {
    from { transform: scale(0.95); }
    to { transform: scale(1); }
  }
  
  .animate-in {
    animation: fade-in-0 150ms ease-out, 
               zoom-in-95 150ms ease-out;
  }
`