---
name: labs-contributing
description: Guidelines and instructions when adding a new page to the blog.
---

# Contributing Guidelines for Steren's Labs Blog

This skill provides the official guidelines, step-by-step workflow, and standard templates for adding new pages/posts to this blog. Follow these instructions precisely to ensure consistency, accessibility, and correct indexing.

---

## Workflow Checklist

1. **Date & Slug Selection**: Determine the URL-friendly folder name (slug) and always use **today's date** (the current local date) for any new posts. Ensure the date is formatted correctly in all locations.
2. **Directory Creation**: Create a new directory to host the page within the relevant yearly directory.
   - *Example*: Use `2025/a-new-post/` for a post named "A new post".
3. **Write Post Content (`index.html`)**: Initialize the post with the standard metadata, semantic tags, and JSON-LD schema. Ensure the `index.html` uses the same template/structure as the other existing pages on the blog.
4. **Generate Assets (`icon.svg`, `title.svg`, `title.png`)**:
   - Create a light/dark-responsive `icon.svg` square logo with a solid background (no transparency).
   - Create a 1200x630px `title.svg` social preview embedding the `icon.svg` content, with a solid background and descriptive typography.
   - Convert `title.svg` to an opaque `title.png` using the macOS `sips` utility.
5. **Update Root Index (`index.html`)**: Register the new page at the top of the list in the root `index.html` using the new post's `icon.svg` image.
6. **Update Atom Feed (`atom.xml`)**: Add a feed entry at the top, and update the feed's root `<updated>` timestamp to today's date/time.
7. **Verify**: Run manual and local validation checks.

---

## 1. Directory Structure

Every blog post must reside in its own folder under the directory of the current calendar year:

```text
[root]
├── YYYY/
│   └── [post-slug]/
│       ├── index.html   <-- Post content
│       ├── icon.svg     <-- Square logo (responsive light/dark mode)
│       ├── title.svg    <-- 1200x630 social preview mockup (SVG)
│       └── title.png    <-- 1200x630 social preview mockup (PNG)
```

- *Example*: Create `2025/a-new-post/` for a post named "A new post".

---

## 2. Post Content Template (`index.html`)

Use the template below to create `YYYY/[post-slug]/index.html`. Replace all placeholder values (`YYYY`, `post-slug`, `[Post Title]`, `[Post Description]`, etc.) with today's date and actual post details:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>[Post Title]</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/style.css" />
  <link rel="icon" type="image/svg+xml" href="icon.svg">
  <meta name="color-scheme" content="light dark">
  <meta name="view-transition" content="same-origin">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="[Post Description]">
  <meta name="author" content="Steren">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:creator" content="@steren">
  <meta name="twitter:title" content="[Post Title]">
  <meta name="twitter:image" content="https://labs.steren.fr/YYYY/[post-slug]/title.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="[Post Title]">
  <meta property="og:image" content="https://labs.steren.fr/YYYY/[post-slug]/title.png">
  <meta property="og:description" content="[Post Description]">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Article",
    "author": "Steren Giannini",
    "name": "[Post Title]",
    "headline": "[Post Title]",
    "description": "[Post Description]",
    "image": "https://labs.steren.fr/YYYY/[post-slug]/title.png",
    "datePublished": "YYYY-MM-DDT00:00:00Z"
  }
  </script>
</head>
<body>
<header>
  <h1><a href="/" rel="home">Steren's labs</a></h1>
</header>
<main role="main">
  <article>
    <header>
      <h2>[Post Title]</h2>
      <span>
        <time datetime="YYYY-MM-DDT00:00:00Z">YYYY-MM-DD</time>
      </span>
    </header>

    <!-- Post Body starts here -->
    <p>[First paragraph introducing the project or experiment...]</p>

    <figure>
      <img src="icon.svg" alt="[Descriptive alternative text for accessibility]"/>
      <figcaption>[Figure caption explaining the diagram/icon]</figcaption>
    </figure>

    <h3>[Sub-heading]</h3>
    <p>[Content...]</p>
    <!-- Post Body ends here -->

  </article>
