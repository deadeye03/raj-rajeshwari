'use client'
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface FooterSectionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const FooterSection = ({ title, children, defaultOpen = false }: FooterSectionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="border-b border-gray-200 py-4 md:border-none">
            <div
                className="flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-medium text-gray-600">{title}</h3>
                <div className="md:hidden">
                    {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </div>
            </div>
            <div className={`mt-3 space-y-2 ${isOpen ? "block" : "hidden"} md:block`}>{children}</div>
        </div>
    )
}

export default FooterSection