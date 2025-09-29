import { motion } from "framer-motion";

export default function Background() {
  const nodos = [
    [200, 150],
    [400, 300],
    [600, 450],
    [800, 600],
    [1000, 300],
    [1200, 500],
    [1400, 700],
    [300, 700],
    [500, 250],
    [900, 650],
    [1100, 400],
    [1300, 200],
    [250, 500],
    [450, 700],
    [700, 200],
    [950, 500],
    [1150, 650],
    [1350, 350],
  ];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
      className="fixed inset-0 -z-10 w-full h-full"
    >
      {/* Fondo blanco */}
      <rect width="100%" height="100%" fill="white" />

      {/* === Circuitos principales gruesos === */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          d="M200 150 H1400 V250 H500 V400 H1100 V600 H300 V750"
          stroke="#13479B"
          strokeWidth="3"
        />
        <path
          d="M250 200 V700 H1350 V300 H600 V500 H950 V650"
          stroke="#13479B"
          strokeWidth="3"
        />
        <path d="M800 100 V800" stroke="#13479B" strokeWidth="3" />
        <path d="M1000 150 V750" stroke="#13479B" strokeWidth="3" />
      </g>

      {/* === Circuitos secundarios === */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M400 200 V650" stroke="#13479B" strokeWidth="1.5" />
        <path d="M1200 250 V700" stroke="#13479B" strokeWidth="1.5" />
        <path d="M700 300 H1200" stroke="#13479B" strokeWidth="1.5" />
        <path d="M450 500 H900" stroke="#13479B" strokeWidth="1.5" />
        <path
          d="M200 400 H600 V600 H200 Z"
          stroke="#13479B"
          strokeWidth="1.5"
        />
        <path
          d="M1000 200 H1400 V600 H1000 Z"
          stroke="#13479B"
          strokeWidth="1.5"
        />
        <path
          d="M300 300 L600 100 L900 300 L1200 100"
          stroke="#13479B"
          strokeWidth="1.5"
        />
        <path
          d="M300 600 L600 800 L900 600 L1200 800"
          stroke="#13479B"
          strokeWidth="1.5"
        />
      </g>

      {/* === Nodos sincronizados === */}
      {nodos.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="8"
          stroke="#13479B"
          fill="#13479B"
          animate={{ r: [6, 12, 6], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
}
