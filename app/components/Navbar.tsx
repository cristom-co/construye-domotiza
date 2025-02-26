// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image'; // Importa el componente Image de Next.js

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center p-3 text-gray-500 gap-10 h-[100px]">
            <Image
                src="/logo.png" // Ruta de tu logo (debe estar en la carpeta public)
                alt="Logo"
                width={135} // Ancho del logo
                height={135} // Alto del logo
                className="" // Estilo opcional para el logo
            />
        </nav>
    );
};

export default Navbar;