---
name: labs-contributing
description: Guidelines and instructions when adding a new page to the blog.
---

# Contributing Guidelines for Steren's Labs Blog

This skill provides the official guidelines and step-by-step workflow for adding new pages/posts to this blog. Follow these instructions precisely to ensure consistency and correct indexing.

## Workflow Patterns

### 1. Planning and Date Selection
- Always use **today's date** (the current local date) for any new posts.
- Ensure the date is formatted correctly in all locations.

### 2. Directory Structure and Page Creation
- Create a new directory to host the page within the relevant yearly directory.
  - *Example*: Use `2025/a-new-post/` for a post named "A new post".
- Add an `index.html` file inside that folder.
- Ensure the `index.html` uses the same template/structure as the other existing pages on the blog.
- The `<time>` tag within the page must use the `YYYY-MM-DD` format.

### 3. Asset Generation (Icons & Previews)
- **icon.svg**: Generate an icon in SVG format named `icon.svg` in the new post's folder.
- **title.svg**: Generate a social preview image in SVG format named `title.svg` in the same folder.
- **Social Media Markup**: The `<head>` section of the new page must contain social media markup (e.g., Open Graph, Twitter cards) referencing a `title.png` image (even though the generated preview is `title.svg`).

### 4. Updating Indexes and Feeds
- **Root index.html**:
  - Reference the new page at the top of the list in the root [index.html](../../../index.html).
  - Use the new post's `icon.svg` image in the root index listing.
- **Root atom.xml**:
  - Reference the new page at the top of the feed in [atom.xml](../../../atom.xml).
  - Update the root `<updated>` tag of the atom feed to today's date/time.
  - Do **NOT** include any `<content>` tag for the new entry; use an empty `<summary>` tag instead (e.g., `<summary />` or `<summary></summary>`).
