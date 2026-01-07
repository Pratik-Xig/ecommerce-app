import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { deals } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const DealsSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Flash Deals</h2>
            <p className="text-muted-foreground">Don't miss out on these amazing offers</p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">Ends in:</p>
            <div className="flex gap-2">
              {[
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds },
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="bg-foreground text-background px-4 py-2 rounded-xl text-center min-w-[60px]">
                    <p className="text-2xl font-bold">{formatTime(item.value)}</p>
                    <p className="text-xs opacity-70">{item.label}</p>
                  </div>
                  {index < 2 && <span className="text-2xl font-bold self-center">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/deals"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Deals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
