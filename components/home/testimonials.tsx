"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Homeowner at Shivyan heights",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content:
      "Buying our home from Apex Home was the best decision we ever made. The quality of construction, attention to detail, and the seamless buying process exceeded all our expectations. We couldn't be happier!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Investor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    content:
      "As an investor, I look for developers who deliver on their promises. Apex Home has consistently shown transparency, timely delivery, and excellent returns. They've earned my trust for future investments.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anil & Sunita Gupta",
    role: "Retired Couple",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    content:
      "After years of searching, we found our perfect retirement home with Apex Home. The peaceful location, modern amenities, and helpful staff made our transition smooth and enjoyable.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 uppercase tracking-[0.2em] text-sm font-medium">
            Testimonials
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="h-12 w-12 text-primary-foreground/30 absolute top-8 left-8" />

            <div className="text-center">
              {/* Content */}
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 max-w-2xl mx-auto mt-8">
                {'"'}
                {currentTestimonial.content}
                {'"'}
              </p>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-foreground/30"
                />
                <h4 className="mt-4 font-serif text-xl font-semibold">
                  {currentTestimonial.name}
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  {currentTestimonial.role}
                </p>
                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary-foreground w-6"
                        : "bg-primary-foreground/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
