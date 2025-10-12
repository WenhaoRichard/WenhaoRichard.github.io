---
title: "Jekyll 工作流：提交前如何在本地预览网站"
date: 2025-10-12
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
  - Jekyll
  - Workflow
---

在将代码推送到 GitHub 并公开部署之前，在本地预览所有更改是一个至关重要的步骤。这能确保发现并修复任何布局问题、链接错误或内容排版问题，避免将不完善的页面发布到线上。

对于基于 Jekyll 的网站（例如个人主页），这个过程非常简单。

### 核心工具：Jekyll 本地服务器

Jekyll 内置了一个开发服务器，它可以在您的电脑上运行一个完整的、功能齐全的网站副本。更棒的是，它支持**实时重新加载（Live Reload）**，这意味着当您保存任何文件更改时，浏览器中的页面会自动刷新，立即显示最新的效果。

### 本地预览的步骤

1.  **确保环境已设置**
    在首次运行或长时间未使用后，请确保您的 Ruby 环境和项目依赖是完整的。
    -   **安装依赖**: 如果您还没有安装或者 `Gemfile` 有变动，请运行：
        ```bash
        bundle install
        ```
        这个命令会安装所有在 `Gemfile` 中定义的 Ruby gems（插件）。

2.  **启动本地服务器**
    这是最关键的一步。在您的项目根目录下（即 `WenhaoRichard.github.io/`），运行以下命令：
    ```bash
    bundle exec jekyll liveserve
    ```
    -   `bundle exec`: 确保命令使用的是您项目中指定的 `Gemfile` 所定义的 gems，而不是系统全局安装的 gems，这可以避免版本冲突。
    -   `jekyll liveserve`: 这是 `jekyll serve --livereload` 的简写。它会执行以下操作：
        -   **构建网站**: 将您所有的 Markdown 文件、布局、Sass/SCSS 等转换成一个位于 `_site` 目录下的静态网站。
        -   **启动服务器**: 在本地启动一个 Web 服务器。
        -   **监听文件**: 持续监控项目文件的任何变动。

3.  **在浏览器中预览**
    当服务器成功启动后，您会在终端看到类似以下的输出：
    ```
    Server address: http://127.0.0.1:4000/
    Server running... press ctrl-c to stop.
    ```
    现在，只需在您的浏览器中打开 `http://localhost:4000` (或者上面显示的地址)，您就能看到和线上几乎一模一样的网站了。

4.  **进行修改并实时预览**
    保持终端中的服务器运行。现在，您可以随意编辑项目中的任何文件，例如：
    -   修改一篇博客文章。
    -   调整 `_config.yml` 中的配置（**注意**：修改 `_config.yml` 后需要手动停止服务器 `Ctrl+C` 并重新运行 `bundle exec jekyll liveserve`）。
    -   更改 CSS 样式或 JavaScript 脚本。

    每当您保存文件时，Jekyll 会自动重新构建受影响的页面，并且您的浏览器会自动刷新，您会立刻看到更改的效果。

5.  **停止服务器**
    当您完成预览和修改，准备提交代码时，只需回到运行服务器的终端窗口，按下 `Ctrl + C` 即可停止服务器。

### 总结的工作流程

一个高效的开发工作流如下：

1.  **启动服务**: `bundle exec jekyll liveserve`
2.  **编码与修改**: 在您喜欢的编辑器中修改文件并保存。
3.  **实时预览**: 在浏览器中查看 `localhost:4000`，观察自动刷新的结果。
4.  **迭代**: 重复步骤 2 和 3，直到您对所有更改都满意。
5.  **停止服务**: 按下 `Ctrl + C`。
6.  **提交代码**:
    ```bash
    git add .
    git commit -m "描述您的更改"
    git push
    ```

通过遵循这个流程，您可以充满信心地进行开发和发布，确保每一次提交都是经过验证和符合预期的。
