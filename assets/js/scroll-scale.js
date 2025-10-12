document.addEventListener('DOMContentLoaded', function() {
  const scaleContainer = document.querySelector('.scroll-scale-container');
  if (!scaleContainer) return;

  const scaleContent = document.querySelector('.scroll-scale-content');
  if (!scaleContent) return;

  // 设置一个滚动区域来触发缩放，例如视口高度的两倍
  const scrollHeightForScaling = window.innerHeight * 2;
  scaleContainer.parentElement.style.height = `${scrollHeightForScaling}px`;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = scaleContainer.parentElement.offsetTop;
    const scrollPosition = scrollTop - containerTop;

    if (scrollPosition >= 0 && scrollPosition <= scrollHeightForScaling) {
      // 从 1 (不缩放) 开始，滚动到指定高度时缩小到 0.8
      const scaleValue = 1 - (scrollPosition / scrollHeightForScaling) * 0.2;
      scaleContent.style.transform = `scale(${Math.max(0.8, scaleValue)})`;
    }
  });
});
