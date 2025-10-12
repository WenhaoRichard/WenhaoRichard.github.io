---
title: "使用 Jekyll Includes 实现网站内容模块化"
date: 2025-10-13
permalink: /posts/blog_issues/modular-content-with-jekyll-includes/
---

随着网站内容越来越丰富，单个页面（尤其是像“关于我”这样的核心页面）可能会变得非常冗长和难以管理。为了解决这个问题，并提高代码的可维护性，我们可以利用 Jekyll 的 `include` 功能来将页面内容拆分成模块化、可复用的部分。

### 为什么需要模块化？

1.  **可维护性**：将大块内容分解成小文件，使得查找和修改特定部分变得更加容易。您不必再在一个巨大的文件中滚动查找。
2.  **可读性**：主页面的 Markdown 文件会变得非常简洁，只包含结构和对其他文件的引用，逻辑一目了然。
3.  **可复用性**：如果某部分内容（例如作者简介、联系信息）需要在多个页面上显示，您可以只编写一次，然后在任何需要的地方 `include` 它。

### 重构 `about.md` 页面的步骤

在本次重构中，我们将 `_pages/about.md` 文件中的主要内容部分进行了拆分。

#### 1. 创建 Include 文件

首先，我们在 `_includes/` 目录下创建了一个新的子目录 `about/` 来存放与“关于”页面相关的模块。然后，我们将 `about.md` 中的“News”、“Research Projects”、“Experience”和“Education”部分分别提取并保存到以下新文件中：

-   `_includes/about/news.html`
-   `_includes/about/research.html`
-   `_includes/about/experience.html`
-   `_includes/about/education.html`

#### 2. 在主页面中使用 `include` 标签

在创建了这些模块化文件后，我们回到 `_pages/about.md` 并删除了原来的大段 HTML/Markdown 内容。取而代之的是，我们在相应位置插入了 Jekyll 的 `include` 标签：

```liquid
{% raw %}
<div id="page-content">
  {% include about/news.html %}
  {% include about/research.html %}
  {% include about/experience.html %}
  {% include about/education.html %}
  
  <!-- 其他内容 -->
</div>
{% endraw %}
```

当 Jekyll 构建网站时，它会自动将这些 `include` 标签替换为对应文件的实际内容，最终生成与之前完全相同的网页，但我们的项目源文件现在变得更加整洁和有条理。

通过这种方式，我们不仅解决了原页面布局中的一个视觉问题（过大的间隙），还从根本上改进了网站的内容管理方式，为未来的更新和维护奠定了良好的基础。