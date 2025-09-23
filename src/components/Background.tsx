import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.img
      src="/fondo/electry5.png "
      alt="Fondo animado"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.03, 1] }} // movimiento hacia adelante y atrás
      transition={{
        duration: 10, // tiempo total de un ciclo
        repeat: Infinity, // repetir siempre
        ease: "easeInOut", // suavidad natural
      }}
      className="fixed inset-0 -z-10 w-full h-auto object-center"
    />
  );
}
