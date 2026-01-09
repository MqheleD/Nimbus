import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        /* 'fixed bottom-0' pins it to the bottom. 
           'w-full' ensures it spans the screen width. */
        <section className="fixed bottom-0 left-0 w-full bg-none z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Wrapping the brand name in a Link is best practice */}
                <Link to="/" className="font-bold text-l">
                    Nimbus
                </Link>
                
                <nav>
                    <ul className="flex space-x-6"> 
                        <li> 
                            <Link to="/" className="font-bold text-gray-700 hover:text-blue-500 transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="font-bold text-gray-700 hover:text-blue-500 transition duration-300">
                                Features
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}