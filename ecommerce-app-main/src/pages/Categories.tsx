import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { categories, products } from '@/data/products';
import { motion } from 'framer-motion';

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of electronics and gadgets organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const categoryProducts = products.filter(p => p.category === category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <span className="text-4xl mb-2 block">{category.icon}</span>
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                      <p className="opacity-80">{category.productCount} Products</p>
                    </div>
                  </div>
                  
                  {/* Preview Products */}
                  <div className="flex gap-2 overflow-hidden">
                    {categoryProducts.slice(0, 3).map((product) => (
                      <div key={product.id} className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {categoryProducts.length > 3 && (
                      <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center text-sm font-medium flex-shrink-0">
                        +{categoryProducts.length - 3}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
