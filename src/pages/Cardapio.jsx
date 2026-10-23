import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Cardapio() {
    const pratos = [
    {
      id: 1,
      titulo: "Combinado Hakara Special",
      descricao: "20 peças selecionadas pelo chef entre sashimis de salmão, atum, niguiris e hossomakis.",
      preco: "R$ 129,90",
      imagem: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      titulo: "Hot Roll Especial",
      descricao: "8 unidades de sushi recheado com salmão e cream cheese, empanado e frito com molho tarê.",
      preco: "R$ 49,90",
      imagem: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      titulo: "Temaki de Salmão Trufado",
      descricao: "Cone de alga crocante recheado com arroz, cubos de salmão fresco, azeite trufado e cebolinha.",
      preco: "R$ 38,90",
      imagem: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
    }
  ]

    return (
    <div className="min-h-screen bg-[#F0E8DF] text-zinc-900 flex flex-col justify-between font-sans">
      
      <Navbar />

      {/* Conteudo*/}
      <main className="max-w-7xl mx-auto px-6 py-32 w-full flex-grow">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#DC0B34]">
            Nosso Cardápio
          </h1>
          <p className="text-zinc-700 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Explore os melhores sabores da culinária japonesa preparados artesanalmente com ingredientes frescos e selecionados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pratos.map((prato) => (
            <Card 
              key={prato.id}
              titulo={prato.titulo}
              descricao={prato.descricao}
              preco={prato.preco}
              imagem={prato.imagem}
            />
          ))}
        </div>

      </main>

      <Footer />

    </div>
  ) 
}