'use client';

import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-black" />
      
      {/* Main energy ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 60%, rgba(0, 170, 255, 0.1) 70%, rgba(0, 170, 255, 0.3) 80%, rgba(0, 170, 255, 0.1) 90%, transparent 100%)',
              filter: 'blur(8px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Main ring */}
          <motion.div
            className="relative w-96 h-96 rounded-full border-2"
            style={{
              borderColor: '#00aaff',
              boxShadow: `
                0 0 20px rgba(0, 170, 255, 0.5),
                0 0 40px rgba(0, 170, 255, 0.3),
                inset 0 0 20px rgba(0, 170, 255, 0.1)
              `,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Inner energy waves */}
          <motion.div
            className="absolute inset-8 rounded-full border"
            style={{
              borderColor: 'rgba(0, 170, 255, 0.6)',
              boxShadow: '0 0 15px rgba(0, 170, 255, 0.4)',
            }}
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>
      
      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${20 + (i * 5)}%`,
            top: `${30 + (i * 3)}%`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 4px rgba(0, 170, 255, 0.8)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Energy sparks around the ring */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            filter: 'blur(1px)',
            boxShadow: '0 0 8px rgba(0, 255, 255, 0.9)',
          }}
          animate={{
            x: [
              0,
              200 * Math.cos((i * Math.PI * 2) / 8),
              0,
            ],
            y: [
              0,
              200 * Math.sin((i * Math.PI * 2) / 8),
              0,
            ],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Subtle radial background pulse */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-[120vw] h-[120vh] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 170, 255, 0.05) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>
    </div>
  );
}