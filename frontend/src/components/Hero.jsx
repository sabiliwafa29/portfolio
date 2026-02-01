import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "WELCOME TO MY PORTFOLIO"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="text-center max-w-4xl">
        {/* Retro Border Box */}
        <div className="border-4 border-black p-8 md:p-12 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Typing Effect Title */}
          <h1 className="font-retro text-2xl md:text-4xl mb-6 min-h-[2.5em]">
            {displayText}
            <span className="animate-pulse">_</span>
          </h1>
          
          {/* Decorative Line */}
          <div className="flex justify-center items-center gap-2 my-6">
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-2 h-2 bg-black rotate-45"></div>
            <div className="w-8 h-1 bg-black"></div>
          </div>
          
          {/* Description */}
          <p className="font-pixel text-2xl md:text-3xl mb-8 leading-relaxed">
            I'm a developer who loves creating<br />
            beautiful and functional websites<br />
            with a retro twist.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="font-pixel text-xl px-8 py-3 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="font-pixel text-xl px-8 py-3 bg-white text-black border-4 border-black hover:bg-black hover:text-white transition-all duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              CONTACT ME
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <span className="font-pixel text-xl">▼ SCROLL DOWN ▼</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
