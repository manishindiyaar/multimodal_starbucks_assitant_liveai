"use client"

import { useState } from "react"
import Button from "@/components/Button"
import Modal from "@/components/Model"


export default function Connect() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    
        <Button onClick={() => setIsModalOpen(true)}>if not working just message us</Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
  )
}

