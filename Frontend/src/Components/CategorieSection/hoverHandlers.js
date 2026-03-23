export function cardHoverAnimation(el) {
  if (!el) return;

  el.style.transition = "transform 200ms cubic-bezier(0.25, 0.8, 0.25, 1)";
  el.style.transform = "translateY(-8px) scale(1.03)";
}

export function cardHoverOutAnimation(el) {
  if (!el) return;

  el.style.transition = "transform 180ms cubic-bezier(0.25, 0.8, 0.25, 1)";
  el.style.transform = "translateY(0) scale(1)";
}