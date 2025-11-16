// hoverHandlers.js
export function cardHoverAnimation(el) {
  if (!el) return;
  // example: add a subtle shadow + translateY for hover
  el.style.transition = "transform 180ms ease, box-shadow 180ms ease";
  el.style.transform = "translateY(-6px) scale(1.02)";
  el.style.boxShadow = "0 12px 30px rgba(16,24,40,0.12)";
}

export function cardHoverOutAnimation(el) {
  if (!el) return;
  el.style.transition = "transform 160ms ease, box-shadow 160ms ease";
  el.style.transform = "translateY(0) scale(1)";
  el.style.boxShadow = "0 6px 18px rgba(16,24,40,0.06)";
}
