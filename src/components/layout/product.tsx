import { motion } from "framer-motion";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  badge: string;
}

export function Product({ image, title, badge }: ProductProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-56">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />

        {/* Badge */}
        <motion.div
          className={`absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
            badge === "INMETRO"
              ? "bg-[#A76B3F]"
              : badge === "ANATEL"
              ? "bg-blue-600"
              : "bg-green-600"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {badge}
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-lg sm:text-xl font-bold text-[#2A1A12] mb-2 group-hover:text-[#A76B3F] transition-colors duration-300">
          {title}
        </h3>

        <motion.button
          className="text-[#A76B3F] font-semibold text-sm hover:text-[#8B4513] transition-colors duration-300 flex items-center gap-2"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Saiba mais
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
