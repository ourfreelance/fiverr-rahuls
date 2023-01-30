# Rahuls Site

```
minimum hugo version 0.92.2
tailwindcss version 3.1.5
```

# Setup dev env

Run "npm install" (first time only)

Then configure `config.toml`

# Run hugo server

1. run hugo server

```
hugo server
```

2. run tailwindcss server (if you edit some style with tailwindcss)

```
npm run tailwind-dev
```

Tailwind CSS file located at `./tailwindcss`.
Generated Tailwind CSS located at `./static/css/main.css`.

# Build hugo site

```
hugo --ignoreCache --minify
```

# To create new page

```
hugo new posts/page-name/index.md
```

and then edit file located at `./content/posts/page-name/index.md`, setup frontmatter, add your thumbnail image and lets write your content


# Markdown custom shortcode

## button-link

create button with
- href for add your url
- center for centering the button
```
{{< button-link href="https://your-url.com" center="true">}}
  Your Text
{{< /button-link >}}
```

## image

create image view
- src based on root index.md of your post
- alt is name of your image
- show-alt for showing your alt to bottom of image 
```
{{< image src="images/blueridge_moubtains_blacksburg.png" alt="the blue ridge mountains around VT" show-alt="true">}}
```

# Add new image of gallery

just add new image at `static/assets/image/gallery/your-image.png`