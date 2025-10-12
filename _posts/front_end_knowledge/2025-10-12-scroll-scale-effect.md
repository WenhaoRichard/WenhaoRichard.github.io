---
title: "实现页面滚动缩放效果：CSS 与 JavaScript 交互"
date: 2025-10-12
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
  - Front-end
---

为了给网站增添现代感和动态交互，我们可以实现一个当用户向下滚动页面时，特定内容会平滑放大或缩小的效果。这在许多现代网站（如 `consensys.io`）中很常见，可以有效地吸引用户的注意力。

这个效果的实现主要依赖于 CSS 的 `position: sticky` 和 `transform: scale()` 属性，并通过 JavaScript 监听滚动事件来动态更新元素的样式。

### 1. 实现原理

-   **粘性定位 (`position: sticky`)**: 我们将包含待缩放内容的容器设置为粘性定位。这意味着当它滚动到屏幕顶部时，它会“固定”在那里，直到其父容器完全滚出视口。这为我们创造了一个稳定的画布来进行动画。
-   **CSS 变换 (`transform: scale()`)**: 这是实现缩放的核心。通过改变 `scale()` 的值（例如从 1 变为 0.8），我们可以让元素看起来变小。
-   **JavaScript 滚动监听**: 我们使用 `window.addEventListener('scroll', ...)` 来捕捉用户的滚动行为。在回调函数中，我们计算当前的滚动位置，并将其映射到一个缩放比例。例如，滚动得越远，缩放值越小。

### 2. 代码实现步骤

#### a. HTML 结构

首先，我们需要一个特定的 HTML 结构。一个外部容器提供滚动区域，内部的粘性容器 (`.scroll-scale-container`) 包含我们想要缩放的内容 (`.scroll-scale-content`)。

```html
<div style="height: 200vh;"> <!-- 父容器，提供足够的滚动高度 -->
  <div class="scroll-scale-container">
    <div class="scroll-scale-content">
      <!-- 你想缩放的任何内容 -->
      <h1>Hello, Scroll!</h1>
      <p>This content will scale down as you scroll.</p>
    </div>
  </div>
</div>
```

#### b. CSS 样式

接下来，我们定义 `sticky` 容器和内容容器的样式。

-   `.scroll-scale-container`: 设置为 `position: sticky` 并固定在 `top: 0`。`height: 100vh` 确保它占据整个视口高度。`overflow: hidden` 防止缩放的内容溢出。
-   `.scroll-scale-content`: 使用 Flexbox 居中内容，并添加 `transition` 属性使缩放动画更加平滑。`will-change: transform` 是一个性能优化提示，告诉浏览器这个元素的 `transform` 属性即将发生变化。

```css
.scroll-scale-container {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.scroll-scale-content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  transition: transform 0.1s ease-out;
}
```

#### c. JavaScript 逻辑

最后，JavaScript 将所有部分联系在一起。

1.  **获取元素**: 首先获取 `.scroll-scale-container` 和 `.scroll-scale-content`。
2.  **设置滚动高度**: 动态设置父容器的高度，以确保有足够的滚动空间来触发完整的动画。
3.  **监听滚动**:
    -   计算滚动位置相对于动画触发点的距离。
    -   根据这个距离计算出一个新的 `scaleValue`。例如，我们让它从 `1` 线性变化到 `0.8`。
    -   将这个新的缩放值应用到 `.scroll-scale-content` 的 `transform` 样式上。

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const scaleContainer = document.querySelector('.scroll-scale-container');
  if (!scaleContainer) return;

  const scaleContent = document.querySelector('.scroll-scale-content');
  if (!scaleContent) return;

  const scrollHeightForScaling = window.innerHeight * 2;
  scaleContainer.parentElement.style.height = `${scrollHeightForScaling}px`;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const containerTop = scaleContainer.parentElement.offsetTop;
    const scrollPosition = scrollTop - containerTop;

    if (scrollPosition >= 0 && scrollPosition <= scrollHeightForScaling) {
      const scaleValue = 1 - (scrollPosition / scrollHeightForScaling) * 0.2;
      scaleContent.style.transform = `scale(${Math.max(0.8, scaleValue)})`;
    }
  });
});
```

通过这三部分的结合，我们就实现了一个优雅的滚动缩放效果，提升了用户体验。
