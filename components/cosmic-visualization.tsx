"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function CosmicVisualization() {
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-slate-900 shadow-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-950"></div>

      {/* Stars */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(2px 2px at var(--x) var(--y), white, rgba(0,0,0,0))",
          backgroundSize: "200px 200px",
          backgroundPosition: "0 0, 100px 100px",
          animation: "twinkle 8s ease-in-out infinite alternate",
        }}
      ></div>

      {/* Sun */}
      <div
        className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full bg-yellow-300 blur-sm"
        style={{
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          boxShadow: "0 0 60px 30px rgba(255, 214, 0, 0.3), 0 0 100px 60px rgba(255, 147, 0, 0.2)",
        }}
      ></div>

      {/* Earth */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orbit 30s linear infinite",
        }}
      >
        <div className="relative w-16 h-16 md:w-24 md:h-24">
          <Image
            src="/earth-daymap.png"
            alt="Earth"
            fill
            sizes="(max-width: 768px) 64px, 96px"
            className="rounded-full animate-spin-slow"
            style={{ animationDuration: "20s" }}
            priority
          />
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-transparent to-black/50 animate-spin-slow"
            style={{ animationDuration: "20s" }}
          ></div>
        </div>

        {/* Moon */}
        <div
          className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300"
          style={{
            top: "50%",
            left: "140%",
            transform: "translateY(-50%)",
            animation: "moonOrbit 8s linear infinite",
            boxShadow: "inset -2px 0 3px rgba(0, 0, 0, 0.6)",
          }}
        ></div>
      </div>

      {/* Mars */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orbit 56s linear infinite",
          animationDelay: "-15s",
        }}
      >
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-500"></div>
      </div>

      {/* Jupiter */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orbit 120s linear infinite",
          animationDelay: "-40s",
        }}
      >
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-300 opacity-80"></div>
      </div>

      {/* Shooting star */}
      <div
        className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white"
        style={{
          top: "30%",
          left: "80%",
          boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.4)",
          animation: "shootingStar 6s linear infinite",
        }}
      ></div>

      {/* Knowledge symbols */}
      <div className="absolute top-1/4 left-1/4 text-white opacity-20 animate-pulse text-xl md:text-3xl">π</div>
      <div
        className="absolute bottom-1/4 right-1/3 text-white opacity-20 animate-pulse text-xl md:text-3xl"
        style={{ animationDelay: "1s" }}
      >
        E=mc²
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-white opacity-20 animate-pulse text-xl md:text-3xl"
        style={{ animationDelay: "2s" }}
      >
        ∞
      </div>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes moonOrbit {
          0% {
            transform: translateY(-50%) rotate(0deg) translateX(20px);
          }
          100% {
            transform: translateY(-50%) rotate(360deg) translateX(20px);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          40% {
            transform: translate(-200px, 100px) scale(0.2);
            opacity: 0;
          }
          100% {
            transform: translate(-200px, 100px) scale(0);
            opacity: 0;
          }
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
