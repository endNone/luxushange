"use strict";

const glowInTexts = document.querySelectorAll(".glowIn");
const options = {
  threshold: 0.5,
};

// 创建 IntersectionObserver 实例
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const letters = entry.target.textContent.split("");
      entry.target.textContent = "";
      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        entry.target.appendChild(span);
      });
      observer.unobserve(entry.target);
    }
  });
}, options);

// 观察每个需要动画效果的元素
glowInTexts.forEach((glowInText) => {
  observer.observe(glowInText);
});

