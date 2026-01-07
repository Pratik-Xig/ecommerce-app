import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Package, Heart, MapPin, Settings, LogOut } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Account: React.FC = () => {
  const { items: wishlistItems } = useWishlist();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login
    setIsLoggedIn(true);
    toast.success('Welcome back!');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo signup
    setIsLoggedIn(true);
    toast.success('Account created successfully!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-12 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-8"
          >
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-muted-foreground text-sm">Enter your credentials to continue</p>
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  />
                  <Button type="submit" className="w-full">Login</Button>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">or</span>
                    </div>
                  </div>
                  <Button type="button" variant="outline" className="w-full">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                    Continue with Google
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                    <p className="text-muted-foreground text-sm">Enter your details to get started</p>
                  </div>
                  <Input
                    placeholder="Full Name"
                    required
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                  />
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </TabsContent>
            </Tabs>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  // Logged In View
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Demo User</h3>
                  <p className="text-sm text-muted-foreground">demo@technova.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-3" />
                  Orders
                </Button>
                <Link to="/wishlist">
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-3" />
                    Wishlist ({wishlistItems.length})
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-3" />
                  Addresses
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Button>
                <hr className="my-2" />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-destructive hover:text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </Button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">My Profile</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <Input defaultValue="Demo User" placeholder="Full Name" />
                <Input defaultValue="demo@technova.com" placeholder="Email" disabled />
                <Input defaultValue="+91 98765 43210" placeholder="Phone" />
                <Input defaultValue="" placeholder="Date of Birth" type="date" />
              </div>

              <Button>Save Changes</Button>

              <hr className="my-8" />

              <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
              <div className="text-center py-8 text-muted-foreground">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No orders yet</p>
                <Link to="/products">
                  <Button variant="link">Start Shopping</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
