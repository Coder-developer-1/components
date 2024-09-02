
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm h-16' : 'bg-background h-24'
      }`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <h1 className={`font-bold transition-all duration-300 ease-in-out ${
            isScrolled ? 'text-xl' : 'text-3xl'
          }`}>
            Sticky Header
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="ghost">Home</Button></li>
              <li><Button variant="ghost">About</Button></li>
              <li><Button variant="ghost">Contact</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-32">
        <h2 className="text-2xl font-bold mb-4">Welcome to our page</h2>
        {[...Array(20)].map((_, index) => (
          <p key={index} className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.
          </p>
        ))}
      </main>
    </div>
  )
}
