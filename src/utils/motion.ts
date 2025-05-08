import type { Variants, Transition } from "framer-motion";

// Centralized animation configuration - more subtle
export const transitionConfig: Transition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing for premium feel
  duration: 0.4, // slightly faster for subtlety
};

// Page transition variants - more subtle
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8, // reduced from 15 for subtlety
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ...transitionConfig,
      staggerChildren: 0.05, // reduced for subtlety
    },
  },
  exit: {
    opacity: 0,
    y: -5, // reduced from -10 for subtlety
    transition: {
      ...transitionConfig,
      duration: 0.2, // reduced for subtlety
    },
  },
};

// Section reveal variants - more subtle
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15, // reduced from 30 for subtlety
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionConfig,
  },
};

// Staggered children variants - more subtle
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 }, // reduced from 20 for subtlety
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transitionConfig,
      duration: 0.3, // reduced for subtlety
    },
  },
};

// Scroll to hash function
export const scrollToHash = (hash: string): void => {
  const id = hash.replace("#", "");
  const element = document.getElementById(id);
  
  if (element) {
    // Add a small delay to ensure page has rendered
    setTimeout(() => {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  }
};

// Scroll to top function
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}; 