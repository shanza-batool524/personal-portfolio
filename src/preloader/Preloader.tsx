import { motion } from "framer-motion";
type Props ={
  setLoading :any
}
const Preloader = ({ setLoading }:Props) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1}}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
      onAnimationComplete={() => setLoading(false)}
      style={{ originX: 0.5 }} // Expands from center
    >
      <motion.div
        className="bg-white h-full w-[5px]"
        initial={{ scaleX: 0.5 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Preloader;
