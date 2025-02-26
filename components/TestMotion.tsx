"use client";
import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Motion Test Component
    </motion.div>
  );
}
