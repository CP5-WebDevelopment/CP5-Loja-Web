import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-30 px-6 py-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        
     
        <Link to="/" className="text-xl font-black text-black tracking-wider uppercase">
          HAKARA SUSHI.
        </Link>

     
        <div className="flex gap-8 text-black font-extrabold text-sm uppercase tracking-wider">

          <Link to="/" className="hover:opacity-75 transition-opacity">
            Home
          </Link>

          <Link to="/cardapio" className="hover:opacity-75 transition-opacity">
            Menu
          </Link>

          <a href="#contato" className="hover:opacity-75 transition-opacity">
            Contato
          </a>

        </div>

      </nav>
    </header>
  )
}