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

      {/* Conteúdo*/}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-xl font-black uppercase text-[#DC0B34] tracking-wide">
            {titulo}
          </h3>
          <p className="text-zinc-600 text-sm mt-2 leading-relaxed">
            {descricao}
          </p>
        </div>

        {/* Preço e Botão de Pedir */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
          <span className="text-lg font-black text-zinc-900">
            {preco}
          </span>
          <button className="bg-[#DC0B34] text-white text-xs font-extrabold uppercase px-4 py-2 rounded-full hover:bg-black transition-colors">
            Pedir
          </button>
        </div>


      </div>

    </div>
  )
}