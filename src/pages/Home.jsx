import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-[#DC0B34] text-white flex flex-col justify-between font-sans overflow-x-hidden">

            <Navbar />

            <section className="relative flex flex-col items-center justify-center flex-grow px-4 pt-24 pb-12 max-w-7xl mx-auto w-full">

                <div className="relative w-full flex items-center justify-center my-auto py-12">

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase text-center select-none w-full leading-none z-0">
                        HAKARA SUSHI.
                    </h1>

                </div>

                <div className="z-25 mt-6 text-center">
                    <Link
                        to="/cardapio"
                        className="inline-block bg-[#F0E8DF] text-[#DC0B34] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
                    >
                        Ver Cardápio
                    </Link>
                </div>

            </section>

            <Footer />

        </div>
    )
}