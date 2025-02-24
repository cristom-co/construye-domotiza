import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <header>
        <Image
          aria-hidden
          src="/logo.png"
          alt="Logo"
          width={300}
          height={16}
        />

      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Image
          aria-hidden
          src="/demolicion.png"
          alt="Demolicion"
          width={300}
          height={16}
        />
        <Image
          aria-hidden
          src="/drywall.jpg"
          alt="Drywall"
          width={300}
          height={16}
        />
        <Image
          aria-hidden
          src="/domotica.jpeg"
          alt="Domotica"
          width={300}
          height={16}
        />
        <Image
          aria-hidden
          src="/asesor.png"
          alt="Asesor"
          width={300}
          height={16}
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://wa.me/3166355792?text=Hola,%20quiero%20más%20información!" target="_blank" className="text-green-400 font-bold ">
          Escríbenos por WhatsApp aqui!
        </a>
      </footer>
    </div>
  );
}
