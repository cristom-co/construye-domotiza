import Navbar from './components/Navbar';
import Service from "./components/Service";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1">
        <Service bg="bg-demolicion.jpg" title="Servicio de demolición" />
        <Service bg="bg-drywall.jpg" title="Construcción en seco" />
        <Service bg="bg-domotica.webp" title="Domótica" />
      </main>

      <Footer />

    </div>
  );
}
