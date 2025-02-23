import type React from "react"

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
    >
      {children}
    </button>
  )
}

export default Button

