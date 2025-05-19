// components/CarruselProgramaSkeleton.jsx
import { useEffect, useState } from "react";
import './EsqueletoIndex.css';
import { SITE_BASE } from "../config";

export default function CarruselProgramaSkeleton() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2000); // Simula carga
    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return (
        <img src='/welcome.jpg' alt="Bienvenida" class="img-fluid align-right" />
    );
  }

  // Si ya tienes el contenido en Index.astro, simplemente no renderices nada más
return (
<img src='/welcome.jpg' alt="Bienvenida" class="img-fluid align-right" />
);
}
