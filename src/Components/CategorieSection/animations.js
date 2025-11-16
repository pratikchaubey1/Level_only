// animations.js
export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const titleVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      // agar chaho to per-card delay use karo:
      // delay: custom * 0.06
    },
  }),
};
