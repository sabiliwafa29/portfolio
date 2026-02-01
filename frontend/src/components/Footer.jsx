const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-8 px-4 border-t-4 border-white">
      <div className="max-w-6xl mx-auto">
        {/* ASCII Art Divider */}
        <div className="text-center font-pixel text-sm mb-6 opacity-50">
          ████████████████████████████████████████████████████████████
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="font-retro text-lg">
            &lt;PORTFOLIO/&gt;
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a href="#home" className="font-pixel text-lg hover:underline">HOME</a>
            <a href="#projects" className="font-pixel text-lg hover:underline">PROJECTS</a>
            <a href="#contact" className="font-pixel text-lg hover:underline">CONTACT</a>
          </div>

          {/* Copyright */}
          <div className="font-pixel text-lg">
            © {currentYear} ALL RIGHTS RESERVED
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
