import Image from "next/image";

const Footer = () => {
    return (
        <footer className="fixed bottom-4 right-4">

            <a
                href="https://wa.me/3166355792?text=Hola,%20quiero%20más%20información!"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white py-3 px-5 rounded-full shadow-lg flex items-center gap-2 hover:scale-110 transition-transform z-50"
            >
                <Image
                    src="/wp.png"
                    alt="WhatsApp"

                    width={20}
                    height={20}
                />
                <span className="font-medium">Escríbenos por WhatsApp aqui!</span>
            </a>


        </footer>


    )
}

export default Footer;