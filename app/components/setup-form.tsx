

"use client"

import React, { useState } from "react"

const ModernButton = ({ 
  children, 
  type = "button", 
  variant = "default", 
  size = "md",
  className = "",
  ...props 
}: {
  children: React.ReactNode
  type?: "button" | "submit"
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  [key: string]: any
}) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 disabled:opacity-50"
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  }
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const ModernInput = ({ 
  id, 
  value, 
  onChange, 
  placeholder = "", 
  type = "text",
  required = false,
  className = "",
  ...props 
}: {
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  required?: boolean
  className?: string
  [key: string]: any
}) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={`
      w-full px-4 py-2.5 rounded-lg border border-gray-300 
      focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
      outline-none transition-all duration-200 bg-white
      placeholder:text-gray-400 ${className}
    `}
    {...props}
  />
)

const ModernLabel = ({ 
  htmlFor, 
  children, 
  className = "" 
}: {
  htmlFor: string
  children: React.ReactNode
  className?: string
}) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium text-gray-700 ${className}`}
  >
    {children}
  </label>
)

interface SetupFormProps {
  onSubmit: (data: { apiKey: string; email: string; phoneNumber: string }) => void
  initialData: { apiKey: string; email: string; phoneNumber: string }
}

export function SetupForm({ onSubmit, initialData }: SetupFormProps) {
  const [apiKey, setApiKey] = useState(initialData.apiKey)
  const [email, setEmail] = useState(initialData.email)
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ apiKey, email, phoneNumber })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="space-y-2">
        <ModernLabel htmlFor="apiKey">Ultravox API Key</ModernLabel>
        <ModernInput
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your API key"
          required
        />
      </div>

      <div className="space-y-2">
        <ModernLabel htmlFor="email">Email</ModernLabel>
        <ModernInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="space-y-2">
        <ModernLabel htmlFor="phone">Phone Number</ModernLabel>
        <ModernInput
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
        />
      </div>

      <ModernButton type="submit" className="w-full">
        Done
      </ModernButton>
    </form>
  )
}