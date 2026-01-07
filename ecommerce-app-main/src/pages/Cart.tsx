import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const shipping = totalPrice > 50000 ? 0 : 499;
  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + tax;

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  if (isCheckout) {
    return <CheckoutForm onBack={() => setIsCheckout(false)} grandTotal={grandTotal} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-4 p-4 bg-card rounded-2xl"
                  >
                    <Link to={`/product/${item.product.id}`} className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="font-semibold truncate hover:text-primary">{item.product.name}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.product.category}</p>
                      <p className="text-lg font-bold mt-1">₹{item.product.price.toLocaleString()}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <Button variant="outline" onClick={clearCart} className="mt-4">
                Clear Cart
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (18% GST)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground mt-4">
                    Add ₹{(50000 - totalPrice).toLocaleString()} more for free shipping
                  </p>
                )}

                <Button className="w-full mt-6" size="lg" onClick={handleCheckout}>
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any items yet
            </p>
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// Checkout Form Component
const CheckoutForm: React.FC<{ onBack: () => void; grandTotal: number }> = ({ onBack, grandTotal }) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    upiId: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success('Order placed successfully! Thank you for your purchase.');
      window.location.href = '/';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 max-w-2xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          ← Back to Cart
        </Button>
        
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Input
                placeholder="City"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <Input
                placeholder="Address"
                required
                className="sm:col-span-2"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              <Input
                placeholder="Pincode"
                required
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Payment (UPI)</h2>
            <Input
              placeholder="Enter UPI ID (e.g., name@upi)"
              required
              value={formData.upiId}
              onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
            />
            <p className="text-sm text-muted-foreground mt-2">
              You will receive a payment request on your UPI app
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total to Pay</span>
              <span>₹{grandTotal.toLocaleString()}</span>
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Pay ₹${grandTotal.toLocaleString()}`}
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
