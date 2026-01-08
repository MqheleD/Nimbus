export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-red-400 to-blue-500 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-10">Welcome to Nimbus</h1>
                {/* <p className="text-lg md:text-2xl mb-8">Your gateway to seamless cloud solutions</p> */}
                <a href="#get-started" className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">Get Started</a>
            </div>
        </section>
    );
}