import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section className="fixed bottom-0 left-0 right-0 w-full bg-black z-50">
      <div className="relative container w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="font-bold text-lg text-white hover:text-blue-500 transition duration-300">
          Nimbus
        </Link>

        {/* Centered "Powered by" */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-gray-300 hover:text-blue-500 transition duration-300">
            Powered by{" "}
            <Link
              to=""
              className="font-semibold text-gray-700 hover:text-blue-500 transition duration-300"
            >
              QORSYN
            </Link>
          </span>
        </div>

        {/* Nav links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="font-bold text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-bold text-gray-700 hover:text-blue-500 transition duration-300"
              >
                Features
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
