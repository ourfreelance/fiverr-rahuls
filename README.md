# Rahuls Site

```
minimum hugo version 0.92.2
tailwindcss version 3.1.5
```

# Setup dev env

Run "npm install" (first time only)

Then configure `config.yaml` to setting your name, description, email, social media link and footer menu list

# Run hugo server

1. run hugo server

```
hugo server
```

2. run tailwindcss server (if you edit some style with tailwindcss)

```
npm run dev
```

Tailwind CSS file located at `./tailwindcss`.
Generated Tailwind CSS located at `./static/css/main.css`.

# Build hugo site

```
hugo --ignoreCache --minify
```

# To create new portfolio

```
hugo new portfolio/your-portfolio-name.md
```

# To create new blog post

```
hugo new blog/your-blog-title.md
```

and then edit file located at `./content/portfolio/your-portfolio-name.md` or `./content/blog/your-blog-title.md`, setup frontmatter, add your thumbnail image and lets write your content

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

## change home page wording

open file located at  `./content/home/hero.md`, `./content/home/portfolio.md`, `./content/home/about.md`. than edit wording you want change.

## change about company wording

open file located at  `./content/about-company.md`. than edit wording you want change.