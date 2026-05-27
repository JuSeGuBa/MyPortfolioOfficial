import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

export default function ScannerBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 1600,
          y: ((e.clientY - rect.top) / rect.height) * 900,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ Memoized — generated once, not on every mouse move
  const dataPoints = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 1600,
        y: Math.random() * 900,
        size: Math.random() * 2 + 1.5,
        delay: Math.random() * 3,
        speed: Math.random() * 2 + 1,
        type: Math.floor(Math.random() * 3),
      })),
    [],
  );

  const gridLines = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        radius: (i + 1) * 120,
        delay: i * 0.2,
      })),
    [],
  );

  return (
    <motion.svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
      className="fixed inset-0 -z-10 w-full h-full opacity-45"
    >
      <defs>
        <radialGradient id="scannerGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#1549A5" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#1549A5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1549A5" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="#1549A5" />
          <stop offset="50%" stopColor="#1549A5" />
          <stop offset="80%" stopColor="#1549A5" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <pattern
          id="grid"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 120 0 L 0 0 0 120"
            fill="none"
            stroke="#1549A5"
            strokeWidth="1"
            opacity="0.2"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="transparent" />
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Concentric radar circles */}
      {gridLines.map((line) => (
        <motion.circle
          key={line.id}
          cx={800}
          cy={450}
          r={line.radius}
          stroke="#1549A5"
          strokeWidth="1.2"
          fill="none"
          opacity="0.3"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Axis lines */}
      <line
        x1="800"
        y1="0"
        x2="800"
        y2="900"
        stroke="#1549A5"
        strokeWidth="1.5"
        opacity="0.25"
      />
      <line
        x1="0"
        y1="450"
        x2="1600"
        y2="450"
        stroke="#1549A5"
        strokeWidth="1.5"
        opacity="0.25"
      />

      {/* Main radial scanner */}
      <motion.circle
        cx={800}
        cy={450}
        r="400"
        stroke="url(#pulseGradient)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        animate={{ r: [80, 750, 80] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeOut" }}
      />

      {/* ✅ Rotating scanner beam — fixed transform-origin for SVG */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ originX: "800px", originY: "450px" }}
      >
        <motion.path
          d="M 800 450 L 1350 450"
          stroke="#1549A5"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
          animate={{ opacity: [0, 0.9, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Data points */}
      {dataPoints.map((point) => (
        <motion.g key={point.id}>
          <motion.circle
            cx={point.x}
            cy={point.y}
            r={point.size}
            fill="#1549A5"
            filter="url(#glow)"
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.7, 1.4, 0.7] }}
            transition={{
              duration: point.speed * 2,
              repeat: Infinity,
              delay: point.delay,
              ease: "easeInOut",
            }}
          />
          {point.type === 0 && (
            <motion.circle
              cx={point.x}
              cy={point.y}
              r={point.size * 3}
              stroke="#1549A5"
              strokeWidth="1"
              fill="none"
              animate={{
                r: [point.size * 2, point.size * 5, point.size * 2],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: point.speed * 2.5,
                repeat: Infinity,
                delay: point.delay,
                ease: "easeOut",
              }}
            />
          )}
        </motion.g>
      ))}

      {/* Connection lines */}
      {dataPoints.slice(0, 15).map((point, i) => (
        <motion.line
          key={`line-${i}`}
          x1={800}
          y1={450}
          x2={point.x}
          y2={point.y}
          stroke="#1549A5"
          strokeWidth="0.8"
          strokeDasharray="5 3"
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wave effect on mouse */}
      {!isNaN(mousePosition.x) && !isNaN(mousePosition.y) && (
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="45"
          stroke="url(#scannerGlow)"
          strokeWidth="2"
          fill="none"
          animate={{ r: [25, 80, 25], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* HUD text */}
      <motion.text
        x="100"
        y="100"
        fill="#1549A5"
        fontSize="16"
        fontFamily="'Courier New', monospace"
        fontWeight="bold"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        SYSTEM ONLINE
      </motion.text>
      <motion.text
        x="100"
        y="125"
        fill="#1549A5"
        fontSize="14"
        fontFamily="'Courier New', monospace"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        SCANNING...
      </motion.text>

      {/* Signal bars */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.rect
          key={i}
          x={1450 + i * 22}
          y={800 - i * 18}
          width="12"
          height={i * 18 + 12}
          fill="#1549A5"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Corner markers */}
      <path
        d="M 60 60 L 90 60 L 90 90 L 60 90"
        fill="none"
        stroke="#1549A5"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M 1540 60 L 1510 60 L 1510 90 L 1540 90"
        fill="none"
        stroke="#1549A5"
        strokeWidth="2"
        opacity="0.6"
      />
    </motion.svg>
  );
}
