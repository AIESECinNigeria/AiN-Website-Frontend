export const scrollToTheTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const scrollToTheBottom = () => {
  window.scroll({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
};
