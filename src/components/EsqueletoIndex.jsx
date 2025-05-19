// components/CarruselProgramaSkeleton.jsx
import { useEffect, useState } from "react";
import './EsqueletoIndex.css';

export default function CarruselProgramaSkeleton() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2000); // Simula carga
    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return (
<div class="carousel-col">
    <div id="carouselSentimiento" class="carousel slide carousel-fade mt-4" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src='/loading.gif' class="d-block w-100" alt="Imagen 1" />
            </div>
        </div>
    </div>
</div>
    );
  }

  // Si ya tienes el contenido en Index.astro, simplemente no renderices nada más
return (
<div class="carousel-col">
    <div id="carouselSentimiento" class="carousel slide carousel-fade mt-4" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src='/1.jpg' class="d-block w-100" alt="Imagen 1" />
            </div>
            <div class="carousel-item">
                <img src='/2.jpg' class="d-block w-100" alt="Imagen 2" />
            </div>
            <div class="carousel-item">
                <img src='/3.jpg' class="d-block w-100" alt="Imagen 3" />
            </div>
            <div class="carousel-item">
                <img src='/4.jpg' class="d-block w-100" alt="Imagen 4" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselSentimiento" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselSentimiento" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</div>
);
}
