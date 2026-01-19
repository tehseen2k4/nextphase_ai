"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-[95%] md:max-w-5xl rounded-full",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20"
            : "bg-transparent border border-transparent"
        )}
      >
        <div className="flex h-14 md:h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight transition-colors",
              scrolled ? "text-slate-900" : "text-slate-900"
            )}>
              NextPhase
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/solutions" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Solutions</Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Company</Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/demo"
              className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book Demo
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium text-slate-900">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>Company</Link>
              <Link href="/demo" onClick={() => setMobileMenuOpen(false)} className="text-indigo-600">Book a Demo</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
