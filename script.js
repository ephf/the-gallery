const container = document.querySelector(".painting-container");
window.onmousemove = ({ clientX, clientY }) => {
  container.animate([{ left: `-${clientX}px`, top: `-${clientY}px` }], {
    duration: 1000,
    fill: "forwards",
  });
  // container.style.left = `-${2 * clientX}px`;
  // container.style.top = `-${2 * clientY}px`;
};