</main>
<footer>
  <a href="/" title="Steren's labs">labs home</a>
  -
  <a href="https://twitter.com/intent/follow?screen_name=steren&user_id=21694917" rel=nofollow target=_blank title="Follow me on Twitter">@steren</a>
</footer>
</body>
</html>
```

### Writing Best Practices
- **Accessibility**: Any `<img>` tags within the blog post must have a descriptive `alt=` attribute. Do not leave it blank.
- **Dates**: Always use **today's date** (the current local date) for any new posts. Ensure the date is formatted correctly in all locations. The `<time>` tag within the page must use the `YYYY-MM-DD` format (e.g., `YYYY-MM-DD` for display, and `YYYY-MM-DDT00:00:00Z` in JSON-LD and the datetime attribute).

---

## 3. Asset Generation (`icon.svg`, `title.svg`, `title.png`)

To maintain the premium look and feel of the blog, high-quality vector assets are required for each post.

### A. Square Logo (`icon.svg`)
The icon appears in the hexagonal list on the home page and as the tab icon. 
- Create a square layout with standard responsive styling.
- **Background Constraint**: Generate an icon in SVG format named `icon.svg` in the new post's folder. Make sure the SVG includes a solid background (e.g., using a `<rect width="100%" height="100%" fill="...">` as the base layer) with no transparency so it is always compatible and readable on both black and white pages. Responsive light/dark styles can be achieved via media queries, but a solid background remains mandatory.

**Minimal `icon.svg` Boilerplate:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <style>
    .bg { fill: #ffffff; }
    .text { fill: #333333; font-family: sans-serif; font-size: 32px; font-weight: bold; }
    .stroke-shape { stroke: #333333; stroke-width: 8; fill: none; }
    @media (prefers-color-scheme: dark) {
      .bg { fill: #121212; }
      .text { fill: #eeeeee; }
      .stroke-shape { stroke: #eeeeee; }
    }
  </style>
  
  <!-- Solid background rect with no transparency -->
  <rect width="100%" height="100%" class="bg" />

  <!-- Visual content goes here -->
  <circle cx="256" cy="210" r="120" class="stroke-shape" />
  <text x="256" y="400" text-anchor="middle" class="text">My Project Icon</text>
</svg>
```

### B. Social Sharing Preview SVG (`title.svg`)
Social previews must be exactly **1200x630px** (the industry-standard aspect ratio for Twitter large images and Facebook Open Graph previews).
- **Layout Constraint**: Place the post's logo/diagram on the left side and typography (post title + description) on the right side.
- **Embedded Content**: If applicable, embed the `icon.svg` content and add a title.
- **Background Constraint**: Make sure it also includes a solid background `<rect>` with no transparency.
- **Text Alignment**: Ensure that the text on the right does not overlap with the diagram on the left; use newlines (`<text>` tags on different `y` coordinates) or scale down the diagram as needed.

