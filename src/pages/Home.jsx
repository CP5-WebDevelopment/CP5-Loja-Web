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
                        HAKARA <span className="inline-block w-24 md:w-48 lg:w-64"></span> SUSHI.
                    </h1>
                </div>

            </section>

            <Footer />

        </div>
    )
}