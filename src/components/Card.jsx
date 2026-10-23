export default function Card({ imagem, titulo, descricao, preco }) {
  return (
    <div className="bg-white text-zinc-900 rounded-2xl overflow-hidden shadow-lg border-2 border-black flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      
      {/* Imagem Prato */}
      <div className="h-48 overflow-hidden bg-zinc-100 border-b-2 border-black">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}