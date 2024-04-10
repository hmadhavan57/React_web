import React from "react";
import { motion } from "framer-motion";

const Categories = ({ icon, category }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col gap-4 bg-white p-8 rounded-md"
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <a href="" className="text-sm text-gray">
        View More
      </a>
    </motion.div>
  );
};

export default Categories;