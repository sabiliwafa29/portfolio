import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Using Web3Forms - Get your free access key at https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0e299340-316c-429a-b5c5-1f144194c701', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setStatus({
          type: 'success',
          message: 'MESSAGE SENT SUCCESSFULLY! I\'LL GET BACK TO YOU SOON.'
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'ERROR SENDING MESSAGE. PLEASE TRY AGAIN.'
      })
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    { name: 'GITHUB', url: 'https://github.com/sabiliwafa29', icon: '⌘' },
    { name: 'LINKEDIN', url: 'https://linkedin.com/in/rosyad-wafa', icon: '◈' },
    { name: 'TWITTER', url: 'https://twitter.com/rosyadwafa02', icon: '✦' },
    { name: 'EMAIL', url: 'mailto:rosyadwafa02@gmail.com', icon: '✉' }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-retro text-2xl md:text-3xl mb-4">
            ═══ GET IN TOUCH ═══
          </h2>
          <p className="font-pixel text-xl">
            Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-retro text-lg mb-6">SEND MESSAGE</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-pixel text-lg block mb-2">NAME:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full font-pixel text-lg px-4 py-3 border-4 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="font-pixel text-lg block mb-2">EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full font-pixel text-lg px-4 py-3 border-4 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="Enter your email..."
                />
              </div>

              <div>
                <label className="font-pixel text-lg block mb-2">MESSAGE:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full font-pixel text-lg px-4 py-3 border-4 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
                  placeholder="Type your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full font-pixel text-xl px-8 py-3 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>

              {status.message && (
                <div className={`font-pixel text-lg p-4 border-4 ${
                  status.type === 'success' 
                    ? 'border-black bg-white' 
                    : 'border-black bg-black text-white'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div>
            <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h3 className="font-retro text-lg mb-6">FIND ME ONLINE</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-pixel text-xl flex items-center gap-4 p-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-150"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="border-4 border-black p-6 bg-black text-white">
              <h3 className="font-retro text-lg mb-4">QUICK INFO</h3>
              <div className="font-pixel text-lg space-y-2">
                <p>📍 Location: Surabaya, Indonesia</p>
                <p>💼 Status: Available for connect</p>
                <p>⏰ Response: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
