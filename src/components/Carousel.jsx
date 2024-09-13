"use client";

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";

export function Carousel({ slides = [], interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !slides.length) return;

    let intervalId;

    function nextSlide() {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }

    function startAutoSlide() {
      intervalId = setInterval(nextSlide, interval);
    }

    function stopAutoSlide() {
      clearInterval(intervalId);
    }

    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [slides.length, interval]);

  return (
    <div ref={carouselRef} className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {slide.title && <h1 className="text-4xl font-bold">{slide.title}</h1>}
              {slide.description && <p className="text-muted-foreground text-lg">{slide.description}</p>}
              <div className="flex gap-4">
                {slide.primaryLink && (
                  <Link
                    href={slide.primaryLink.url}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    {slide.primaryLink.text}
                  </Link>
                )}
                {slide.secondaryLink && (
                  <Link
                    href={slide.secondaryLink.url}
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    {slide.secondaryLink.text}
                  </Link>
                )}
              </div>
            </div>
            {slide.imageUrl && (
              <img
                src={slide.imageUrl}
                width="600"
                height="400"
                alt={slide.imageAlt || ''}
                className="mx-auto rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}