"use client"

import React from "react"
import { SetupForm } from "@/components/setup-form"

const ModernDialog = ({ 
  open, 
  onOpenChange, 
  children 
}: { 
  open: boolean
  onOpenChange: () => void
  children: React.ReactNode
}) => {
  if (!open) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onOpenChange}
    >
      <div 
        className="animate-in fade-in-0 zoom-in-95"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

const ModernDialogContent = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string
}) => (
  <div 
    className={`
      bg-white rounded-xl shadow-xl w-full max-w-md 
      mx-4 sm:mx-0 overflow-hidden
      ${className}
    `}
  >
    {children}
  </div>
)

const ModernDialogHeader = ({ 
  children 
}: { 
  children: React.ReactNode
}) => (
  <div className="px-6 pt-6 pb-4 border-b border-gray-200">
    {children}
  </div>
)

const ModernDialogTitle = ({ 
  children 
}: { 
  children: React.ReactNode
}) => (
  <h2 className="text-xl font-semibold text-gray-900">
    {children}
  </h2>
)

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { apiKey: string; email: string; phoneNumber: string }) => void
  initialData: { apiKey: string; email: string; phoneNumber: string }
}

export function Modal({ isOpen, onClose, onSubmit, initialData }: ModalProps) {
  return (
    <ModernDialog open={isOpen} onOpenChange={onClose}>
      <ModernDialogContent>
        <ModernDialogHeader>
          <ModernDialogTitle>Setup Information</ModernDialogTitle>
        </ModernDialogHeader>
        <div className="p-6">
          <SetupForm onSubmit={onSubmit} initialData={initialData} />
        </div>
      </ModernDialogContent>
    </ModernDialog>
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