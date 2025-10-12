---
title: "Git 工作流：单人项目与多人协作的区别"
date: 2025-10-12
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

Git 是一个强大的版本控制工具，但根据项目是单人开发还是团队协作，其使用方式和常用命令会有所不同。

### 单人项目：线性历史，简单直接

在单人项目中，您是唯一的贡献者，工作流通常非常简单。

1.  **主要分支**：通常只在 `main` (或 `master`) 分支上工作。
2.  **工作流程**：
    *   修改代码。
    *   使用 `git add .` 将更改添加到暂存区。
    *   使用 `git commit -m "你的提交信息"` 提交更改。
    *   使用 `git push` 将本地提交推送到远程仓库（例如 GitHub），作为备份或用于部署。

这个流程是线性的，历史记录清晰，几乎不需要处理分支合并或冲突。

### 多人协作：分支、合并与代码审查

当团队协作时，Git 的核心优势——分支管理——就变得至关重要。目标是允许多人并行工作，同时保持主分支的稳定和整洁。

1.  **核心原则**：绝不直接向 `main` 分支推送代码。
2.  **常用工作流 (Feature Branch Workflow)**：
    *   **保持同步**：在开始新任务前，首先拉取主分支的最新代码：
        ```bash
        git checkout main
        git pull
        ```
    *   **创建特性分支**：为每个新功能或修复创建一个独立的分支。分支名称应具有描述性，例如 `feature/user-login` 或 `fix/payment-bug`。
        ```bash
        git checkout -b feature/user-login
        ```
    *   **开发和提交**：在新分支上进行开发，并像单人项目一样频繁提交更改。
        ```bash
        git add .
        git commit -m "feat: add username field to login form"
        git push --set-upstream origin feature/user-login
        ```
    *   **发起拉取请求 (Pull Request, PR)**：当功能完成后，通过 GitHub 等平台发起一个 Pull Request，请求将您的特性分支合并到 `main` 分支。这是代码审查（Code Review）的起点，团队成员可以在此讨论和提出修改建议。
    *   **解决冲突与合并**：如果您的分支与 `main` 分支存在冲突，您需要在本地解决它们，然后更新您的 PR。一旦审查通过，通常由项目维护者将 PR 合并到 `main` 分-支。
    *   **清理分支**：合并后，可以删除已完成的特性分支。

### 关键区别总结

| 方面 | 单人项目 | 多人协作 |
| :--- | :--- | :--- |
| **主要分支** | `main` | `main` (受保护), `develop`, 特性分支 |
| **核心命令** | `add`, `commit`, `push` | `pull`, `checkout -b`, `push`, `merge`/`rebase` |
| **工作模式** | 线性、直接 | 并行、非线性 |
| **代码集成** | 直接推送到主分支 | 通过 Pull Request 和代码审查 |
| **冲突处理** | 极少 | 常见，需要学习解决合并冲突 |
