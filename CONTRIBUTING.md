To any human or LLM wanting to add a new page to this blog:

Use today's date.

Create a new folder to host the page in the relevant yearly folder. (e.g. use 2025/a-new-post/ for a past named "A new post")

Add an index.html file that uses the same template as the other pages.

Generate an icon in svg format named icon.svg in the same folder.
Generate a social preview image in SVG format named title.svg in the same folder.
The social media markup in the header of the new page should reference a title.png image.

Reference the page at the top of the root index.html and atom.xml

In atom.xml: 
- make sure to update the <updated> tag
- do not use any <content> only an empty <summary> tag

The root index.html should use the icon.svg image.
