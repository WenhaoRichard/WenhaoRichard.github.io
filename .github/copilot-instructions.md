# About this Website

This is a Jekyll-based academic website built using the Academic Pages template, which is a fork of the Minimal Mistakes theme. The entire site is designed to be hosted on GitHub Pages.

## Key Directories & Files

The structure follows standard Jekyll conventions, but here are the most important directories for content management:

- `_config.yml`: Main site configuration. Contains settings like site title, author information, and URL.
- `_data/`: Holds structured data for the site.
    - `navigation.yml`: Defines the main navigation links in the header.
    - `authors.yml`: Contains author profiles.
- `_pages/`: Markdown files for top-level pages like "About", "CV", and "Publications".
- `_posts/`: Markdown files for blog posts.
- `_publications/`: Markdown files for individual publications.
- `_talks/`: Markdown files for talks.
- `_teaching/`: Markdown files for teaching materials.
- `files/`: Store any static files you want to link to, such as PDFs of your papers.

## Developer Workflow

To preview the site locally:

1.  **Install dependencies:** If you haven't already, run `bundle install`.
2.  **Run the server:** Execute `bundle exec jekyll liveserve`.
    - This starts a local server at `http://localhost:4000`.
    - The site will automatically rebuild and refresh when you make changes to the files.

Deployment is handled automatically by GitHub Pages whenever changes are pushed to the main branch of this repository.

## Content Management

There are two primary ways to add and manage content:

### 1. Manual Markdown Creation

For one-off content like blog posts or new pages, you can create a new markdown file in the appropriate directory (e.g., `_posts/`, `_pages/`). All content files must begin with YAML front matter that defines metadata like `title`, `date`, and other collection-specific fields.

**Example: Creating a new blog post**
Create a file named `_posts/YYYY-MM-DD-my-new-post.md` with content like this:
```yaml
---
title: "My New Blog Post"
date: 2025-10-12
permalink: /posts/2025/10/my-new-post/
---

This is the content of my new blog post.
```

### 2. Automated Content Generation (for Publications and Talks)

A key workflow for this repository is using Python scripts to generate markdown files from data files. This is especially useful for managing long lists of publications and talks.

- **Location:** The scripts are in the `markdown_generator/` directory.
- **Workflow:**
    1. Edit the data files (e.g., a TSV file) with your publication or talk information.
    2. Run the corresponding Python script (e.g., `python markdown_generator/publications.py`).
    3. The script will generate or update the markdown files in the `_publications/` or `_talks/` directories.

When asked to add or update publications or talks, prefer using this automated workflow over manually editing the markdown files, as it ensures consistency.
