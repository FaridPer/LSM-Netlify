// components/CarruselProgramaSkeleton.jsx
import { useEffect, useState } from "react";
import './EsqueletoIndex.css';

export default function CarruselProgramaSkeleton() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1000); // Simula carga
    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return (
      <main className="container my-4 flex-grow-1">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h1 className="mb-3">Plataforma lengua de señas mexicana</h1>
            <p className="lead">
              En este curso de lengua de señas mexicana aprenderás a aplicar los fundamentos de la comunicación en señas, con el fin de fomentar la inclusión, la accesibilidad y la empatía hacia personas con discapacidad auditiva.
            </p>

            <div className="carousel-container mt-4">
              <div className="carousel-col">{/* Placeholder */}</div>
              <div className="programa-col ms-4">
                <img alt="Bienvenida" className="img-fluid align-right" />
                <div className="programa-curso mt-5">{/* Placeholder */}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Si ya tienes el contenido en Index.astro, simplemente no renderices nada más
  return null;
}
