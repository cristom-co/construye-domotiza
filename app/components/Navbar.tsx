// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image'; // Importa el componente Image de Next.js

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center p-3 text-gray-500 gap-10 h-[100px]">
            {/* Enlaces a la izquierda */}
            <div className="flex space-x-4">
                <Link href="/" className="hover:text-gray-400 font-semibold">
                    Inicio
                </Link>
                <Link href="/servicios" className="hover:text-gray-400 font-semibold">
                    Servicios
                </Link>
            </div>

            {/* Logo en el centro */}
            <div>
                <Image
                    src="/logo.png" // Ruta de tu logo (debe estar en la carpeta public)
                    alt="Logo"
                    width={120} // Ancho del logo
                    height={120} // Alto del logo
                    className="" // Estilo opcional para el logo
                />
            </div>

            {/* Enlaces a la derecha */}
            <div className="flex space-x-4">
                <Link href="/obras" className="hover:text-gray-400 font-semibold">
                    Obras
                </Link>
                <Link href="/contacto" className="hover:text-gray-400 font-semibold">
                    Contacto
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;