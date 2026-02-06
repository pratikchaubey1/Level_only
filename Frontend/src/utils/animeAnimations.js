import { animate } from 'animejs';

// Page load animation
export const pageLoadAnimation = () => {
  const targets = document.querySelectorAll('.animate-page-load');
  if (targets.length === 0) return;
  
  animate('.animate-page-load', {
    translateY: [20, 0],
    duration: 800,
    ease: 'outExpo'
  });
};

// Card hover animation
export const cardHoverAnimation = (target) => {
  if (!target) return;
  animate(target, {
    scale: 1.05,
    duration: 300,
    ease: 'outQuad'
  });
};

export const cardHoverOutAnimation = (target) => {
  if (!target) return;
  animate(target, {
    scale: 1,
    duration: 300,
    ease: 'outQuad'
  });
};

// Button pulse animation
export const buttonPulseAnimation = (target) => {
  if (!target) return;
  animate(target, {
    scale: [1, 1.05, 1],
    duration: 600,
    ease: 'inOutQuad'
  });
};

// Navbar scroll animation
export const navbarScrollAnimation = (target, isScrolled) => {
  if (!target) return;
  animate(target, {
    backgroundColor: isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0)',
    duration: 500,
    ease: 'outQuad'
  });
};

// Hero text animation
export const heroTextAnimation = () => {
  const targets = document.querySelectorAll('.animate-hero-text');
  if (targets.length === 0) return;
  
  animate('.animate-hero-text', {
    translateY: [30, 0],
    duration: 1000,
    ease: 'outExpo'
  });
};

// Category cards stagger animation
export const categoryCardsAnimation = () => {
  const targets = document.querySelectorAll('.animate-category-card');
  if (targets.length === 0) return;
  
  animate('.animate-category-card', {
    translateY: [30, 0],
    scale: [0.95, 1],
    duration: 600,
    ease: 'outExpo'
  });
};

// Footer animation
export const footerAnimation = () => {
  const targets = document.querySelectorAll('.animate-footer');
  if (targets.length === 0) return;
  
  animate('.animate-footer', {
    translateY: [20, 0],
    duration: 800,
    ease: 'outQuad'
  });
};

// Modal entrance animation
export const modalEntranceAnimation = (target) => {
  if (!target) return;
  animate(target, {
    scale: [0.95, 1],
    duration: 300,
    ease: 'outQuad'
  });
};

// Image fade-in animation
export const imageFadeInAnimation = () => {
  const targets = document.querySelectorAll('.animate-image-fade');
  if (targets.length === 0) return;
  
  animate('.animate-image-fade', {
    scale: [0.98, 1],
    duration: 600,
    ease: 'outQuad'
  });
};

// Product card animation
export const productCardAnimation = () => {
  const targets = document.querySelectorAll('.animate-product-card');
  if (targets.length === 0) return;
  
  animate('.animate-product-card', {
    translateY: [20, 0],
    duration: 500,
    ease: 'outQuad'
  });
};
