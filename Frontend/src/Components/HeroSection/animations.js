
export const backgroundAnim = {
  initial: { opacity: 0, scale: 1 },
  animate: { opacity: 1, scale: 1.1 },
  transition: {
    opacity: { duration: 2, ease: "easeOut" },
    scale: {
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export const heroContainerAnim = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

export const heroTitleAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.3 },
};

export const heroButtonAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.6 },
};