export default function Footer() {
  return (
    <footer id="contato" className="bg-[#F0E8DF] text-zinc-900 py-16 px-6 lg:px-16 w-full border-t-4 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-[#DC0B34] uppercase tracking-wider">
            HAKARA SUSHI.
          </h3>

          <p className="text-zinc-700 text-sm leading-relaxed">
            A verdadeira tradição e arte da culinária japonesa com ingredientes selecionados e cortes precisos.
          </p>
        </div> 

        <div className="space-y-3">
          <h4 className="text-lg font-bold text-zinc-900 uppercase">Horário de Atendimento</h4>
          <p className="text-zinc-700 text-sm">
            	Seg - Sex: 6:00 às 18:00
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-bold text-zinc-900 uppercase">Contato & Endereço</h4>
          <p className="text-zinc-700 text-sm">
            	Avenida Paulista
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-300 mt-12 pt-6 text-center text-xs text-zinc-500">
        Hakara Sushi. Todos os direitos reservados.</div>



    </footer>
  )
}