**Minimal `title.svg` Boilerplate:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <style>
    .font-title { font-family: sans-serif; font-size: 64px; font-weight: bold; fill: #111111; }
    .font-sub { font-family: sans-serif; font-size: 32px; fill: #555555; }
    .stroke-shape { stroke: #111111; stroke-width: 8; fill: none; }
  </style>

  <!-- Full, solid background to prevent transparency on PNG conversion -->
  <rect width="100%" height="100%" fill="#f8f9fa" />

  <!-- Left Side: Icon / Diagram Graphic (Scaled and centered) -->
  <g transform="translate(100, 115)">
    <!-- (Copy of icon.svg elements or a beautiful custom schematic) -->
    <rect width="400" height="400" rx="16" fill="#ffffff" stroke="#111111" stroke-width="6" />
    <circle cx="200" cy="200" r="100" class="stroke-shape" />
  </g>

  <!-- Right Side: Descriptive Typography -->
  <!-- Note: Ensure y-coordinates are separated to prevent overlapping -->
  <text x="620" y="260" class="font-title">First Line of Title</text>
  <text x="620" y="340" class="font-title">Second Line of Title</text>
  
  <text x="620" y="440" class="font-sub">A description of the project</text>
  <text x="620" y="490" class="font-sub">and what it achieves.</text>
</svg>
```

### C. Convert SVG to PNG (`title.png`)
Social networks require a static raster image. Generate a PNG version of `title.svg` using the `sips` command on macOS:
```bash
sips -s format png title.svg --out title.png
```
*Note: Because of the solid background in the SVG, this will result in an opaque PNG. Run this command inside the new post directory. Always verify that `title.png` was created successfully and is opaque.*

- **Social Media Markup**: The `<head>` section of the new page must contain social media markup (e.g., Open Graph, Twitter cards) referencing the generated `title.png` image.

---

## 4. Registering the Post

After creating the post folder and generating assets, register it in the main listing and feed.

### A. Root `index.html` Registration
Open the root `index.html` file, locate the `<ol class="pages">` tag, and insert the new post's list item **at the very top** (directly after `<ol class="pages">`):
- Reference the new page at the top of the list in the root [index.html](../../../index.html).
- Use the new post's `icon.svg` image in the root index listing.

```html
    <li>
      <a href="YYYY/[post-slug]/">
       <figure>
        <img loading="lazy" src="YYYY/[post-slug]/icon.svg" alt="" title="[Post Title]">
        <figcaption>
          [Post Title]
        </figcaption>
       </figure>
      </a>
    </li>
```

### B. Atom Feed (`atom.xml`) Registration
Open the root `atom.xml` file:
1. Reference the new page at the top of the feed in [atom.xml](../../../atom.xml).
2. Update the root `<updated>` tag of the atom feed (near line 16) to today's date/time:
   ```xml
     <updated>YYYY-MM-DDT00:00:00Z</updated>
   ```
3. Insert a new `<entry>` element **at the very top** of the entry list (directly under the feed `<updated>` tag):
   ```xml
     <entry>
       <title>[Post Title]</title>
       <link href="https://labs.steren.fr/YYYY/[post-slug]/"/>
       <updated>YYYY-MM-DDT00:00:00Z</updated>
       <id>https://labs.steren.fr/YYYY/[post-slug]/</id>
       <summary></summary>
     </entry>
   ```
   *Note: Do **NOT** include any `<content>` tag for the new entry; use an empty `<summary>` tag instead (e.g., `<summary />` or `<summary></summary>`).*

---

## 5. Verification Checklist

Before marking the task as completed, verify the following:
- [ ] Post directories and files are named with correct casing and URL-friendly dashes (e.g., `YYYY/[post-slug]/`).
- [ ] All references to dates use the identical and correctly formatted date (always use today's date).
- [ ] `icon.svg` loads cleanly, has responsive dark/light styles, and has a solid background with no transparency.
- [ ] `title.svg` has an opaque background, contains a left-hand visual with right-hand text, and has zero text overlap.
- [ ] `title.png` was correctly compiled via `sips`, is non-transparent, and has standard dimensions of 1200x630.
- [ ] `<head>` metadata in the new post points to the absolute Twitter and Open Graph image URLs on `https://labs.steren.fr/...`.
- [ ] Every image in the post has a descriptive `alt=` attribute.
- [ ] Root `index.html` features the new listing at the very top of `<ol class="pages">` using `icon.svg`.
- [ ] Root `atom.xml` contains the new entry at the top, feed `<updated>` is bumped, and the entry's `<summary>` is empty.
- [ ] A local verification web server has been started, and the localhost preview URL has been shared with the human for verification.

---

## 6. Local Server Verification

Once you have completed creating the article, generating assets, and updating root indexes, you must launch a local web server at the root of this repository so the human can preview and verify the changes:

1. **Start the Server**: Propose or run one of these commands at the repository root:
   - **Python 3**: `python3 -m http.server 8080`
   - **Node.js**: `npx -y http-server -p 8080` or `npx -y serve -l 8080`
2. **Present the URL**: Explicitly output the localhost links in your message to the human for easy clicking and verification:
   - Home Page: [http://localhost:8080/](http://localhost:8080/)
   - New Article: [http://localhost:8080/YYYY/[post-slug]/](http://localhost:8080/YYYY/[post-slug]/)

