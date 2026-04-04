import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

import warehouseExclusion1Img from "../assets/images/warehouse-exclusion-zones-1.jpg";
import warehouseExclusion2Img from "../assets/images/warehouse-exclusion-zones-2.jpg";
import warehouseExclusion3Img from "../assets/images/warehouse-exclusion-zones-3.jpg";
import warehouseBayImg from "../assets/images/warehouse-bay-markings.jpg";
import carparkImg from "../assets/images/auckland-car-park-line-marking.webp";
import carparkNightImg from "../assets/images/auckland-carpark-night.jpg";
import heroCarparkImg from "../assets/images/hero-carpark.png";
import warehouseImg from "../assets/images/auckland-warehouse.jpg";
import industrialImg from "../assets/images/industrial-marking.png";
import factoryImg from "../assets/images/auckland-factory-safety.jpg";
import hazardImg from "../assets/images/auckland-hazard-zones.jpg";
import pedestrianImg from "../assets/images/auckland-pedestrian-crossing.jpg";
import arrowsImg from "../assets/images/auckland-arrows-mobility.jpg";
import logisticsImg from "../assets/images/auckland-logistics-stencil.jpg";
import stencilImg from "../assets/images/auckland-stencil-visitor.jpg";
import sportsCourtRealImg from "../assets/images/sports-court-real.jpg";
import sportsCourtAucklandImg from "../assets/images/auckland-sports-court.jpg";
import sportsCourtImg from "../assets/images/sports-court.png";
import hopscotchImg from "../assets/images/real-hopscotch.jpg";
import snakesImg from "../assets/images/real-snakes-ladders.jpg";
import compassImg from "../assets/images/real-compass.jpg";
import numberGridImg from "../assets/images/real-number-grid.jpg";
import spaceTrackImg from "../assets/images/real-space-track.jpg";
import targetImg from "../assets/images/real-target.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const images: GalleryImage[] = [
  { src: carparkImg, alt: "Car park line marking with fresh white bay lines and wheel stops", category: "Car Parks" },
  { src: carparkNightImg, alt: "Commercial car park re-marking completed overnight with white bay lines", category: "Car Parks" },
  { src: heroCarparkImg, alt: "Professional car park line marking — clean white bays on asphalt", category: "Car Parks" },
  { src: warehouseExclusion1Img, alt: "Warehouse floor with red exclusion zones and yellow forklift lanes around truck bays", category: "Warehouses & Industrial" },
  { src: warehouseExclusion2Img, alt: "Red and yellow safety markings in warehouse — exclusion zones and pedestrian walkways", category: "Warehouses & Industrial" },
  { src: warehouseBayImg, alt: "New warehouse with orange storage bay markings on polished concrete floor", category: "Warehouses & Industrial" },
  { src: warehouseImg, alt: "Warehouse floor with yellow forklift lanes and pedestrian walkways", category: "Warehouses & Industrial" },
  { src: industrialImg, alt: "Industrial facility safety line marking — yellow walkway and hazard zones", category: "Warehouses & Industrial" },
  { src: factoryImg, alt: "Factory floor with red and yellow safety markings and exclusion zones", category: "Warehouses & Industrial" },
  { src: warehouseExclusion3Img, alt: "Ground-level view of red and yellow exclusion zone markings on warehouse concrete", category: "Safety Markings" },
  { src: hazardImg, alt: "Red exclusion and hazard zone markings at an industrial site", category: "Safety Markings" },
  { src: pedestrianImg, alt: "Freshly painted pedestrian crossing with white zebra stripes at industrial site", category: "Safety Markings" },
  { src: arrowsImg, alt: "Blue directional arrow and orange mobility bays with disability symbols at night", category: "Safety Markings" },
  { src: logisticsImg, alt: "Stencilled bay numbers and letters with safety lines at a logistics hub", category: "Stencilling & Signage" },
  { src: stencilImg, alt: "VISITOR PARKING stencilled in blue at a commercial car park", category: "Stencilling & Signage" },
  { src: sportsCourtAucklandImg, alt: "Multi-sport indoor court with blue floor and coloured line markings", category: "Sports Courts" },
  { src: sportsCourtRealImg, alt: "Indoor vinyl flooring multi-sport court with coloured line markings", category: "Sports Courts" },
  { src: sportsCourtImg, alt: "Sports court line marking project completed with high-visibility paint", category: "Sports Courts" },
  { src: hopscotchImg, alt: "Hopscotch playground markings painted on school court", category: "Playground Markings" },
  { src: snakesImg, alt: "Triple hopscotch playground marking painted on school grounds", category: "Playground Markings" },
  { src: compassImg, alt: "Compass rose playground marking painted at a New Zealand school", category: "Playground Markings" },
  { src: numberGridImg, alt: "Number grid educational floor marking for primary school playground", category: "Playground Markings" },
  { src: spaceTrackImg, alt: "Space track game painted on school playground surface", category: "Playground Markings" },
  { src: targetImg, alt: "Target game playground marking painted at a Canterbury school", category: "Playground Markings" },
];

const categories = ["All", "Car Parks", "Warehouses & Industrial", "Safety Markings", "Sports Courts", "Stencilling & Signage", "Playground Markings"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  usePageTitle({
    title: "Our Work | Line Marking Gallery | Line-Marking.co.nz",
    description: "See our completed line marking projects across Canterbury and Auckland — car parks, warehouses, sports courts, playgrounds, safety markings and stencilling.",
    path: "/gallery/",
  });

  const filtered = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev, closeLightbox]);

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="bg-blue-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" data-testid="text-gallery-title">Our Work</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Completed line marking projects across Canterbury and Auckland — car parks, warehouses, sports courts, playgrounds and more.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-md cursor-pointer group relative"
              onClick={() => setLightboxIndex(i)}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <p className="text-white text-xs px-2 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">{img.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-md p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-white/90 mb-4">Contact us for a free quote on any line marking project in Canterbury or Auckland.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/Contact/">
              <span className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors cursor-pointer" data-testid="button-gallery-cta">Get a Free Quote</span>
            </Link>
            <a href="tel:0224393344" className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors" data-testid="link-gallery-phone">Call: 022 439 3344</a>
          </div>
        </div>
      </div>

      {currentImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            data-testid="button-lightbox-close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-3 md:left-6 text-white hover:text-gray-300 transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={e => { e.stopPropagation(); goPrev(); }}
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-3 md:right-6 text-white hover:text-gray-300 transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={e => { e.stopPropagation(); goNext(); }}
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-md"
            onClick={e => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
            <p className="text-white/90 text-sm">{currentImage.alt}</p>
            <p className="text-white/50 text-xs mt-1">{(lightboxIndex ?? 0) + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
