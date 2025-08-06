import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg relative max-w-3xl w-full mx-4"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol close */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black hover:text-red-500 text-xl"
          >
            &times;
          </button>

          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
