import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-[#DC0B34] text-white flex flex-col justify-between font-sans overflow-x-hidden">

            <Navbar />

            <main className="flex-grow flex items-center justify-center">
                <h2 className="text-2xl font-bold">Estrutura Inicial da Home</h2>
            </main>

            <Footer />

        </div>
    )
}