import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="stagger-children">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">New Arrivals 2024</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Tech That
              <br />
              <span className="gradient-text">Inspires</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
              Discover premium electronics and gadgets designed to elevate your
              everyday experience. Innovation meets elegance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="btn-hero group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" className="btn-hero-outline">
                  Explore Categories
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.9</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=800&auto=format&fit=crop&q=80"
                alt="Featured Product"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                crossOrigin="anonymous"
                loading="lazy"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-10 -left-10 bg-card p-4 rounded-2xl shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                  <span className="text-2xl">🎧</span>
                </div>
                <div>
                  <p className="font-semibold">Best Seller</p>
                  <p className="text-sm text-muted-foreground">This week</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-10 bg-card p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    2-day shipping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
