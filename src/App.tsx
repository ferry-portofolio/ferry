/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, Mail, Instagram, Twitter, Linkedin, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* === VIDEO BACKGROUND === */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="h-full w-full object-cover scale-105"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-drone-shot-of-a-forest-and-a-river-4252-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-[1]" />
      </div>

      {/* === NAVBAR === */}
      <nav className="relative z-50 flex justify-center items-center px-8 md:px-16 py-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          PORTFOLIO<span className="text-white/30">.</span>
        </motion.div>
      </nav>

      {/* === HERO CONTENT === */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-6 text-center">
        <div className="max-w-3xl flex flex-col items-center">
          
          {/* Animasi Petunjuk Terpisah */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/30 animate-pulse"
          >
            klik foto untuk mengenal saya
          </motion.div>

          {/* Animasi Pop-in untuk Foto */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="mb-8 relative group flex flex-col items-center"
          >
            <a href="about.html" style={{ cursor: 'pointer' }}>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-white/40 transition-all duration-500">
                <img 
                  src="artifact_image_5.png" 
                  alt="Foto Profil Muhammad Ferry Hermawan" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </a>
            {/* Dekorasi Bingkai */}
            <div className="absolute -inset-2 border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
          </motion.div>

          {/* Animasi Slide Up untuk Teks Nama */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4 text-glow"
          >
            Muhammad Ferry Hermawan
          </motion.h1>

          {/* Animasi Slide Up untuk Profesinya */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            className="text-lg md:text-xl font-light text-white/60 mb-8 max-w-lg leading-relaxed uppercase tracking-[0.2em]"
          >
            videographer & video editor
          </motion.p>

        </div>
      </main>

      {/* === FOOTER / SOCIALS === */}
      <footer className="absolute bottom-10 w-full px-8 md:px-16 flex flex-col items-center gap-6 z-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex gap-6"
        >
          <a href="https://www.instagram.com/ferry.cube/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/30 hover:text-white transition-colors"><Instagram size={18} /></a>
          <a href="https://www.tiktok.com/@ferry_8k?lang=en" target="_blank" rel="noopener noreferrer" className="p-2 text-white/30 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96a6.666 6.666 0 0 1 3.68-1.55l-.04 3.97c-.87.13-1.73.48-2.43 1.05-.71.57-1.19 1.41-1.29 2.3-.14.86.11 1.76.65 2.45.54.68 1.35 1.13 2.21 1.25.96.12 1.95-.14 2.7-.76.7-.57 1.09-1.46 1.12-2.36-.02-3.23-.01-6.46-.01-9.69-.01-1.43.01-2.85-.01-4.28z"/></svg>
          </a>
          <a href="https://wa.me/62895324781306" target="_blank" rel="noopener noreferrer" className="p-2 text-white/30 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.554 4.197 1.604 6.02L0 24l6.101-1.6c1.782.97 3.791 1.485 5.843 1.485h.005c6.636 0 12.046-5.412 12.05-12.049a11.83 11.83 0 00-3.52-8.529z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ferry-hermawan/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/30 hover:text-white transition-colors"><Linkedin size={18} /></a>
        </motion.div>
      </footer>
    </div>
  );
}

