import type { Variants, Transition } from "framer-motion";

// Centralized animation configuration
export const transitionConfig: Transition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing for premium feel
  duration: 0.5,
};

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ...transitionConfig,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      ...transitionConfig,
      duration: 0.3,
    },
  },
};

// Section reveal variants (for scrolling animations)
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transitionConfig,
    },
  },
};

// Staggered children variants
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transitionConfig,
      duration: 0.4,
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