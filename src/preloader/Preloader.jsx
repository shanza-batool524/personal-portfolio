import { motion } from "framer-motion";

const Preloader = ({ setLoading }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
      onAnimationComplete={() => setLoading(false)}
      style={{ originX: 0.5 }} // Expands from center
    >
      <motion.div
        className="bg-white h-full w-[5px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Preloader;
