import { useState, useEffect } from 'react'

/**
 * Custom hook for typewriter animation effect
 * @param text - The full text to display
 * @param speed - Typing speed in milliseconds per character (default: 50ms)
 * @returns The current displayed text with typewriter effect
 */
export const useTypewriter = (text: string, speed: number = 50): string => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        // Reset when text changes
        setDisplayedText('')
        setCurrentIndex(0)
    }, [text])

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, speed)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text, speed])

    return displayedText
}
